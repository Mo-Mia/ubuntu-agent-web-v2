"use client";

import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Category, Charity } from "@/lib/data/charities";
import CategoryIcon from "@/components/charity/CategoryIcon";
import EnhancedCharityCard from "@/components/charity/EnhancedCharityCard";

interface CharityBrowseAccordionProps {
  category: Category;
  charities: Charity[];
  expanded: boolean;
  onToggle: (categoryId: string) => void;
}

const CharityBrowseAccordion = ({
  category,
  charities,
  expanded,
  onToggle,
}: CharityBrowseAccordionProps) => {
  return (
    <div className="mb-4">
      <button
        type="button"
        className="w-full flex items-center justify-between bg-white border border-gray-200 p-4 rounded-lg text-left charity-surface"
        onClick={() => onToggle(category.id)}
        aria-expanded={expanded}
      >
        <div className="flex items-center min-w-0">
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#D4AF37]/15 text-[#0C0F24] flex items-center justify-center mr-3">
            <CategoryIcon icon={category.icon} />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-[#0C0F24]">{category.name}</h3>
            <p className="text-sm text-gray-700 truncate">{charities.length} partners</p>
          </div>
        </div>
        {expanded ? (
          <ChevronUp size={20} className="shrink-0 text-[#0C0F24]" />
        ) : (
          <ChevronDown size={20} className="shrink-0 text-[#0C0F24]" />
        )}
      </button>

      {expanded && (
        <div className="mt-4 space-y-4 charity-surface">
          <p className="text-sm text-gray-700 px-1">{category.description}</p>
          <div className="grid grid-cols-1 gap-4">
            {charities.map((charity) => (
              <EnhancedCharityCard key={charity.id} charity={charity} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharityBrowseAccordion;
