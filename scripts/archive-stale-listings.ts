import { eq, inArray, sql } from "drizzle-orm"

import { adminAuditLog, listings } from "@/db/schema"
import { getDb, hasDatabaseUrl } from "@/lib/db"

const STALE_LISTING_IDS = [
  "215fb246fd5494bd444282b6b79d0926",
  "95aac3bbc9ff116d5f124b28424e84ff",
  "6204084ac259c6cbe902656770e54ceb",
  "a87b73d50779547d72b26db5058705b7",
  "9a4026b5b1f3ffe6ba2d564041a21127",
  "fffb5631536de0bc83b50eba9065a15c",
] as const

async function main() {
  if (!hasDatabaseUrl()) {
    console.error("DATABASE_URL is required to archive listings.")
    process.exit(1)
  }

  const db = getDb()
  const existing = await db
    .select()
    .from(listings)
    .where(inArray(listings.uniqueId, [...STALE_LISTING_IDS]))

  if (existing.length === 0) {
    console.error("No matching listings found for the provided unique_id values.")
    process.exit(1)
  }

  const missingIds = STALE_LISTING_IDS.filter(
    (id) => !existing.some((listing) => listing.uniqueId === id)
  )

  if (missingIds.length > 0) {
    console.warn("Warning: these IDs were not found in the database:")
    for (const id of missingIds) console.warn(`  - ${id}`)
  }

  const updated = await db
    .update(listings)
    .set({
      isPublished: false,
      archivedAt: sql<string>`now()`,
      updatedAt: sql<string>`now()`,
    })
    .where(inArray(listings.uniqueId, [...STALE_LISTING_IDS]))
    .returning()

  for (const listing of updated) {
    const before = existing.find((row) => row.uniqueId === listing.uniqueId)
    await db.insert(adminAuditLog).values({
      entityType: "listing",
      entityId: listing.uniqueId,
      action: "archive_stale_assets",
      actor: "script:archive-stale-listings",
      before,
      after: listing,
    })

    console.log(
      `Archived ${listing.uniqueId} (${listing.displayAddress ?? listing.fullAddress ?? "unknown address"})`
    )
  }

  console.log(`Done. Archived ${updated.length} listing(s).`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
