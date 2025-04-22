"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, charities } from "@/lib/data/charities";
import CharityCategory from "@/components/charity/CharityCategory";

export default function CharitySelectionPage() {
  const [expandedCategories, setExpandedCategories] = useState([categories[0].id]);
  const [selectedCharity, setSelectedCharity] = useState<string | null>(null);

  // Group charities by category
  const charitiesByCategory = categories.map((category) => {
    const categoryCharities = charities.filter((charity) =>
      charity.category.toLowerCase().includes(category.name.toLowerCase())
    );

    return {
      category,
      charities: categoryCharities,
    };
  });

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  };

  const selectedCharityDetails = selectedCharity
    ? charities.find((c) => c.id === selectedCharity)
    : null;

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Select a Charity Partner
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose a cause to receive a donation through the Golden Circle Giving Program
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Step 1 */}
          <div className="bg-gray-50 p-5 rounded-lg">
            <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center mb-4 font-semibold">
              1
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Select a Charity</h3>
            <p className="text-sm text-gray-600">
              Choose a charity from our portfolio that aligns with your values.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 p-5 rounded-lg">
            <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center mb-4 font-semibold">
              2
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Complete Your Transaction</h3>
            <p className="text-sm text-gray-600">
              After your property purchase or sale is completed through The Ubuntu Agent.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 p-5 rounded-lg">
            <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center mb-4 font-semibold">
              3
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Your Donation Is Made</h3>
            <p className="text-sm text-gray-600">
              5% of commission (or 10% if capped) is donated to your chosen charity.
            </p>
          </div>
        </div>

        <p className="text-gray-700">
          The Golden Circle Giving Program is at the heart of The Ubuntu Agent&#39;s philosophy. With
          each property transaction, we contribute to strengthening our community, embodying the
          Ubuntu principle of &quot;I am because we are.&quot;
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Our Charity Partners</h2>

        {charitiesByCategory.map(({ category, charities }) => (
          <CharityCategory
            key={category.id}
            category={category}
            charities={charities}
            expanded={expandedCategories.includes(category.id)}
            toggleExpanded={toggleCategory}
            selectedCharity={selectedCharity}
            onSelectCharity={setSelectedCharity}
          />
        ))}
      </div>

      {selectedCharityDetails && (
        <div className="sticky bottom-0 w-full bg-white shadow-md border-t p-4 z-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-medium text-gray-800">
                Selected: {selectedCharityDetails.name}
              </p>
              <p className="text-sm text-gray-600">{selectedCharityDetails.category}</p>
            </div>

            <Link
              href="/contact?charity=${selectedCharity}"
              className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors w-full md:w-auto text-center"
            >
              Confirm Selection & Continue
            </Link>
          </div>
        </div>
      )}
    </main>
  );
} 