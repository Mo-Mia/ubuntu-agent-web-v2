# Backlog

## Listings (deferred — external inventory on PropCon)

Property listings are hosted on Gary's PropCon agent profile. On-site listing display and admin are gated behind `LISTINGS_MODE=internal` and `ENABLE_LISTING_ADMIN=true`. The items below apply only if internal listings are re-enabled.

- ~~Add a PropCon import/sync workflow~~ — **Cancelled.** PropCon website changes broke the external sync app; inventory now lives on PropCon directly.
- Add full listing creation workflow, including validation for every listing field and clearer required/optional field grouping.
- Add listing photo upload, reorder, delete, and hero-image preview. Use object storage rather than committing images to the repo.
- Add richer listing grid controls: search, status filters, source-account filters, pagination, and unsaved-change protection.
- Add admin audit log viewing in the UI, not only database writes.
- Add draft/publish workflow if Gary needs changes reviewed before they go live.

## Donations

- Add charity suggestions/autocomplete from the supported charities list.
- Add proof-of-payment upload or reference field if FNB receipts should be tracked in admin.
- Add CSV export for donation records and charity totals.

## Images And Content Assets

- Add a general site image library for hero images, charity logos, social images, and page illustrations.
- Replace remaining placeholder or generic images with approved Gary/Johannesburg/property imagery.
- Document image dimensions, formats, compression expectations, and alt-text rules for each site image category.

## Operations

- Promote the staging admin flow to production after Gary tests it.
- Decide whether staging DB edits should ever be copied to production, or whether production should always seed fresh and then be edited directly.
- Add scheduled database backups/export documentation for Neon.
- Revisit the `drizzle-kit` transitive `@esbuild-kit/*` deprecation warning after a newer `drizzle-kit` release is available.
