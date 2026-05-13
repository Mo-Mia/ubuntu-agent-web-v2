"use client"

import Image from "next/image"
import { ImageIcon } from "lucide-react"

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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" size="sm">
          <ImageIcon className="h-4 w-4" aria-hidden="true" />
          Edit hero
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[86vh] max-w-5xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Choose hero image</DialogTitle>
          <DialogDescription>
            {displayAddress} - current hero: {heroPhoto ?? "none"}
          </DialogDescription>
        </DialogHeader>

        <form action={updateListingHeroAction} className="space-y-5">
          <input type="hidden" name="uniqueId" value={uniqueId} />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label
              className={`flex min-h-40 cursor-pointer items-center justify-center rounded-lg border p-4 text-center text-sm transition-colors ${
                !heroPhoto ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#0C0F24]" : "border-slate-200 bg-slate-50 text-slate-600 hover:border-[#D4AF37]"
              }`}
            >
              <input
                className="sr-only"
                type="radio"
                name="heroPhoto"
                value=""
                defaultChecked={!heroPhoto}
              />
              No hero image
            </label>

            {photos.map((photo) => {
              const isCurrent = photo === heroPhoto

              return (
                <label
                  key={photo}
                  className={`group cursor-pointer overflow-hidden rounded-lg border bg-white transition-colors ${
                    isCurrent ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/40" : "border-slate-200 hover:border-[#D4AF37]"
                  }`}
                >
                  <input
                    className="sr-only peer"
                    type="radio"
                    name="heroPhoto"
                    value={photo}
                    defaultChecked={isCurrent}
                  />
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image
                      src={getListingPhotoUrl(uniqueId, photo)}
                      alt={`${displayAddress} ${photo}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 320px"
                    />
                    <div className="absolute inset-0 hidden bg-[#0C0F24]/45 peer-checked:block" />
                    <div className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-[#0C0F24]">
                      {isCurrent ? "Current hero" : photo}
                    </div>
                    <div className="absolute bottom-3 right-3 hidden rounded-md bg-[#D4AF37] px-2 py-1 text-xs font-semibold text-[#0C0F24] peer-checked:block">
                      Selected
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-3 py-2 text-sm">
                    <span className="truncate text-slate-700">{photo}</span>
                    <span className="hidden text-xs font-semibold text-[#B3941F] peer-checked:inline">Selected</span>
                  </div>
                </label>
              )
            })}
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-[#0C0F24] text-white hover:bg-[#18204A]">
              Save hero image
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
