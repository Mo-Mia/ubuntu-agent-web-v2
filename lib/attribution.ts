/**
 * First-touch attribution helpers.
 *
 * Every marketing asset published by Project Mohem links to the site with UTM
 * parameters and a reference code (`ref` or `r`). The first time a visitor
 * arrives with any of these, we store them in a first-party cookie so that a
 * later enquiry (form, WhatsApp, call) can still be traced back to the
 * campaign that brought them here. See the Marketing Phase strategy, section 6.
 */

export const ATTRIBUTION_COOKIE = "ua_attr"
export const ATTRIBUTION_COOKIE_DAYS = 90

/** UTM sources owned by Project Mohem. Anything else is treated as unknown. */
export const OWNED_UTM_SOURCES = [
  "ua_ig",
  "ua_fb",
  "ua_li",
  "ua_tt",
  "ua_yt",
  "ua_gbp",
  "ua_wa",
  "ua_email",
] as const

export type Attribution = {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  utmTerm?: string
  ref?: string
  landingPath?: string
  referrer?: string
  firstTouchAt?: string
}

const PARAM_MAP: Record<string, keyof Attribution> = {
  utm_source: "utmSource",
  utm_medium: "utmMedium",
  utm_campaign: "utmCampaign",
  utm_content: "utmContent",
  utm_term: "utmTerm",
  ref: "ref",
  r: "ref",
}

/** Read attribution values from a URL search string. Returns an empty object if none present. */
export function attributionFromSearch(search: string): Attribution {
  const params = new URLSearchParams(search)
  const out: Attribution = {}
  for (const [key, field] of Object.entries(PARAM_MAP)) {
    const value = params.get(key)
    if (value && !out[field]) out[field] = value.slice(0, 120)
  }
  return out
}

export function hasAttribution(a: Attribution): boolean {
  return Boolean(a.utmSource || a.utmMedium || a.utmCampaign || a.utmContent || a.utmTerm || a.ref)
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const match = document.cookie.split("; ").find((row) => row.startsWith(`${name}=`))
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null
}

/** Stored first-touch attribution, or null when the visitor arrived with none. */
export function getStoredAttribution(): Attribution | null {
  try {
    const raw = readCookie(ATTRIBUTION_COOKIE)
    return raw ? (JSON.parse(raw) as Attribution) : null
  } catch {
    return null
  }
}

/** Persist first-touch attribution. Never overwrites an existing first touch. */
export function storeAttribution(a: Attribution): void {
  if (typeof document === "undefined") return
  if (getStoredAttribution()) return
  const value = encodeURIComponent(JSON.stringify(a))
  const maxAge = ATTRIBUTION_COOKIE_DAYS * 24 * 60 * 60
  const secure = typeof location !== "undefined" && location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `${ATTRIBUTION_COOKIE}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`
}

/**
 * Attribution to attach to an enquiry right now: current URL parameters first,
 * then the stored first touch for anything missing.
 */
export function resolveAttribution(): Attribution {
  if (typeof window === "undefined") return {}
  const current = attributionFromSearch(window.location.search)
  const stored = getStoredAttribution() ?? {}
  return { ...stored, ...current }
}

export function isOwnedSource(a: Attribution): boolean {
  if (a.ref && a.ref.toUpperCase().startsWith("UG-")) return true
  return Boolean(a.utmSource && (OWNED_UTM_SOURCES as readonly string[]).includes(a.utmSource))
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "27615403265"

/** wa.me link with the reference code prefilled so it lands in Gary's chat. */
export function whatsappLink(ref?: string, intent: "selling" | "general" = "general"): string {
  const opening = intent === "selling" ? "Hi Gary, I'd like to chat about selling." : "Hi Gary, I found you online."
  const text = ref ? `${opening} Ref ${ref}` : opening
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
