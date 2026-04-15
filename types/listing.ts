export interface Listing {
  uniqueId: string;
  address: string;
  status: 'For Sale' | 'Under Offer' | 'To Rent' | 'On Auction';
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
  publicUrl: string;
  photos: string[];
  heroPhoto: string | null;
  dateLoaded: string;
  dateModified: string;
}

export interface ListingsData {
  lastUpdated: string;
  listings: Listing[];
}
