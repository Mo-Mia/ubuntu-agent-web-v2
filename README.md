# The Ubuntu Agent Website

**Important Note:** This project uses British/South African English spelling conventions (e.g., `optimise`, `colour`, `centre`). Please ensure all future contributions adhere to this standard.

This project is the official website for Gary Berkowitz, "The Ubuntu Agent", showcasing his real estate services and the Ubuntu Giving Programme.

## Implementation Status

The website has been updated according to the Revised Phase 1 Implementation Plan with a focus on accurately representing Gary's actual services, experience, and charitable activities.

### Completed Updates

1. **Homepage**
   - Updated hero section with proper CTA
   - Added accurate biography details (10 years of experience)
   - Focused services section on North Johannesburg areas (Fourways, Dainfern, North Riding, Midrand)
   - Updated Ubuntu Giving section to mention current charities (Four Paws, CHOC, Breadline)
   - Removed placeholder testimonials
   - Simplified blog/resources section to a "Coming Soon" message

2. **About Page**
   - Corrected biography details (10 years experience vs 15)
   - Updated professional credentials to reflect actual qualifications
   - Added "I am what I am because of who we all are" quote to Ubuntu philosophy section
   - Added specific areas of expertise (residential sales/rentals in North Johannesburg)

3. **Ubuntu Giving Page**
   - Updated to mention actual charities Gary supports (Four Paws, CHOC, Breadline)
   - Replaced detailed charity partner profiles with simplified versions
   - Added transparent donation tracking backed by the admin content database when configured

4. **Services Page**
   - Updated service descriptions to focus on actual offerings
   - Highlighted specific areas served in North Johannesburg
   - Revised buyer/seller services to reflect actual capabilities

5. **Listings Page**
   - Added live listing pages, listing detail pages, filters, and featured homepage listings
   - Listing metadata can be maintained through the admin content database when configured

6. **Resources Page**
   - Replaced placeholder blog posts with a "Coming Soon" message
   - Simplified to focus on planned resource categories

7. **Contact Page**
   - Updated with correct email address (gary.berkowitz@expsouthafrica.co.za)
   - Added correct office address (Wanderers Office Park, BDO Building)
   - Updated office hours (8:00 - 20:00, Monday - Sunday)
   - Added company registration details

### Technical Updates

1. **Image Requirements**
   - Created image requirements documentation (see `/public/images/README.md`)
   - Identified key images to be updated/replaced

2. **Contact Details**
   - Fixed email address and WhatsApp link
   - Ensured contact information is consistent throughout the site

3. **Admin Content Manager**
   - Added password-protected `/admin` area for donation and listing metadata maintenance
   - Added Neon Postgres + Drizzle-backed storage with static-file fallback for local builds without `DATABASE_URL`
   - Added migration and idempotent seed scripts that run before production builds

## Next Steps

See `BACKLOG.md` for deferred admin, listing, image, and operational improvements.

## Project Structure

- `/app` - Next.js app router structure with page components
- `/components` - Reusable UI components
- `/public` - Static assets including images
- `/styles` - Global styles and theme configuration

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Admin Content Manager

The admin area lives at `/admin/login`.

Required Vercel environment variables:

- `DATABASE_URL` - Neon Postgres pooled connection string. The Vercel Neon integration should create this when the custom prefix is `DATABASE`.
- `ADMIN_PASSWORD` - password Gary uses to sign in.
- `ADMIN_SESSION_SECRET` - long random value used to sign the admin session cookie.

Recommended Vercel setup:

- Enable Neon for Production and Preview.
- Enable database branch creation for Preview.
- Leave Neon Auth disabled for the current single-admin workflow.
- Add admin secrets to Preview first, redeploy staging, then add Production secrets when ready to promote.

Database scripts:

- `npm run db:migrate` applies SQL migrations from `drizzle/`.
- `npm run db:seed` seeds donations and listings only when the relevant tables are empty.
- `npm run db:deploy` runs migration and seed, and is called automatically before `next build`.

Local development without `DATABASE_URL` uses the existing static donation/listing fixtures as a fallback. Admin editing requires `DATABASE_URL`.

Known npm warning:

- `npm install` may warn that `@esbuild-kit/core-utils` and `@esbuild-kit/esm-loader` are deprecated. These are transitive dependencies of the current `drizzle-kit` release, not direct project dependencies. Recheck after future `drizzle-kit` releases.

## Contact

For questions or further information about this website, please contact the development team.

---

Last updated: May 13, 2026
