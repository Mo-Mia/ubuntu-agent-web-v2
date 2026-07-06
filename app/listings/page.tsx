import type { Metadata } from 'next';

import { ListingsBridgePage } from '@/components/listings/listings-bridge-page';
import { ListingsIndex } from '@/components/listings/listings-index';
import { isInternalListingsEnabled } from '@/lib/config/listings';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Properties | The Ubuntu Agent',
  description: isInternalListingsEnabled()
    ? 'Browse current property listings from The Ubuntu Agent in Fourways, North Riding, Craigavon and surrounding areas.'
    : "Browse Gary Berkowitz's live property listings on PropCon. Residential sales and rentals across North Johannesburg with Ubuntu Giving on every sale.",
  alternates: {
    canonical: '/listings',
  },
};

export default async function ListingsPage() {
  if (isInternalListingsEnabled()) {
    return <ListingsIndex />;
  }

  return <ListingsBridgePage />;
}
