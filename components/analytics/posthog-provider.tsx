"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"

import { attributionFromSearch, getStoredAttribution, hasAttribution, storeAttribution } from "@/lib/attribution"

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const UI_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.posthog.com"

/**
 * Initialises PostHog once on the client. Requests go through the same-origin
 * `/ingest` reverse proxy (see next.config.mjs) so ad blockers and the CSP do
 * not interfere. Pageviews are captured manually because the App Router does
 * not fire full page loads on navigation.
 */
function initPostHog() {
  if (!KEY || typeof window === "undefined" || posthog.__loaded) return
  posthog.init(KEY, {
    api_host: "/ingest",
    ui_host: UI_HOST,
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: false,
    persistence: "localStorage+cookie",
    person_profiles: "identified_only",
  })
}

function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname || !posthog.__loaded) return

    // First-touch attribution: remember the campaign that brought this visitor.
    const incoming = attributionFromSearch(searchParams.toString())
    if (hasAttribution(incoming)) {
      storeAttribution({
        ...incoming,
        landingPath: pathname,
        referrer: document.referrer || undefined,
        firstTouchAt: new Date().toISOString(),
      })
    }
    const stored = getStoredAttribution()
    if (stored) {
      posthog.register_once({
        first_utm_source: stored.utmSource,
        first_utm_medium: stored.utmMedium,
        first_utm_campaign: stored.utmCampaign,
        first_utm_content: stored.utmContent,
        first_ref: stored.ref,
        first_landing_path: stored.landingPath,
      })
    }

    const search = searchParams.toString()
    const url = window.origin + pathname + (search ? `?${search}` : "")
    posthog.capture("$pageview", { $current_url: url })
  }, [pathname, searchParams])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog()
  }, [])

  if (!KEY) return <>{children}</>

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {children}
    </PHProvider>
  )
}
