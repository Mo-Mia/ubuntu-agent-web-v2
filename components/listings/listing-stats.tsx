import { Bath, BedDouble, CarFront, Ruler } from 'lucide-react';

import { cn } from '@/lib/utils';

type ListingStatsProps = {
  bathrooms: number;
  bedrooms: number;
  floorSize: number;
  garages: number;
  variant?: 'card' | 'detail';
};

const items = [
  { key: 'bedrooms', label: 'Beds', Icon: BedDouble },
  { key: 'bathrooms', label: 'Baths', Icon: Bath },
  { key: 'garages', label: 'Garages', Icon: CarFront },
  { key: 'floorSize', label: 'm²', Icon: Ruler },
] as const;

export function ListingStats({
  bathrooms,
  bedrooms,
  floorSize,
  garages,
  variant = 'card',
}: ListingStatsProps) {
  const values = { bedrooms, bathrooms, garages, floorSize };

  return (
    <div
      className={cn(
        'grid gap-3',
        variant === 'card' ? 'grid-cols-4' : 'grid-cols-2 sm:grid-cols-4'
      )}
    >
      {items.map(({ key, label, Icon }) => (
        <div
          key={key}
          className={cn(
            'flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 text-slate-700',
            variant === 'detail' && 'min-h-14'
          )}
        >
          <Icon className="h-4 w-4 text-[#B3941F]" aria-hidden="true" />
          <div className="min-w-0">
            <div className="text-sm font-semibold leading-none">
              {key === 'floorSize' ? `${values[key]} m²` : values[key]}
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
