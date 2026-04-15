'use client';

import { useState } from 'react';

import { ListingCard } from '@/components/listings/listing-card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Listing } from '@/types/listing';

type ListingFiltersProps = {
  listings: Listing[];
  regions: string[];
};

type StatusFilter = 'All' | Listing['status'];
type SortOption = 'price-asc' | 'price-desc' | 'newest';

export function ListingFilters({ listings, regions }: ListingFiltersProps) {
  const [status, setStatus] = useState<StatusFilter>('All');
  const [region, setRegion] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const filteredListings = listings
    .filter((listing) => (status === 'All' ? true : listing.status === status))
    .filter((listing) => (region === 'All' ? true : listing.region === region))
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return new Date(b.dateModified).getTime() - new Date(a.dateModified).getTime();
    });

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
          <Select value={status} onValueChange={(value) => setStatus(value as StatusFilter)}>
            <SelectTrigger className="border-slate-200">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="For Sale">For Sale</SelectItem>
              <SelectItem value="Under Offer">Under Offer</SelectItem>
              <SelectItem value="To Rent">To Rent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Region</label>
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger className="border-slate-200">
              <SelectValue placeholder="All regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All regions</SelectItem>
              {regions.map((regionOption) => (
                <SelectItem key={regionOption} value={regionOption}>
                  {regionOption}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Sort by</label>
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
            <SelectTrigger className="border-slate-200">
              <SelectValue placeholder="Choose a sort order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: low to high</SelectItem>
              <SelectItem value="price-desc">Price: high to low</SelectItem>
              <SelectItem value="newest">Newest first</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <span>Showing {filteredListings.length} properties</span>
        {status !== 'All' ? <Badge variant="outline" className="border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#0C0F24]">{status}</Badge> : null}
        {region !== 'All' ? <Badge variant="outline" className="border-[#E27D60]/40 bg-[#E27D60]/10 text-[#0C0F24]">{region}</Badge> : null}
      </div>

      {filteredListings.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.uniqueId} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#0C0F24]">No properties currently listed</h2>
          <p className="mb-0 text-slate-600">
            Contact Gary for upcoming listings.
          </p>
        </div>
      )}
    </div>
  );
}
