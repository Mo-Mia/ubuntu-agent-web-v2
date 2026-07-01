"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories, charities, getCharitiesGroupedByCategory } from "@/lib/data/charities";
import CharityCategory from "@/components/charity/CharityCategory";

export default function CharitySelectionContent() {
  const searchParams = useSearchParams();
  const highlightId = searchParams.get("highlight");

  const charitiesByCategory = useMemo(() => getCharitiesGroupedByCategory(), []);

  const highlightCategoryId = useMemo(() => {
    if (!highlightId) return null;
    const charity = charities.find((c) => c.id === highlightId);
    if (!charity) return null;
    return categories.find((c) => c.name === charity.category)?.id ?? null;
  }, [highlightId]);

  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    highlightCategoryId ?? categories[0].id,
  ]);
  const [selectedCharity, setSelectedCharity] = useState<string | null>(highlightId);

  useEffect(() => {
    if (!highlightId) return;

    const charity = charities.find((c) => c.id === highlightId);
    if (!charity) return;

    const categoryId = categories.find((c) => c.name === charity.category)?.id;
    if (categoryId) {
      setExpandedCategories((prev) =>
        prev.includes(categoryId) ? prev : [...prev, categoryId]
      );
    }
    setSelectedCharity(highlightId);

    const timer = window.setTimeout(() => {
      document.getElementById(`charity-${highlightId}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);

    return () => window.clearTimeout(timer);
  }, [highlightId]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  };

  const selectedCharityDetails = selectedCharity
    ? charities.find((c) => c.id === selectedCharity)
    : null;

  return (
    <>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0C0F24] mb-8">Our Charity Partners</h2>

        {charitiesByCategory.map(({ category, charities: categoryCharities }) => (
          <CharityCategory
            key={category.id}
            category={category}
            charities={categoryCharities}
            expanded={expandedCategories.includes(category.id)}
            toggleExpanded={toggleCategory}
            selectedCharity={selectedCharity}
            onSelectCharity={setSelectedCharity}
            highlightCharityId={highlightId}
          />
        ))}
      </div>

      {selectedCharityDetails && (
        <div className="sticky bottom-0 w-full bg-white shadow-md border-t p-4 z-10 charity-surface">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-medium text-[#0C0F24]">
                Selected: {selectedCharityDetails.name}
              </p>
              <p className="text-sm text-gray-700">{selectedCharityDetails.category}</p>
            </div>

            <Link
              href={`/contact?charity=${selectedCharity}`}
              className="px-6 py-3 bg-[#B3941F] text-[#0C0F24] font-medium rounded-md hover:bg-[#D4AF37] transition-colors w-full md:w-auto text-center"
            >
              Confirm Selection & Continue
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
