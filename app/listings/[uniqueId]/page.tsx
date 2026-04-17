import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Bath, BedDouble, CarFront, ExternalLink, MapPin, MoveLeft, Ruler, Warehouse } from 'lucide-react';

import { ListingGallery } from '@/components/listings/listing-gallery';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  formatPrice,
  getAllListings,
  getListingById,
  getListingDisplayAddress,
  getListingPublicUrl,
} from '@/lib/listings';

type ListingPageProps = {
  params: Promise<{ uniqueId: string }>;
};

function getStatusClasses(status: string) {
  switch (status) {
    case 'For Sale':
      return 'bg-[#5CDB95] text-[#0C0F24]';
    case 'Under Offer':
      return 'bg-amber-400 text-[#0C0F24]';
    case 'To Rent':
      return 'bg-sky-500 text-white';
    case 'On Auction':
      return 'bg-[#E27D60] text-white';
    default:
      return 'bg-slate-200 text-slate-800';
  }
}

function getMetaDescription(uniqueId: string) {
  const listing = getListingById(uniqueId);
  if (!listing) {
    return 'Browse property listings from The Ubuntu Agent.';
  }

  return `${formatPrice(listing.price)} ${listing.type.toLowerCase()} with ${listing.bedrooms} bedrooms in ${listing.region}.`;
}

export async function generateStaticParams() {
  return getAllListings().map((listing) => ({
    uniqueId: listing.uniqueId,
  }));
}

export async function generateMetadata({ params }: ListingPageProps): Promise<Metadata> {
  const { uniqueId } = await params;
  const listing = getListingById(uniqueId);

  if (!listing) {
    return {
      title: 'Property Not Found | The Ubuntu Agent',
      description: 'This property listing could not be found.',
    };
  }

  return {
    title: `${listing.type} in ${getListingDisplayAddress(listing)} | The Ubuntu Agent`,
    description: getMetaDescription(uniqueId),
    alternates: {
      canonical: `/listings/${listing.uniqueId}`,
    },
  };
}

export default async function ListingDetailPage({ params }: ListingPageProps) {
  const { uniqueId } = await params;
  const listing = getListingById(uniqueId);

  if (!listing) {
    notFound();
  }

  const displayAddress = getListingDisplayAddress(listing);
  const enquiryAddress = encodeURIComponent(`${listing.type} in ${displayAddress}`);
  const publicUrl = getListingPublicUrl(listing);

  console.log('Listing brochure URL:', listing.uniqueId, listing.publicUrl);

  return (
    <section className="bg-[#F7F5EF] pb-20 pt-32">
      <div className="container-custom">
        <Link
          href="/listings"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#0C0F24]"
        >
          <MoveLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to all properties</span>
        </Link>

        <ListingGallery
          displayAddress={displayAddress}
          photos={listing.photos}
          type={listing.type}
          uniqueId={listing.uniqueId}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.9fr)]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-4xl font-semibold text-[#0C0F24] md:text-5xl">
                  {formatPrice(listing.price)}
                </p>
                <h1 className="mb-2 text-3xl font-semibold text-slate-900 md:text-4xl">
                  {listing.type} in {displayAddress}
                </h1>
                <p className="mb-0 flex items-center gap-2 text-slate-600">
                  <MapPin className="h-4 w-4 text-[#E27D60]" aria-hidden="true" />
                  <span>{displayAddress}</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Badge className={`border-none px-3 py-1 text-[11px] uppercase tracking-[0.18em] ${getStatusClasses(listing.status)}`}>
                  {listing.status}
                </Badge>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <BedDouble className="h-4 w-4 text-[#B3941F]" aria-hidden="true" />
                  Bedrooms
                </div>
                <p className="mb-0 text-lg font-semibold text-slate-900">{listing.bedrooms}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <Bath className="h-4 w-4 text-[#B3941F]" aria-hidden="true" />
                  Bathrooms
                </div>
                <p className="mb-0 text-lg font-semibold text-slate-900">{listing.bathrooms}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <CarFront className="h-4 w-4 text-[#B3941F]" aria-hidden="true" />
                  Garages
                </div>
                <p className="mb-0 text-lg font-semibold text-slate-900">{listing.garages}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <Warehouse className="h-4 w-4 text-[#B3941F]" aria-hidden="true" />
                  Parking
                </div>
                <p className="mb-0 text-lg font-semibold text-slate-900">{listing.parking}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <Ruler className="h-4 w-4 text-[#B3941F]" aria-hidden="true" />
                  Floor size
                </div>
                <p className="mb-0 text-lg font-semibold text-slate-900">{listing.floorSize} m²</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <Ruler className="h-4 w-4 text-[#B3941F]" aria-hidden="true" />
                  Erf size
                </div>
                <p className="mb-0 text-lg font-semibold text-slate-900">
                  {listing.erfSize > 0 ? `${listing.erfSize} m²` : 'Not specified'}
                </p>
              </div>
            </div>

            {(listing.rates > 0 || listing.levy > 0) ? (
              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-[#F7F5EF] p-5">
                <h2 className="mb-4 text-xl font-semibold text-[#0C0F24]">Monthly costs</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {listing.rates > 0 ? (
                    <div className="rounded-2xl bg-white p-4">
                      <p className="mb-1 text-sm font-medium text-slate-500">Rates</p>
                      <p className="mb-0 text-lg font-semibold text-slate-900">{formatPrice(listing.rates)}</p>
                    </div>
                  ) : null}
                  {listing.levy > 0 ? (
                    <div className="rounded-2xl bg-white p-4">
                      <p className="mb-1 text-sm font-medium text-slate-500">Levy</p>
                      <p className="mb-0 text-lg font-semibold text-slate-900">{formatPrice(listing.levy)}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}

            {listing.keywords.length > 0 ? (
              <div className="mt-8">
                <h2 className="mb-4 text-xl font-semibold text-[#0C0F24]">Features</h2>
                <div className="flex flex-wrap gap-2">
                  {listing.keywords.map((keyword) => (
                    <Badge
                      key={keyword}
                      variant="outline"
                      className="border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-[#0C0F24] p-6 text-white shadow-sm md:p-8">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.28em] text-[#D4AF37]">
              Next step
            </p>
            <h2 className="mb-4 text-3xl font-semibold">Arrange your enquiry</h2>
            <p className="mb-8 text-white/75">
              Ask for more details, confirm availability, or request a viewing for this property.
            </p>

            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-[#D4AF37] text-[#0C0F24] hover:bg-[#B3941F]"
              >
                <Link href={`/contact?property=${enquiryAddress}`}>
                  Enquire About This Property
                </Link>
              </Button>

              {publicUrl ? (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={publicUrl} target="_blank" rel="noreferrer noopener">
                    View Full Brochure
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
