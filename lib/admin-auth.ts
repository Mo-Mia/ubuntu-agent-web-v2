import "server-only"

import crypto from "node:crypto"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const cookieName = "ubuntu_admin_session"
const maxAgeSeconds = 60 * 60 * 12

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET or ADMIN_PASSWORD must be set for admin auth")
  }

  return secret
}

function sign(value: string) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex")
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left)
  const rightBuffer = Buffer.from(right)
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer)
}

export function verifyPassword(password: string) {
  const configuredPassword = process.env.ADMIN_PASSWORD
  if (!configuredPassword) return false
  return safeEqual(password, configuredPassword)
}

export async function createAdminSession() {
  const expiresAt = Date.now() + maxAgeSeconds * 1000
  const payload = Buffer.from(JSON.stringify({ expiresAt })).toString("base64url")
  const token = `${payload}.${sign(payload)}`
  const cookieStore = await cookies()

  cookieStore.set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: maxAgeSeconds,
  })
}

export async function clearAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete(cookieName)
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies()
  const token = cookieStore.get(cookieName)?.value
  if (!token) return false

  const [payload, signature] = token.split(".")
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return false

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as { expiresAt: number }
    return Number.isFinite(session.expiresAt) && session.expiresAt > Date.now()
  } catch {
    return false
  }
}

export async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login")
  }
}

export async function assertAdmin() {
  if (!(await isAdminAuthenticated())) {
    throw new Error("Unauthorized")
  }
}
