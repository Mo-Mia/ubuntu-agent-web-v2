import listingsData from '@/data/listings.json';
import type { Listing, ListingsData } from '@/types/listing';

export function getAllListings(): Listing[] {
  return (listingsData as ListingsData).listings;
}

export function getListingById(uniqueId: string): Listing | undefined {
  return getAllListings().find((listing) => listing.uniqueId === uniqueId);
}

export function getActiveListings(): Listing[] {
  const inactiveStatuses = new Set<string>(['Sold']);
  return getAllListings().filter((listing) => !inactiveStatuses.has(listing.status));
}

export function getFeaturedListings(limit = 3): Listing[] {
  return getActiveListings()
    .filter((listing) => listing.status === 'For Sale')
    .sort((a, b) => new Date(b.dateModified).getTime() - new Date(a.dateModified).getTime())
    .slice(0, limit);
}

export function getLastUpdated(): string {
  return (listingsData as ListingsData).lastUpdated;
}

export function formatPrice(price: number): string {
  return `R${price.toLocaleString('en-ZA')}`;
}

export function getListingPhotoUrl(uniqueId: string, filename: string): string {
  return `/listings/${uniqueId}/${filename}`;
}

export function getListingDisplayAddress(listing: Listing): string {
  const displayAddress = listing.displayAddress?.trim();
  if (displayAddress) {
    return displayAddress;
  }

  return listing.region;
}

export function getListingPublicUrl(listing: Listing): string | null {
  const publicUrl = listing.publicUrl?.trim();
  return publicUrl ? publicUrl : null;
}
