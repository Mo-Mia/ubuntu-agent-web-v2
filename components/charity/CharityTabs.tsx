import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryTab {
  id: string;
  name: string;
}

interface CharityTabsProps {
  categories: CategoryTab[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CharityTabs = ({ categories, activeCategory, onSelectCategory }: CharityTabsProps) => {
  return (
    <div className="flex justify-center mb-8 overflow-x-auto pb-2">
      <div className="flex space-x-1 border-b">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={cn(
              "px-4 py-2 text-sm md:text-base font-medium transition-colors whitespace-nowrap",
              activeCategory === category.id
                ? "text-gold border-b-2 border-gold"
                : "text-gray-600 hover:text-gold"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharityTabs; 