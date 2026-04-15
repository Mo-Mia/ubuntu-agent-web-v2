'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Building2, Home, Landmark } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getListingPhotoUrl } from '@/lib/listings';

type ListingGalleryProps = {
  address: string;
  photos: string[];
  type: string;
  uniqueId: string;
};

function PlaceholderIcon({ type }: { type: string }) {
  if (type.toLowerCase().includes('apartment')) {
    return <Building2 className="h-12 w-12 text-[#D4AF37]" aria-hidden="true" />;
  }

  if (type.toLowerCase().includes('townhouse')) {
    return <Landmark className="h-12 w-12 text-[#D4AF37]" aria-hidden="true" />;
  }

  return <Home className="h-12 w-12 text-[#D4AF37]" aria-hidden="true" />;
}

export function ListingGallery({
  address,
  photos,
  type,
  uniqueId,
}: ListingGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(photos[0] ?? null);
  const [brokenPhotos, setBrokenPhotos] = useState<string[]>([]);

  useEffect(() => {
    setSelectedPhoto(photos[0] ?? null);
    setBrokenPhotos([]);
  }, [photos, uniqueId]);

  const availablePhotos = photos.filter((photo) => !brokenPhotos.includes(photo));
  const activePhoto = selectedPhoto && !brokenPhotos.includes(selectedPhoto)
    ? selectedPhoto
    : availablePhotos[0] ?? null;

  const handleBrokenPhoto = (photo: string) => {
    setBrokenPhotos((current) => (current.includes(photo) ? current : [...current, photo]));
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#0C0F24] shadow-lg">
        {activePhoto ? (
          <div className="relative aspect-[16/10]">
            <Image
              src={getListingPhotoUrl(uniqueId, activePhoto)}
              alt={address}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 80vw"
              placeholder="empty"
              onError={() => handleBrokenPhoto(activePhoto)}
            />
          </div>
        ) : (
          <div className="flex aspect-[16/10] flex-col items-center justify-center bg-[radial-gradient(circle_at_top,#21306b_0%,#0C0F24_65%)] px-6 text-center text-white">
            <PlaceholderIcon type={type} />
            <p className="mt-5 mb-2 text-sm font-medium uppercase tracking-[0.28em] text-white/60">
              {type}
            </p>
            <h1 className="mb-2 text-3xl font-semibold md:text-4xl">{address}</h1>
            <p className="mb-0 text-white/75">Photography will be added shortly.</p>
          </div>
        )}
      </div>

      {availablePhotos.length > 1 ? (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {availablePhotos.map((photo, index) => {
            const isActive = photo === activePhoto;

            return (
              <Button
                key={photo}
                type="button"
                variant="ghost"
                onClick={() => setSelectedPhoto(photo)}
                className={`relative h-auto overflow-hidden rounded-2xl border p-0 ${
                  isActive
                    ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={getListingPhotoUrl(uniqueId, photo)}
                    alt={`${address} photo ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 33vw, 160px"
                    placeholder="empty"
                    onError={() => handleBrokenPhoto(photo)}
                  />
                </div>
              </Button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
