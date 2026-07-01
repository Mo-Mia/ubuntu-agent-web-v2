"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import CharityTabs from "@/components/charity/CharityTabs";
import EnhancedCharityCard from "@/components/charity/EnhancedCharityCard";
import CharityBrowseAccordion from "@/components/charity/CharityBrowseAccordion";
import CharityCard from "@/components/charity-card";
import {
  categories,
  getCharitiesGroupedByCategory,
  getCharitiesForCategory,
  getPreviouslySupportedCharities,
} from "@/lib/data/charities";

const charityGroups = getCharitiesGroupedByCategory();
const defaultCategoryId = categories.find((c) => c.id === "animal-welfare")?.id ?? categories[0].id;

const CharitySection = () => {
  const [activeCategory, setActiveCategory] = useState(defaultCategoryId);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    charityGroups.map((group) => group.category.id)
  );

  const activeCharities = getCharitiesForCategory(
    categories.find((c) => c.id === activeCategory) ?? categories[0]
  );
  const previouslySupported = getPreviouslySupportedCharities();

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <section className="section-padding bg-gray-50 charity-surface">
      <div className="container-custom">
        <SectionHeading
          subtitle="Approved Partners"
          title="Charity Partners"
          description="The Ubuntu Giving Programme allows you to direct 5% of Gary's commission (10% if capped) to a charity of your choice. Gary has already supported organisations like Four Paws, CHOC, and Breadline Africa through real estate transactions, but you can choose from any of our approved charity partners below or suggest another cause that resonates with you."
          alignment="center"
        />

        {previouslySupported.length > 0 && (
          <div className="mt-12">
            <h3 className="text-center text-lg font-semibold text-[#0C0F24] mb-2">
              Charities We&apos;ve Supported
            </h3>
            <p className="text-center text-sm text-gray-700 mb-6 max-w-2xl mx-auto">
              Organisations Gary has already donated to through completed transactions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {previouslySupported.map((charity) => (
                <CharityCard
                  key={charity.id}
                  name={charity.name}
                  description={charity.mission}
                  imageSrc={charity.image}
                  category="Previously supported"
                  websiteUrl={
                    charity.contact.website
                      ? charity.contact.website.startsWith("http")
                        ? charity.contact.website
                        : `https://${charity.contact.website}`
                      : undefined
                  }
                  link={`/ubuntu-giving/charity-selection?highlight=${charity.id}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <h3 className="text-center text-lg font-semibold text-[#0C0F24] mb-6">
            Browse All Partners
          </h3>

          {/* Mobile: accordion — scroll vertically through all categories */}
          <div className="md:hidden">
            {charityGroups.map(({ category, charities }) => (
              <CharityBrowseAccordion
                key={category.id}
                category={category}
                charities={charities}
                expanded={expandedCategories.includes(category.id)}
                onToggle={toggleCategory}
              />
            ))}
          </div>

          {/* Desktop: tabs + card grid */}
          <div className="hidden md:block">
            <CharityTabs
              categories={charityGroups.map((g) => g.category)}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {activeCharities.map((charity) => (
                <EnhancedCharityCard key={charity.id} charity={charity} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-body mb-6">
            Don&apos;t see your preferred charity? Gary is open to supporting other reputable nonprofit organisations.
            Please mention your preferred charity during your consultation.
          </p>
          <Link href="/contact" className="btn-secondary">
            Suggest a Charity
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CharitySection;
