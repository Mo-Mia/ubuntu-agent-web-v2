import type { Metadata } from 'next';
import { format } from 'date-fns';

import { ListingFilters } from '@/components/listings/listing-filters';
import SectionHeading from '@/components/section-heading';
import { getLastUpdated, getListings } from '@/lib/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Properties | The Ubuntu Agent',
  description:
    'Browse current property listings from The Ubuntu Agent in Fourways, North Riding, Craigavon and surrounding areas.',
  alternates: {
    canonical: '/listings',
  },
};

export default async function ListingsPage() {
  const listings = await getListings({ publicOnly: true });
  const regions = [...new Set(listings.map((listing) => listing.region))].sort((a, b) =>
    a.localeCompare(b)
  );
  const lastUpdated = format(new Date(await getLastUpdated()), 'd MMMM yyyy');

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0C0F24_0%,#18204A_55%,#E27D60_180%)] pt-32 text-white">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,#D4AF37_0%,transparent_55%)] opacity-30" />
        <div className="container-custom relative pb-20">
          <div className="max-w-3xl">
            <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.28em] text-[#D4AF37]">
              Property collection
            </span>
            <h1 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
              Current homes represented by The Ubuntu Agent
            </h1>
            <p className="mb-0 max-w-2xl text-lg text-white/80">
              Browse residential listings across Fourways, North Riding, Craigavon, Broadacres,
              Olivedale, and nearby neighbourhoods.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F5EF]">
        <div className="container-custom">
          <SectionHeading
            subtitle="Available now"
            title="Find your next property"
            description="Filter by status and region, then sort by price or recency."
          />

          <ListingFilters listings={listings} regions={regions} />

          <p className="mt-8 mb-0 text-sm text-slate-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>
    </>
  );
}
