"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Charity } from "@/lib/data/charities";

interface EnhancedCharityCardProps {
  charity: Charity;
}

function charityWebsiteUrl(website: string | null): string | null {
  if (!website) return null;
  return website.startsWith("http") ? website : `https://${website}`;
}

const EnhancedCharityCard: React.FC<EnhancedCharityCardProps> = ({ charity }) => {
  const website = charityWebsiteUrl(charity.contact.website);
  const isLogo =
    charity.image.endsWith(".svg") || charity.image.includes("logo");

  return (
    <Card className="h-full flex flex-col charity-surface bg-white">
      <CardContent className="flex flex-col h-full p-5">
        <div className="flex flex-col items-center mb-4">
          <div className={`relative w-full mb-3 ${isLogo ? "h-20" : "h-32"}`}>
            <Image
              src={charity.image}
              alt={`${charity.name} logo`}
              fill
              className={isLogo ? "object-contain" : "object-cover rounded-md"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex items-start justify-between w-full gap-2">
            <h3 className="text-lg font-semibold text-[#0C0F24]">{charity.name}</h3>
            <Badge variant="outline" className="shrink-0 text-[#0C0F24] border-gray-300">
              {charity.category}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-gray-700 flex-grow mb-4">{charity.mission}</p>
        {website ? (
          <Button variant="outline" className="w-full mt-auto" asChild>
            <Link href={website} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </Button>
        ) : (
          <Button variant="outline" className="w-full mt-auto" disabled>
            <span className="flex items-center">No Website Available</span>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default EnhancedCharityCard;
