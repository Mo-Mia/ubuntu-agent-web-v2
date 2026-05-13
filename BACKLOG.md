# Backlog

## Admin Content Manager

- Add full listing creation workflow, including validation for every listing field and clearer required/optional field grouping.
- Add listing photo upload, reorder, delete, and hero-image preview. Use object storage rather than committing images to the repo.
- Add a PropCon import workflow where Gary or an admin can upload/paste an export, review detected changes, then publish them.
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
