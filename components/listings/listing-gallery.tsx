'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { Building2, ChevronLeft, ChevronRight, Home, Landmark } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getListingPhotoUrl } from '@/lib/listings';

type ListingGalleryProps = {
  displayAddress: string;
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
  displayAddress,
  photos,
  type,
  uniqueId,
}: ListingGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(photos[0] ?? null);
  const [brokenPhotos, setBrokenPhotos] = useState<string[]>([]);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    setSelectedPhoto(photos[0] ?? null);
    setBrokenPhotos([]);
  }, [photos, uniqueId]);

  const availablePhotos = useMemo(
    () => photos.filter((photo) => !brokenPhotos.includes(photo)),
    [brokenPhotos, photos]
  );
  const activePhoto = selectedPhoto && !brokenPhotos.includes(selectedPhoto)
    ? selectedPhoto
    : availablePhotos[0] ?? null;

  const handleBrokenPhoto = (photo: string) => {
    setBrokenPhotos((current) => (current.includes(photo) ? current : [...current, photo]));
  };

  const updateSelectedPhoto = (direction: 'previous' | 'next') => {
    if (availablePhotos.length < 2 || !activePhoto) {
      return;
    }

    const currentIndex = availablePhotos.indexOf(activePhoto);
    const nextIndex = direction === 'next'
      ? (currentIndex + 1) % availablePhotos.length
      : (currentIndex - 1 + availablePhotos.length) % availablePhotos.length;

    setSelectedPhoto(availablePhotos[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        updateSelectedPhoto('previous');
      }

      if (event.key === 'ArrowRight') {
        updateSelectedPhoto('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto, availablePhotos]);

  const handleTouchEnd = (touchEndX: number) => {
    if (touchStartX === null) {
      return;
    }

    const deltaX = touchStartX - touchEndX;
    if (Math.abs(deltaX) < 40) {
      setTouchStartX(null);
      return;
    }

    updateSelectedPhoto(deltaX > 0 ? 'next' : 'previous');
    setTouchStartX(null);
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#0C0F24] shadow-lg">
        {activePhoto ? (
          <div
            className="relative aspect-[16/10]"
            onTouchStart={(event) => setTouchStartX(event.changedTouches[0]?.clientX ?? null)}
            onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
          >
            <Image
              src={getListingPhotoUrl(uniqueId, activePhoto)}
              alt={`${type} in ${displayAddress}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 80vw"
              placeholder="empty"
              onError={() => handleBrokenPhoto(activePhoto)}
            />
            {availablePhotos.length > 1 ? (
              <>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => updateSelectedPhoto('previous')}
                  className="absolute left-4 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-black/40 p-0 text-white hover:bg-black/60 hover:text-white"
                  aria-label="Show previous photo"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => updateSelectedPhoto('next')}
                  className="absolute right-4 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-black/40 p-0 text-white hover:bg-black/60 hover:text-white"
                  aria-label="Show next photo"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </>
            ) : null}
          </div>
        ) : (
          <div className="flex aspect-[16/10] flex-col items-center justify-center bg-[radial-gradient(circle_at_top,#21306b_0%,#0C0F24_65%)] px-6 text-center text-white">
            <PlaceholderIcon type={type} />
            <p className="mt-5 mb-2 text-sm font-medium uppercase tracking-[0.28em] text-white/60">
              {type}
            </p>
            <h1 className="mb-2 text-3xl font-semibold md:text-4xl">{type} in {displayAddress}</h1>
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
                    alt={`${type} in ${displayAddress} photo ${index + 1}`}
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
