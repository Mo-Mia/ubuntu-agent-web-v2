import { and, desc, eq, isNull, sql } from "drizzle-orm"

import { donations as donationRows, listings as listingRows, adminAuditLog } from "@/db/schema"
import { donations as staticDonations } from "@/lib/data/donations"
import { getDb, hasDatabaseUrl } from "@/lib/db"
import listingsData from "@/data/listings.json"
import type { Listing, ListingsData } from "@/types/listing"

export type DonationRecord = {
  id: string
  donatedOn: string
  displayDate: string
  charityName: string
  propertyLabel: string
  amountRand: number
  isAdjustment: boolean
  notes: string | null
  archivedAt: string | null
  createdAt?: string
  updatedAt?: string
}

export type DonationSummary = {
  donations: DonationRecord[]
  totalDonated: number
  totalTransactions: number
  totalCharities: number
}

export const legacyChocDonation: DonationRecord = {
  id: "legacy-choc-jan-2026",
  donatedOn: "2026-01-01",
  displayDate: "January 2026",
  charityName: "CHOC",
  propertyLabel: "Legacy adjustment",
  amountRand: 3800,
  isAdjustment: true,
  notes: "Migrated from the previous hidden CHOC total adjustment.",
  archivedAt: null,
}

function mapDbDonation(row: typeof donationRows.$inferSelect): DonationRecord {
  return {
    id: row.id,
    donatedOn: row.donatedOn,
    displayDate: row.displayDate,
    charityName: row.charityName,
    propertyLabel: row.propertyLabel,
    amountRand: row.amountRand,
    isAdjustment: row.isAdjustment,
    notes: row.notes,
    archivedAt: row.archivedAt,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  }
}

function staticDonationRecords(includeArchived = false): DonationRecord[] {
  const rows = [
    ...staticDonations.map((donation) => ({
      id: donation.id,
      donatedOn: donation.date,
      displayDate: donation.displayDate,
      charityName: donation.charity,
      propertyLabel: donation.property,
      amountRand: donation.amount,
      isAdjustment: false,
      notes: null,
      archivedAt: null,
    })),
    legacyChocDonation,
  ]

  return includeArchived ? rows : rows.filter((row) => !row.archivedAt)
}

export function summarizeDonations(donations: DonationRecord[]): DonationSummary {
  const activeDonations = donations.filter((donation) => !donation.archivedAt)

  return {
    donations: activeDonations,
    totalDonated: activeDonations.reduce((total, donation) => total + donation.amountRand, 0),
    totalTransactions: activeDonations.length,
    totalCharities: new Set(activeDonations.map((donation) => donation.charityName)).size,
  }
}

export async function getDonationSummary(): Promise<DonationSummary> {
  const donations = await getDonations(false)
  return summarizeDonations(donations)
}

export async function getDonations(includeArchived = false): Promise<DonationRecord[]> {
  if (!hasDatabaseUrl()) {
    return staticDonationRecords(includeArchived)
  }

  const db = getDb()
  const rows = await db
    .select()
    .from(donationRows)
    .where(includeArchived ? undefined : isNull(donationRows.archivedAt))
    .orderBy(desc(donationRows.donatedOn), desc(donationRows.createdAt))

  return rows.map(mapDbDonation)
}

function mapDbListing(row: typeof listingRows.$inferSelect): Listing {
  return {
    uniqueId: row.uniqueId,
    address: row.fullAddress ?? row.displayAddress ?? row.region,
    displayAddress: row.displayAddress ?? undefined,
    fullAddress: row.fullAddress ?? undefined,
    status: row.status as Listing["status"],
    price: row.price,
    type: row.type,
    category: row.category,
    bedrooms: row.bedrooms,
    bathrooms: row.bathrooms,
    garages: row.garages,
    parking: row.parking,
    floorSize: row.floorSize,
    erfSize: row.erfSize,
    rates: row.rates,
    levy: row.levy,
    region: row.region,
    mandate: row.mandate,
    keywords: row.keywords,
    publicUrl: row.publicUrl,
    photos: row.photos,
    heroPhoto: row.heroPhoto,
    dateLoaded: row.dateLoaded,
    dateModified: row.dateModified,
    sourceAccountId: row.sourceAccountId ?? undefined,
    sourceAccountLabel: row.sourceAccountLabel ?? undefined,
    isPublished: row.isPublished,
    archivedAt: row.archivedAt,
  }
}

export function getStaticListings(includeArchived = false): Listing[] {
  const listings = (listingsData as ListingsData).listings.map((listing) => ({
    ...listing,
    address: listing.address ?? listing.fullAddress ?? listing.displayAddress ?? listing.region,
    isPublished: true,
    archivedAt: null,
  }))

  return includeArchived ? listings : listings.filter((listing) => listing.status !== "Sold")
}

export async function getListings(options: { includeArchived?: boolean; publicOnly?: boolean } = {}): Promise<Listing[]> {
  const { includeArchived = false, publicOnly = true } = options

  if (!hasDatabaseUrl()) {
    const staticRows = getStaticListings(includeArchived)
    return publicOnly ? staticRows.filter((listing) => listing.isPublished !== false) : staticRows
  }

  const db = getDb()
  const filters = []
  if (!includeArchived) filters.push(isNull(listingRows.archivedAt))
  if (publicOnly) filters.push(eq(listingRows.isPublished, true))

  const rows = await db
    .select()
    .from(listingRows)
    .where(filters.length ? and(...filters) : undefined)
    .orderBy(desc(listingRows.dateModified))

  return rows.map(mapDbListing)
}

export async function getListing(uniqueId: string, options: { publicOnly?: boolean } = {}): Promise<Listing | undefined> {
  const publicOnly = options.publicOnly ?? true

  if (!hasDatabaseUrl()) {
    return getStaticListings(!publicOnly).find((listing) => {
      if (listing.uniqueId !== uniqueId) return false
      if (publicOnly && listing.isPublished === false) return false
      return true
    })
  }

  const db = getDb()
  const filters = [eq(listingRows.uniqueId, uniqueId), isNull(listingRows.archivedAt)]
  if (publicOnly) filters.push(eq(listingRows.isPublished, true))

  const [row] = await db.select().from(listingRows).where(and(...filters)).limit(1)
  return row ? mapDbListing(row) : undefined
}

export async function getLastUpdated(): Promise<string> {
  if (!hasDatabaseUrl()) {
    return (listingsData as ListingsData).lastUpdated
  }

  const db = getDb()
  const [row] = await db.select({ updatedAt: sql<string>`max(${listingRows.updatedAt})` }).from(listingRows)
  return row?.updatedAt ?? new Date().toISOString()
}

export async function logAdminChange(input: {
  entityType: string
  entityId: string
  action: string
  before: unknown
  after: unknown
}) {
  const db = getDb()
  await db.insert(adminAuditLog).values(input)
}
