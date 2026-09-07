"use client"

import posthog from "posthog-js"

/**
 * Thin wrapper around PostHog so components never import the SDK directly.
 * Safe to call before PostHog has initialised or when no key is configured.
 */

export type AnalyticsEvent =
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "contact_form_submitted"
  | "consultation_form_submitted"
  | "lead_submitted"
  | "calculator_used"
  | "listing_viewed"
  | "cta_click"

export function isAnalyticsEnabled(): boolean {
  return typeof window !== "undefined" && Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY) && posthog.__loaded
}

export function track(event: AnalyticsEvent, properties?: Record<string, unknown>): void {
  if (!isAnalyticsEnabled()) return
  try {
    posthog.capture(event, properties)
  } catch {
    // analytics must never break the page
  }
}

export function getDistinctId(): string | undefined {
  if (!isAnalyticsEnabled()) return undefined
  try {
    return posthog.get_distinct_id()
  } catch {
    return undefined
  }
}
