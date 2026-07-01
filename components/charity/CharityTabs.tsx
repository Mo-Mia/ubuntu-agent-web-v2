"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Category } from "@/lib/data/charities";
import CategoryIcon from "@/components/charity/CategoryIcon";

interface CharityTabsProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CharityTabs = ({ categories, activeCategory, onSelectCategory }: CharityTabsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
  }, [activeCategory]);

  return (
    <div
      ref={scrollRef}
      className="mb-8 -mx-4 px-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory charity-tabs-scroll"
    >
      <div className="flex justify-start gap-1 border-b border-gray-200 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            ref={activeCategory === category.id ? activeRef : undefined}
            type="button"
            onClick={() => onSelectCategory(category.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 text-sm md:text-base font-medium transition-colors whitespace-nowrap snap-start",
              activeCategory === category.id
                ? "text-[#B3941F] border-b-2 border-[#B3941F]"
                : "text-[#0C0F24] hover:text-[#B3941F]"
            )}
          >
            <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#0C0F24]">
              <CategoryIcon icon={category.icon} className="h-4 w-4" />
            </span>
            <span className="hidden lg:inline">{category.name}</span>
            <span className="lg:hidden">{category.shortName}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharityTabs;
