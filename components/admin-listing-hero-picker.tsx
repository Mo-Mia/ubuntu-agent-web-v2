"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, ImageIcon } from "lucide-react"

import { updateListingHeroAction } from "@/app/admin/actions"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getListingPhotoUrl } from "@/lib/listings"

type AdminListingHeroPickerProps = {
  uniqueId: string
  displayAddress: string
  photos: string[]
  heroPhoto: string | null
}

export function AdminListingHeroPicker({
  uniqueId,
  displayAddress,
  photos,
  heroPhoto,
}: AdminListingHeroPickerProps) {
  const [selectedHero, setSelectedHero] = useState(heroPhoto ?? "")
  const hasChanged = selectedHero !== (heroPhoto ?? "")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" size="sm">
          <ImageIcon className="h-4 w-4" aria-hidden="true" />
          Edit hero
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[88vh] max-w-5xl grid-rows-none flex-col gap-0 overflow-hidden p-0">
        <DialogHeader>
          <div className="border-b border-slate-200 px-6 pb-4 pt-6">
            <DialogTitle>Choose hero image</DialogTitle>
            <DialogDescription className="mt-2">{displayAddress}</DialogDescription>
          </div>
        </DialogHeader>

        <form action={updateListingHeroAction} className="flex min-h-0 flex-1 flex-col">
          <input type="hidden" name="uniqueId" value={uniqueId} />
          <input type="hidden" name="heroPhoto" value={selectedHero} />

          <div className="border-b border-slate-200 bg-white px-6 py-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-[#0C0F24]">
                  Selected: {selectedHero || "No hero image"}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Current hero: {heroPhoto || "none"}
                </p>
              </div>
              <Button type="submit" className="bg-[#0C0F24] text-white hover:bg-[#18204A]">
                {hasChanged ? "Save new hero image" : "Save hero image"}
              </Button>
            </div>
          </div>

          <div className="min-h-0 overflow-y-auto px-6 py-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <button
                type="button"
                onClick={() => setSelectedHero("")}
                className={`flex min-h-40 cursor-pointer items-center justify-center rounded-lg border p-4 text-center text-sm transition-colors ${
                  selectedHero === ""
                    ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#0C0F24] ring-2 ring-[#D4AF37]/40"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-[#D4AF37]"
                }`}
                aria-pressed={selectedHero === ""}
              >
                <span className="flex flex-col items-center gap-2">
                  {selectedHero === "" ? <Check className="h-5 w-5 text-[#B3941F]" aria-hidden="true" /> : null}
                  No hero image
                </span>
              </button>

              {photos.map((photo) => {
                const isCurrent = photo === heroPhoto
                const isSelected = photo === selectedHero

                return (
                  <button
                    key={photo}
                    type="button"
                    onClick={() => setSelectedHero(photo)}
                    className={`group overflow-hidden rounded-lg border bg-white text-left transition-colors ${
                      isSelected ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/40" : "border-slate-200 hover:border-[#D4AF37]"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="relative aspect-[4/3] bg-slate-100">
                      <Image
                        src={getListingPhotoUrl(uniqueId, photo)}
                        alt={`${displayAddress} ${photo}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 320px"
                      />
                      {isSelected ? <div className="absolute inset-0 bg-[#0C0F24]/35" /> : null}
                      <div className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-[#0C0F24]">
                        {isCurrent ? "Current hero" : photo}
                      </div>
                      {isSelected ? (
                        <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-[#D4AF37] px-2 py-1 text-xs font-semibold text-[#0C0F24]">
                          <Check className="h-3 w-3" aria-hidden="true" />
                          Selected
                        </div>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3 py-2 text-sm">
                      <span className="truncate text-slate-700">{photo}</span>
                      {isSelected ? <span className="text-xs font-semibold text-[#B3941F]">Selected</span> : null}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white px-6 py-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-slate-600">
                {hasChanged ? "Hero image changed. Save to update the public listing." : "Choose an image above, then save."}
              </p>
              <Button type="submit" className="bg-[#0C0F24] text-white hover:bg-[#18204A]">
                {hasChanged ? "Save new hero image" : "Save hero image"}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
