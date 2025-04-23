"use client"

import React, { useState } from 'react';
import SectionHeading from '@/components/section-heading';
import CharityTabs from '@/components/charity/CharityTabs';
import EnhancedCharityCard, { CharityInfo } from '@/components/charity/EnhancedCharityCard';
import Link from 'next/link';

// Define the charity data for each category
const animalCharities: CharityInfo[] = [
  {
    id: 'spca-randburg',
    name: 'SPCA Randburg',
    description: 'Prevents cruelty to animals and provides shelter for stray, abandoned, and abused animals in the Randburg area. Services include investigations, adoptions, and education on responsible pet ownership.',
    website: 'https://www.spca-rbg.org.za',
    category: 'Animal Welfare'
  },
  {
    id: 'kitty-puppy-haven',
    name: 'Kitty and Puppy Haven',
    description: 'A pro-life animal sanctuary rescuing neglected, abused and abandoned cats and dogs. Rehabilitates animals and finds them loving permanent homes.',
    website: 'https://kittypuppyhaven.org.za',
    category: 'Animal Welfare'
  },
  {
    id: 'four-paws',
    name: 'Four Paws',
    description: 'Animal welfare organisation dedicated to saving animals in need. Four Paws focuses on animals who are directly under human influence.',
    website: 'https://www.four-paws.org.za',
    category: 'Animal Welfare',
    logoUrl: '/images/charity/logos/four-paws-logo.svg'
  }
];

const childrenCharities: CharityInfo[] = [
  {
    id: 'mother-of-peace',
    name: 'Mother of Peace Johannesburg',
    description: 'Operates a foster-care community for orphans and vulnerable children in Northriding. Provides a family-like environment where children can heal, grow and thrive.',
    website: 'https://motherofpeacejhb.co.za',
    category: 'Children & Youth'
  },
  {
    id: 'oasis-haven',
    name: 'Oasis Haven',
    description: 'A Child & Youth Care Centre providing family-based care for orphaned and abandoned children. Operates family homes caring for up to 10 children in a loving environment.',
    website: 'https://oasishaven.org',
    category: 'Children & Youth'
  },
  {
    id: 'choc',
    name: 'CHOC Childhood Cancer Foundation',
    description: 'Provides comprehensive support to children with cancer or life-threatening blood disorders, and their families, through accommodation, transport, and psychosocial support.',
    website: 'https://choc.org.za',
    category: 'Children & Youth',
    logoUrl: '/images/charity/logos/choc-logo.png'
  }
];

const communityCharities: CharityInfo[] = [
  {
    id: 'lets-work',
    name: 'Let\'s Work (Ward 88)',
    description: 'Creates jobs for homeless individuals by engaging them in cleaning and maintaining public spaces, improving both their lives and community environments.',
    website: null,
    category: 'Community Development'
  },
  {
    id: 'gift-of-the-givers',
    name: 'Gift of the Givers',
    description: 'South Africa\'s largest disaster response NGO, providing humanitarian aid in crises and community upliftment through various projects.',
    website: 'https://giftofthegivers.org',
    category: 'Community Development'
  },
  {
    id: 'one-small-act',
    name: 'One Small Act of Kindness',
    description: 'Provides shelter, food and support to the homeless and destitute in the Randburg area. Runs feeding schemes and a men\'s shelter to ensure no one goes hungry.',
    website: null,
    category: 'Community Development'
  }
];

const elderlyCharities: CharityInfo[] = [
  {
    id: 'rand-aid',
    name: 'Rand Aid Association',
    description: 'Provides accommodation in retirement villages and frail-care centres for the elderly, with profits supporting care for indigent elders and rehabilitation programmes.',
    website: 'https://randaid.co.za',
    category: 'Elderly Care'
  },
  {
    id: 'garden-village',
    name: 'Garden Village (Methodist Homes)',
    description: 'A long-established retirement home and frail care facility in Bordeaux, providing compassionate care and comfortable accommodation to the elderly for over 50 years.',
    website: 'https://mha.co.za',
    category: 'Elderly Care'
  }
];

const healthcareCharities: CharityInfo[] = [
  {
    id: 'rare-diseases-sa',
    name: 'Rare Diseases SA',
    description: 'Advocates for South Africans living with rare diseases and congenital disorders, ensuring patients have greater recognition, proper medical care, and access to treatments.',
    website: 'https://rarediseases.co.za',
    category: 'Healthcare & Disease Support'
  },
  {
    id: 'breadline-africa',
    name: 'Breadline Africa',
    description: 'Transforming the lives of children through infrastructure projects. Breadline Africa provides initiatives focused on education, health, and well-being.',
    website: 'https://breadlineafrica.org',
    category: 'Healthcare & Disease Support',
    logoUrl: '/images/charity/logos/breadline-africa-logo.png'
  }
];

// Define the category tabs
const categoryTabs = [
  { id: 'animal', name: 'Animal Welfare' },
  { id: 'children', name: 'Children & Youth' },
  { id: 'community', name: 'Community Development' },
  { id: 'elderly', name: 'Elderly Care' },
  { id: 'healthcare', name: 'Healthcare & Disease Support' }
];

const CharitySection = () => {
  const [activeCategory, setActiveCategory] = useState('animal');

  // Function to get charities based on the active category
  const getCharitiesByCategory = () => {
    switch (activeCategory) {
      case 'animal':
        return animalCharities;
      case 'children':
        return childrenCharities;
      case 'community':
        return communityCharities;
      case 'elderly':
        return elderlyCharities;
      case 'healthcare':
        return healthcareCharities;
      default:
        return animalCharities;
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="Approved Partners"
          title="Charity Partners"
          description="The Ubuntu Giving Programme allows you to direct 5% of Gary's commission (10% if capped) to a charity of your choice. Gary has already supported organisations like Four Paws, CHOC, and Breadline Africa through real estate transactions, but you can choose from any of our approved charity partners below or suggest another cause that resonates with you."
          alignment="center"
        />

        <div className="mt-12">
          <CharityTabs
            categories={categoryTabs}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {getCharitiesByCategory().map((charity) => (
              <EnhancedCharityCard key={charity.id} charity={charity} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-body mb-6">
            Don't see your preferred charity? Gary is open to supporting other reputable nonprofit organisations.
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