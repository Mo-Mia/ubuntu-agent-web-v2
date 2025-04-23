"use client"

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export interface CharityInfo {
  id: string;
  name: string;
  description: string;
  website: string | null;
  category: string;
  logoUrl?: string | null;
}

interface EnhancedCharityCardProps {
  charity: CharityInfo;
}

const EnhancedCharityCard: React.FC<EnhancedCharityCardProps> = ({ charity }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="flex flex-col h-full p-5">
        {charity.logoUrl && (
          <div className="mb-4 h-16 relative">
            <Image 
              src={charity.logoUrl}
              alt={`${charity.name} logo`}
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-md"
            />
          </div>
        )}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold">{charity.name}</h3>
          <Badge variant="outline" className="ml-2">
            {charity.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground flex-grow mb-4">
          {charity.description}
        </p>
        {charity.website ? (
          <Button variant="outline" className="w-full mt-auto" asChild>
            <Link href={charity.website} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </Button>
        ) : (
          <Button variant="outline" className="w-full mt-auto" disabled>
            <span className="flex items-center">
              No Website Available
            </span>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default EnhancedCharityCard; 