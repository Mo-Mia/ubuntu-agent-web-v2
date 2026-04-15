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

export function getLastUpdated(): string {
  return (listingsData as ListingsData).lastUpdated;
}

export function formatPrice(price: number): string {
  return `R${price.toLocaleString('en-ZA')}`;
}

export function getListingPhotoUrl(uniqueId: string, filename: string): string {
  return `/listings/${uniqueId}/${filename}`;
}
