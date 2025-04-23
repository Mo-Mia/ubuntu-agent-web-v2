import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export interface CharityInfo {
  id: string;
  name: string;
  description: string;
  website?: string | null;
  category: string;
}

interface EnhancedCharityCardProps {
  charity: CharityInfo;
}

const EnhancedCharityCard = ({ charity }: EnhancedCharityCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg h-full flex flex-col">
      <div className="mb-1">
        <span className="inline-block bg-navy/10 text-navy px-2 py-1 rounded-full text-xs font-medium mb-2">
          {charity.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-navy">{charity.name}</h3>
      
      <p className="text-gray-600 mb-4 flex-grow">{charity.description}</p>
      
      {charity.website && (
        <Link 
          href={charity.website} 
          className="text-gold hover:underline flex items-center mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      )}
    </div>
  );
};

export default EnhancedCharityCard; 