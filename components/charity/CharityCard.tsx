import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Charity } from "@/lib/data/charities";

interface CharityCardProps {
  charity: Charity;
  isSelected: boolean;
  onSelect: () => void;
}

const CharityCard = ({ charity, isSelected, onSelect }: CharityCardProps) => {
  return (
    <div
      className={`border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer
        ${isSelected ? "border-amber-500 ring-2 ring-amber-500" : "border-gray-200"}`}
      onClick={onSelect}
    >
      <div className="relative h-48 w-full">
        <Image
          src={charity.image || "/images/charity/placeholder.jpg"}
          alt={charity.name}
          fill
          className="object-cover"
        />
        {charity.featured && (
          <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-gray-800 mb-2">{charity.name}</h4>
          {isSelected && (
            <div className="h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center">
              <Check size={16} className="text-white" />
            </div>
          )}
        </div>

        <p className="text-sm text-gray-600 mb-2">{charity.location}</p>

        <p className="text-sm text-gray-700 mb-3 line-clamp-3">{charity.mission}</p>

        <div className="text-sm text-amber-600 font-medium">Learn more</div>
      </div>
    </div>
  );
};

export default CharityCard; 