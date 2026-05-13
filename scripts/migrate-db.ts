import fs from "node:fs/promises"
import path from "node:path"

import { neon } from "@neondatabase/serverless"

async function main() {
  if (!process.env.DATABASE_URL) {
    console.log("DATABASE_URL is not set; skipping database migration.")
    return
  }

  const sql = neon(process.env.DATABASE_URL)
  const migrationsDir = path.join(process.cwd(), "drizzle")
  const entries = (await fs.readdir(migrationsDir))
    .filter((entry) => entry.endsWith(".sql"))
    .sort()

  await sql.query(`
    CREATE TABLE IF NOT EXISTS "__admin_migrations" (
      "id" text PRIMARY KEY NOT NULL,
      "applied_at" timestamp with time zone DEFAULT now() NOT NULL
    );
  `)

  for (const entry of entries) {
    const existing = await sql.query('SELECT "id" FROM "__admin_migrations" WHERE "id" = $1', [entry])
    if (existing.length > 0) {
      console.log(`Migration already applied: ${entry}`)
      continue
    }

    const migrationSql = await fs.readFile(path.join(migrationsDir, entry), "utf8")
    const statements = migrationSql
      .split(/;\s*(?:\r?\n|$)/)
      .map((statement) => statement.trim())
      .filter(Boolean)

    for (const statement of statements) {
      await sql.query(statement)
    }
    await sql.query('INSERT INTO "__admin_migrations" ("id") VALUES ($1)', [entry])
    console.log(`Applied migration: ${entry}`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
