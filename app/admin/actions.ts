"use server"

import { randomUUID } from "node:crypto"

import { and, eq, sql } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { donations, listings } from "@/db/schema"
import { assertAdmin, clearAdminSession, createAdminSession, verifyPassword } from "@/lib/admin-auth"
import { getDb } from "@/lib/db"
import { logAdminChange } from "@/lib/content"

function stringValue(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

function nullableStringValue(formData: FormData, key: string) {
  const value = stringValue(formData, key)
  return value ? value : null
}

function numberValue(formData: FormData, key: string) {
  const value = Number(stringValue(formData, key))
  return Number.isFinite(value) ? value : 0
}

function displayDateFromIso(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00`)
  return new Intl.DateTimeFormat("en-ZA", { month: "long", year: "numeric" }).format(date)
}

function revalidatePublicContent() {
  revalidatePath("/")
  revalidatePath("/ubuntu-giving")
  revalidatePath("/listings")
  revalidatePath("/sitemap.xml")
}

export async function loginAction(formData: FormData) {
  const password = stringValue(formData, "password")
  if (!verifyPassword(password)) {
    redirect("/admin/login?error=1")
  }

  await createAdminSession()
  redirect("/admin")
}

export async function logoutAction() {
  await clearAdminSession()
  redirect("/admin/login")
}

export async function createDonationAction(formData: FormData) {
  await assertAdmin()
  const db = getDb()
  const donatedOn = stringValue(formData, "donatedOn")
  const row = {
    id: randomUUID(),
    donatedOn,
    displayDate: displayDateFromIso(donatedOn),
    charityName: stringValue(formData, "charityName"),
    propertyLabel: stringValue(formData, "propertyLabel"),
    amountRand: numberValue(formData, "amountRand"),
    isAdjustment: formData.get("isAdjustment") === "on",
    notes: nullableStringValue(formData, "notes"),
  }

  await db.insert(donations).values(row)
  await logAdminChange({ entityType: "donation", entityId: row.id, action: "create", before: null, after: row })
  revalidatePublicContent()
  redirect("/admin/donations")
}

export async function updateDonationAction(formData: FormData) {
  await assertAdmin()
  const db = getDb()
  const id = stringValue(formData, "id")
  const donatedOn = stringValue(formData, "donatedOn")
  const [before] = await db.select().from(donations).where(eq(donations.id, id)).limit(1)
  const update = {
    donatedOn,
    displayDate: displayDateFromIso(donatedOn),
    charityName: stringValue(formData, "charityName"),
    propertyLabel: stringValue(formData, "propertyLabel"),
    amountRand: numberValue(formData, "amountRand"),
    isAdjustment: formData.get("isAdjustment") === "on",
    notes: nullableStringValue(formData, "notes"),
    updatedAt: sql<string>`now()`,
  }

  const [after] = await db.update(donations).set(update).where(eq(donations.id, id)).returning()
  await logAdminChange({ entityType: "donation", entityId: id, action: "update", before, after })
  revalidatePublicContent()
  redirect("/admin/donations")
}

export async function archiveDonationAction(formData: FormData) {
  await assertAdmin()
  const db = getDb()
  const id = stringValue(formData, "id")
  const [before] = await db.select().from(donations).where(eq(donations.id, id)).limit(1)
  const [after] = await db
    .update(donations)
    .set({ archivedAt: sql<string>`now()`, updatedAt: sql<string>`now()` })
    .where(eq(donations.id, id))
    .returning()

  await logAdminChange({ entityType: "donation", entityId: id, action: "archive", before, after })
  revalidatePublicContent()
  redirect("/admin/donations")
}

export async function restoreDonationAction(formData: FormData) {
  await assertAdmin()
  const db = getDb()
  const id = stringValue(formData, "id")
  const [before] = await db.select().from(donations).where(eq(donations.id, id)).limit(1)
  const [after] = await db
    .update(donations)
    .set({ archivedAt: null, updatedAt: sql<string>`now()` })
    .where(eq(donations.id, id))
    .returning()

  await logAdminChange({ entityType: "donation", entityId: id, action: "restore", before, after })
  revalidatePublicContent()
  redirect("/admin/donations")
}

export async function updateListingAction(formData: FormData) {
  await assertAdmin()
  const db = getDb()
  const uniqueId = stringValue(formData, "uniqueId")
  const [before] = await db.select().from(listings).where(eq(listings.uniqueId, uniqueId)).limit(1)
  const update = {
    displayAddress: nullableStringValue(formData, "displayAddress"),
    status: stringValue(formData, "status"),
    price: numberValue(formData, "price"),
    publicUrl: nullableStringValue(formData, "publicUrl"),
    heroPhoto: nullableStringValue(formData, "heroPhoto"),
    isPublished: formData.get("isPublished") === "on",
    dateModified: new Date().toISOString().slice(0, 10),
    updatedAt: sql<string>`now()`,
  }

  const [after] = await db
    .update(listings)
    .set(update)
    .where(eq(listings.uniqueId, uniqueId))
    .returning()

  await logAdminChange({ entityType: "listing", entityId: uniqueId, action: "update", before, after })
  revalidatePublicContent()
  revalidatePath(`/listings/${uniqueId}`)
  redirect("/admin/listings")
}

export async function updateListingHeroAction(formData: FormData) {
  await assertAdmin()
  const db = getDb()
  const uniqueId = stringValue(formData, "uniqueId")
  const heroPhoto = nullableStringValue(formData, "heroPhoto")
  const [before] = await db.select().from(listings).where(eq(listings.uniqueId, uniqueId)).limit(1)
  const [after] = await db
    .update(listings)
    .set({
      heroPhoto,
      dateModified: new Date().toISOString().slice(0, 10),
      updatedAt: sql<string>`now()`,
    })
    .where(eq(listings.uniqueId, uniqueId))
    .returning()

  await logAdminChange({ entityType: "listing", entityId: uniqueId, action: "update_hero", before, after })
  revalidatePublicContent()
  revalidatePath(`/listings/${uniqueId}`)
  redirect("/admin/listings")
}

export async function archiveListingAction(formData: FormData) {
  await assertAdmin()
  const db = getDb()
  const uniqueId = stringValue(formData, "uniqueId")
  const [before] = await db.select().from(listings).where(eq(listings.uniqueId, uniqueId)).limit(1)
  const [after] = await db
    .update(listings)
    .set({ archivedAt: sql<string>`now()`, isPublished: false, updatedAt: sql<string>`now()` })
    .where(eq(listings.uniqueId, uniqueId))
    .returning()

  await logAdminChange({ entityType: "listing", entityId: uniqueId, action: "archive", before, after })
  revalidatePublicContent()
  revalidatePath(`/listings/${uniqueId}`)
  redirect("/admin/listings")
}

export async function restoreListingAction(formData: FormData) {
  await assertAdmin()
  const db = getDb()
  const uniqueId = stringValue(formData, "uniqueId")
  const [before] = await db.select().from(listings).where(and(eq(listings.uniqueId, uniqueId))).limit(1)
  const [after] = await db
    .update(listings)
    .set({ archivedAt: null, updatedAt: sql<string>`now()` })
    .where(eq(listings.uniqueId, uniqueId))
    .returning()

  await logAdminChange({ entityType: "listing", entityId: uniqueId, action: "restore", before, after })
  revalidatePublicContent()
  revalidatePath(`/listings/${uniqueId}`)
  redirect("/admin/listings")
}
