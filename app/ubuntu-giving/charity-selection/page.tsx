import { Suspense } from "react";
import CharitySelectionContent from "./CharitySelectionContent";

export default function CharitySelectionPage() {
  return (
    <main className="container mx-auto px-4 py-12 pb-28 charity-surface">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0C0F24] mb-3">
          Select a Charity Partner
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Choose a cause to receive a donation through the Ubuntu Giving Programme
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-12 border border-gray-200">
        <h2 className="text-xl font-semibold text-[#0C0F24] mb-6">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <div className="w-10 h-10 bg-[#B3941F] text-white rounded-full flex items-center justify-center mb-4 font-semibold">
              1
            </div>
            <h3 className="font-medium text-[#0C0F24] mb-2">Select a Charity</h3>
            <p className="text-sm text-gray-700">
              Choose a charity from our portfolio that aligns with your values.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg">
            <div className="w-10 h-10 bg-[#B3941F] text-white rounded-full flex items-center justify-center mb-4 font-semibold">
              2
            </div>
            <h3 className="font-medium text-[#0C0F24] mb-2">Complete Your Transaction</h3>
            <p className="text-sm text-gray-700">
              After your property purchase or sale is completed through The Ubuntu Agent.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg">
            <div className="w-10 h-10 bg-[#B3941F] text-white rounded-full flex items-center justify-center mb-4 font-semibold">
              3
            </div>
            <h3 className="font-medium text-[#0C0F24] mb-2">Your Donation Is Made</h3>
            <p className="text-sm text-gray-700">
              5% of commission (or 10% if capped) is donated to your chosen charity.
            </p>
          </div>
        </div>

        <p className="text-gray-700">
          The Ubuntu Giving Programme is at the heart of The Ubuntu Agent&#39;s philosophy. With
          each property transaction, we contribute to strengthening our community, embodying the
          Ubuntu principle of &quot;I am because we are.&quot;
        </p>
      </div>

      <Suspense fallback={<p className="text-center text-gray-700">Loading charity partners…</p>}>
        <CharitySelectionContent />
      </Suspense>
    </main>
  );
}
