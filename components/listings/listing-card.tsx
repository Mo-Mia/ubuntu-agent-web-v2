'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Home, Landmark, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { formatPrice, getListingDisplayAddress, getListingPhotoUrl } from '@/lib/listings';
import type { Listing } from '@/types/listing';
import { ListingStats } from './listing-stats';

type ListingCardProps = {
  listing: Listing;
};

function getStatusClasses(status: Listing['status']) {
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

function PlaceholderIcon({ type }: { type: string }) {
  if (type.toLowerCase().includes('apartment')) {
    return <Building2 className="h-10 w-10 text-[#B3941F]" aria-hidden="true" />;
  }

  if (type.toLowerCase().includes('townhouse')) {
    return <Landmark className="h-10 w-10 text-[#B3941F]" aria-hidden="true" />;
  }

  return <Home className="h-10 w-10 text-[#B3941F]" aria-hidden="true" />;
}

export function ListingCard({ listing }: ListingCardProps) {
  const [showImageFallback, setShowImageFallback] = useState(!listing.heroPhoto);
  const displayAddress = getListingDisplayAddress(listing);

  return (
    <Link href={`/listings/${listing.uniqueId}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#0C0F24]">
          {!showImageFallback && listing.heroPhoto ? (
            <Image
              src={getListingPhotoUrl(listing.uniqueId, listing.heroPhoto)}
              alt={`${listing.type} in ${displayAddress}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="empty"
              onError={() => setShowImageFallback(true)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(135deg,#0C0F24_0%,#1A214A_55%,#D4AF37_180%)] px-6 text-center text-white">
              <PlaceholderIcon type={listing.type} />
              <p className="mt-4 mb-0 text-sm font-medium uppercase tracking-[0.3em] text-white/70">
                {listing.type}
              </p>
              <p className="mt-2 mb-0 text-balance text-lg font-semibold">
                Photo coming soon
              </p>
            </div>
          )}

          <Badge className={`absolute left-4 top-4 border-none px-3 py-1 text-[11px] uppercase tracking-[0.18em] ${getStatusClasses(listing.status)}`}>
            {listing.status}
          </Badge>

          {listing.mandate.toLowerCase() === 'sole' ? (
            <Badge
              variant="outline"
              className="absolute bottom-4 left-4 border-white/60 bg-white/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[#0C0F24]"
            >
              Sole mandate
            </Badge>
          ) : null}
        </div>

        <CardContent className="flex flex-1 flex-col p-5">
          <p className="mb-2 text-2xl font-semibold text-[#0C0F24]">
            {formatPrice(listing.price)}
          </p>
          <h2 className="mb-2 line-clamp-1 text-xl font-semibold text-slate-900">
            {listing.type} in {displayAddress}
          </h2>
          <p className="mb-4 flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4 text-[#E27D60]" aria-hidden="true" />
            <span>{displayAddress}</span>
          </p>
          <div className="mt-auto">
            <ListingStats
              bathrooms={listing.bathrooms}
              bedrooms={listing.bedrooms}
              floorSize={listing.floorSize}
              garages={listing.garages}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
