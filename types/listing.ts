export interface Listing {
  uniqueId: string;
  address: string;
  displayAddress?: string;
  fullAddress?: string;
  status: 'For Sale' | 'Under Offer' | 'To Rent' | 'On Auction' | 'Sold';
  price: number;
  type: string;
  category: string;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  parking: number;
  floorSize: number;
  erfSize: number;
  rates: number;
  levy: number;
  region: string;
  mandate: string;
  keywords: string[];
  publicUrl: string | null;
  photos: string[];
  heroPhoto: string | null;
  dateLoaded: string;
  dateModified: string;
  sourceAccountId?: string;
  sourceAccountLabel?: string;
  isPublished?: boolean;
  archivedAt?: string | null;
}

export interface ListingsData {
  lastUpdated: string;
  listings: Listing[];
}
