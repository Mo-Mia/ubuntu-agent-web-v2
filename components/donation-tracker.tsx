"use client"

import { donations, totalCharities, totalDonated, totalTransactions } from "@/lib/data/donations"

const zarFormatter = new Intl.NumberFormat("en-ZA", {
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
})

const formatRand = (amount: number) => `R${zarFormatter.format(amount)}`

const charityTotals = Object.entries(
  donations.reduce<Record<string, number>>((totals, donation) => {
    totals[donation.charity] = (totals[donation.charity] ?? 0) + donation.amount
    return totals
  }, {}),
)
  .map(([charity, total]) => ({
    charity,
    total: charity === "CHOC" ? total + 3800 : total,
  }))
  .sort((a, b) => b.total - a.total)

export default function DonationTracker() {
  return (
    <div className="mt-12 space-y-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-600">Total donated</p>
          <p className="mt-3 text-3xl font-bold text-gold">{formatRand(totalDonated)}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-600">Transactions</p>
          <p className="mt-3 text-3xl font-bold text-gray-900">{totalTransactions}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-600">Charities supported</p>
          <p className="mt-3 text-3xl font-bold text-gray-900">{totalCharities}</p>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Donation ledger</h3>
          <p className="mt-2 text-gray-600">Every donation verified by FNB proof of payment</p>
        </div>

        <div>
          {donations.map((donation, index) => (
            <div
              key={donation.id}
              className={`flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between ${
                index !== donations.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="min-w-0">
                <p className="text-sm text-gray-600">{donation.displayDate}</p>
                <p className="mt-1 text-base text-gray-700">
                  <span className="font-semibold text-gray-900">{donation.charity}</span>
                  <span className="text-gray-600">{" — "}{donation.property}</span>
                </p>
              </div>
              <p className="shrink-0 text-lg font-semibold text-gold">{formatRand(donation.amount)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="text-2xl font-semibold text-gray-900">By charity</h3>

        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
          {charityTotals.map((charity) => (
            <div
              key={charity.charity}
              className="flex items-center justify-between border-b border-gray-200 py-3"
            >
              <span className="text-gray-700">{charity.charity}</span>
              <span className="font-semibold text-gold">{formatRand(charity.total)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
