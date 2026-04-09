"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

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
  const [isLedgerOpen, setIsLedgerOpen] = useState(false)

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
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Donation ledger</h3>
            <p className="mt-2 text-gray-600">Every donation verified by FNB proof of payment</p>
          </div>
          <button
            type="button"
            onClick={() => setIsLedgerOpen((open) => !open)}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gold hover:text-gold"
            aria-expanded={isLedgerOpen}
            aria-controls="donation-ledger-list"
          >
            {isLedgerOpen ? "Hide donation details" : "View donation details"}
            {isLedgerOpen ? <ChevronUp className="h-4 w-4" aria-hidden="true" /> : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>

        {isLedgerOpen ? (
          <div id="donation-ledger-list">
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
        ) : (
          <p className="rounded-md bg-gray-50 px-4 py-3 text-sm text-gray-600">
            Donation details are hidden by default. Expand the ledger to view each verified donation.
          </p>
        )}
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
