import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Charity, Category } from "@/lib/data/charities";
import CategoryIcon from "@/components/charity/CategoryIcon";
import CharityCard from "./CharityCard";

interface CharityCategoryProps {
  category: Category;
  charities: Charity[];
  expanded: boolean;
  toggleExpanded: (categoryId: string) => void;
  selectedCharity: string | null;
  onSelectCharity: (charityId: string) => void;
  highlightCharityId?: string | null;
}

const CharityCategory = ({
  category,
  charities,
  expanded,
  toggleExpanded,
  selectedCharity,
  onSelectCharity,
  highlightCharityId,
}: CharityCategoryProps) => {
  return (
    <div className="mb-8">
      <button
        type="button"
        className="w-full flex items-center justify-between bg-white border border-gray-200 p-4 rounded-lg mb-4 charity-surface"
        onClick={() => toggleExpanded(category.id)}
        aria-expanded={expanded}
      >
        <div className="flex items-center min-w-0">
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#D4AF37]/15 text-[#0C0F24] flex items-center justify-center mr-3">
            <CategoryIcon icon={category.icon} />
          </div>
          <h3 className="text-lg font-semibold text-[#0C0F24]">{category.name}</h3>
        </div>
        {expanded ? (
          <ChevronUp size={20} className="shrink-0 text-[#0C0F24]" />
        ) : (
          <ChevronDown size={20} className="shrink-0 text-[#0C0F24]" />
        )}
      </button>

      {expanded && (
        <div className="space-y-4 charity-surface">
          <p className="text-gray-700 mb-4">{category.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {charities.map((charity) => (
              <div
                key={charity.id}
                id={`charity-${charity.id}`}
                className={
                  highlightCharityId === charity.id
                    ? "ring-2 ring-[#B3941F] rounded-lg"
                    : undefined
                }
              >
                <CharityCard
                  charity={charity}
                  isSelected={selectedCharity === charity.id}
                  onSelect={() => onSelectCharity(charity.id)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharityCategory; 