import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Charity, Category } from "@/lib/data/charities";
import CharityCard from "./CharityCard";

interface CharityCategoryProps {
  category: Category;
  charities: Charity[];
  expanded: boolean;
  toggleExpanded: (categoryId: string) => void;
  selectedCharity: string | null;
  onSelectCharity: (charityId: string) => void;
}

const CharityCategory = ({
  category,
  charities,
  expanded,
  toggleExpanded,
  selectedCharity,
  onSelectCharity,
}: CharityCategoryProps) => {
  return (
    <div className="mb-8">
      <button
        className="w-full flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4"
        onClick={() => toggleExpanded(category.id)}
      >
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-3">
            {/* Icon would be rendered here based on category.icon */}
            <span className="text-lg">{category.icon}</span>
          </div>
          <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
        </div>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {expanded && (
        <div className="space-y-4">
          <p className="text-gray-600 mb-4">{category.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {charities.map((charity) => (
              <CharityCard
                key={charity.id}
                charity={charity}
                isSelected={selectedCharity === charity.id}
                onSelect={() => onSelectCharity(charity.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharityCategory; 