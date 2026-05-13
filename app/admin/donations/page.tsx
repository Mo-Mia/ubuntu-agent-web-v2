import { ArchiveRestore, Save, Trash2 } from "lucide-react"

import { archiveDonationAction, createDonationAction, restoreDonationAction, updateDonationAction } from "@/app/admin/actions"
import { AdminShell } from "@/components/admin-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getDonations, summarizeDonations } from "@/lib/content"
import { hasDatabaseUrl } from "@/lib/db"
import { requireAdmin } from "@/lib/admin-auth"

export const dynamic = "force-dynamic"

export default async function AdminDonationsPage() {
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

  const donationRows = await getDonations(true)
  const summary = summarizeDonations(donationRows)

  return (
    <AdminShell>
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Total donated</p>
          <p className="mt-2 text-2xl font-semibold text-[#0C0F24]">R{summary.totalDonated.toLocaleString("en-ZA")}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Transactions</p>
          <p className="mt-2 text-2xl font-semibold text-[#0C0F24]">{summary.totalTransactions}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Charities</p>
          <p className="mt-2 text-2xl font-semibold text-[#0C0F24]">{summary.totalCharities}</p>
        </div>
      </div>

      <div className="mb-8 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-[#0C0F24]">Add donation</h2>
        <form action={createDonationAction} className="mt-5 grid gap-4 md:grid-cols-6">
          <Input name="donatedOn" type="date" required className="md:col-span-1" />
          <Input name="charityName" placeholder="Charity" required className="md:col-span-1" />
          <Input name="propertyLabel" placeholder="Property or label" required className="md:col-span-2" />
          <Input name="amountRand" type="number" min="0" step="1" placeholder="Amount" required className="md:col-span-1" />
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input name="isAdjustment" type="checkbox" />
            Adjustment
          </label>
          <Textarea name="notes" placeholder="Internal notes" className="md:col-span-5" />
          <Button type="submit" className="bg-[#0C0F24] text-white hover:bg-[#18204A]">
            Add donation
          </Button>
        </form>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="min-w-[1100px] w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Charity</th>
              <th className="px-4 py-3">Property / label</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Adjustment</th>
              <th className="px-4 py-3">Notes</th>
              <th className="px-4 py-3">State</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donationRows.map((donation) => (
              <tr key={donation.id} className="border-t border-slate-200 align-top">
                <td className="px-4 py-3">
                  <form id={`donation-${donation.id}`} action={updateDonationAction} className="contents">
                    <input type="hidden" name="id" value={donation.id} />
                    <Input name="donatedOn" type="date" defaultValue={donation.donatedOn} required />
                  </form>
                </td>
                <td className="px-4 py-3">
                  <Input form={`donation-${donation.id}`} name="charityName" defaultValue={donation.charityName} required />
                </td>
                <td className="px-4 py-3">
                  <Input form={`donation-${donation.id}`} name="propertyLabel" defaultValue={donation.propertyLabel} required />
                </td>
                <td className="px-4 py-3">
                  <Input form={`donation-${donation.id}`} name="amountRand" type="number" min="0" step="1" defaultValue={donation.amountRand} required />
                </td>
                <td className="px-4 py-3">
                  <input form={`donation-${donation.id}`} name="isAdjustment" type="checkbox" defaultChecked={donation.isAdjustment} />
                </td>
                <td className="px-4 py-3">
                  <Textarea form={`donation-${donation.id}`} name="notes" defaultValue={donation.notes ?? ""} />
                </td>
                <td className="px-4 py-3 text-slate-600">
                  {donation.archivedAt ? "Archived" : "Active"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Button form={`donation-${donation.id}`} type="submit" size="icon" title="Save">
                      <Save className="h-4 w-4" />
                    </Button>
                    {donation.archivedAt ? (
                      <form action={restoreDonationAction}>
                        <input type="hidden" name="id" value={donation.id} />
                        <Button type="submit" size="icon" variant="outline" title="Restore"><ArchiveRestore className="h-4 w-4" /></Button>
                      </form>
                    ) : (
                      <form action={archiveDonationAction}>
                        <input type="hidden" name="id" value={donation.id} />
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
