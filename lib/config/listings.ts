export const PROPCON_AGENT_URL =
  process.env.PROPCON_AGENT_URL ??
  "https://agent.propcon.co.za/estate-agent/gary-berkowitz-1";

export type ListingsMode = "external" | "internal";

export const LISTINGS_MODE: ListingsMode =
  process.env.LISTINGS_MODE === "internal" ? "internal" : "external";

export const isInternalListingsEnabled = () => LISTINGS_MODE === "internal";

export const isListingAdminEnabled = () =>
  process.env.ENABLE_LISTING_ADMIN === "true" && isInternalListingsEnabled();
