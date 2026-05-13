import { ArchiveRestore, ExternalLink, Save, Trash2 } from "lucide-react"
import Link from "next/link"

import { archiveListingAction, restoreListingAction, updateListingAction } from "@/app/admin/actions"
import { AdminListingHeroPicker } from "@/components/admin-listing-hero-picker"
import { AdminShell } from "@/components/admin-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getListings } from "@/lib/content"
import { hasDatabaseUrl } from "@/lib/db"
import { requireAdmin } from "@/lib/admin-auth"

export const dynamic = "force-dynamic"

const statuses = ["For Sale", "Under Offer", "To Rent", "On Auction", "Sold"]

export default async function AdminListingsPage() {
  await requireAdmin()

  if (!hasDatabaseUrl()) {
    return (
      <AdminShell>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-900">
          DATABASE_URL is not configured. Add Neon Postgres env vars before using admin content editing.
        </div>
      </AdminShell>
    )
  }

  const listings = await getListings({ includeArchived: true, publicOnly: false })
  const activeCount = listings.filter((listing) => !listing.archivedAt && listing.isPublished !== false).length

  return (
    <AdminShell>
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Listings</p>
          <p className="mt-2 text-2xl font-semibold text-[#0C0F24]">{listings.length}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Published</p>
          <p className="mt-2 text-2xl font-semibold text-[#0C0F24]">{activeCount}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Archived</p>
          <p className="mt-2 text-2xl font-semibold text-[#0C0F24]">{listings.filter((listing) => listing.archivedAt).length}</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="min-w-[1400px] w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Published</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Hero photo</th>
              <th className="px-4 py-3">Public URL</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">State</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.uniqueId} className="border-t border-slate-200 align-top">
                <td className="px-4 py-3">
                  <form id={`listing-${listing.uniqueId}`} action={updateListingAction} className="contents">
                    <input type="hidden" name="uniqueId" value={listing.uniqueId} />
                    <input name="isPublished" type="checkbox" defaultChecked={listing.isPublished !== false && !listing.archivedAt} />
                  </form>
                </td>
                <td className="px-4 py-3">
                  <Input form={`listing-${listing.uniqueId}`} name="displayAddress" defaultValue={listing.displayAddress ?? ""} />
                  <p className="mt-2 text-xs text-slate-500">{listing.uniqueId}</p>
                </td>
                <td className="px-4 py-3">
                  <select
                    form={`listing-${listing.uniqueId}`}
                    name="status"
                    defaultValue={listing.status}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <Input form={`listing-${listing.uniqueId}`} name="price" type="number" min="0" step="1" defaultValue={listing.price} />
                </td>
                <td className="px-4 py-3">
                  <select
                    form={`listing-${listing.uniqueId}`}
                    name="heroPhoto"
                    defaultValue={listing.heroPhoto ?? ""}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">No hero image</option>
                    {listing.photos.map((photo) => (
                      <option key={photo} value={photo}>{photo}</option>
                    ))}
                  </select>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <p className="text-xs text-slate-500">{listing.photos.length} photos</p>
                    <AdminListingHeroPicker
                      uniqueId={listing.uniqueId}
                      displayAddress={listing.displayAddress ?? listing.region}
                      photos={listing.photos}
                      heroPhoto={listing.heroPhoto}
                    />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Input form={`listing-${listing.uniqueId}`} name="publicUrl" defaultValue={listing.publicUrl ?? ""} />
                  {listing.publicUrl ? (
                    <Link href={listing.publicUrl} target="_blank" className="mt-2 inline-flex items-center gap-1 text-xs text-[#B3941F]">
                      Open <ExternalLink className="h-3 w-3" />
                    </Link>
                  ) : null}
                </td>
                <td className="px-4 py-3 text-slate-600">
                  <p>{listing.type}</p>
                  <p className="text-xs text-slate-500">{listing.sourceAccountLabel ?? "Unknown"}</p>
                </td>
                <td className="px-4 py-3 text-slate-600">
                  {listing.archivedAt ? "Archived" : listing.isPublished === false ? "Hidden" : "Live"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Button form={`listing-${listing.uniqueId}`} type="submit" size="icon" title="Save">
                      <Save className="h-4 w-4" />
                    </Button>
                    {listing.archivedAt ? (
                      <form action={restoreListingAction}>
                        <input type="hidden" name="uniqueId" value={listing.uniqueId} />
                        <Button type="submit" size="icon" variant="outline" title="Restore"><ArchiveRestore className="h-4 w-4" /></Button>
                      </form>
                    ) : (
                      <form action={archiveListingAction}>
                        <input type="hidden" name="uniqueId" value={listing.uniqueId} />
                        <Button type="submit" size="icon" variant="outline" title="Archive"><Trash2 className="h-4 w-4" /></Button>
                      </form>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  )
}
