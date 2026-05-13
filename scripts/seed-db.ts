import { count } from "drizzle-orm"

import { donations, listings } from "@/db/schema"
import { getDb, hasDatabaseUrl } from "@/lib/db"
import { donations as staticDonations } from "@/lib/data/donations"
import { legacyChocDonation } from "@/lib/content"
import listingsData from "@/data/listings.json"
import type { Listing, ListingsData } from "@/types/listing"

function normalizeListing(listing: Listing) {
  const isSold = listing.status === "Sold"

  return {
    uniqueId: listing.uniqueId,
    displayAddress: listing.displayAddress ?? null,
    fullAddress: listing.fullAddress ?? listing.address ?? null,
    status: listing.status,
    price: listing.price,
    type: listing.type,
    category: listing.category,
    bedrooms: listing.bedrooms,
    bathrooms: listing.bathrooms,
    garages: listing.garages,
    parking: listing.parking,
    floorSize: listing.floorSize,
    erfSize: listing.erfSize,
    rates: listing.rates,
    levy: listing.levy,
    region: listing.region,
    mandate: listing.mandate,
    keywords: listing.keywords,
    publicUrl: listing.publicUrl,
    photos: listing.photos,
    heroPhoto: listing.heroPhoto,
    dateLoaded: listing.dateLoaded,
    dateModified: listing.dateModified,
    sourceAccountId: listing.sourceAccountId ?? null,
    sourceAccountLabel: listing.sourceAccountLabel ?? null,
    isPublished: !isSold,
  }
}

async function main() {
  if (!hasDatabaseUrl()) {
    console.log("DATABASE_URL is not set; skipping database seed.")
    return
  }

  const db = getDb()
  const [donationCount] = await db.select({ value: count() }).from(donations)
  const [listingCount] = await db.select({ value: count() }).from(listings)

  if (donationCount.value === 0) {
    await db.insert(donations).values([
      ...staticDonations.map((donation) => ({
        id: donation.id,
        donatedOn: donation.date,
        displayDate: donation.displayDate,
        charityName: donation.charity,
        propertyLabel: donation.property,
        amountRand: donation.amount,
        isAdjustment: false,
        notes: null,
      })),
      {
        id: legacyChocDonation.id,
        donatedOn: legacyChocDonation.donatedOn,
        displayDate: legacyChocDonation.displayDate,
        charityName: legacyChocDonation.charityName,
        propertyLabel: legacyChocDonation.propertyLabel,
        amountRand: legacyChocDonation.amountRand,
        isAdjustment: true,
        notes: legacyChocDonation.notes,
      },
    ])
    console.log("Seeded donations.")
  } else {
    console.log("Donations table already has data; skipping donation seed.")
  }

  if (listingCount.value === 0) {
    const rows = (listingsData as ListingsData).listings.map(normalizeListing)
    for (let index = 0; index < rows.length; index += 100) {
      await db.insert(listings).values(rows.slice(index, index + 100))
    }
    console.log("Seeded listings.")
  } else {
    console.log("Listings table already has data; skipping listing seed.")
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
