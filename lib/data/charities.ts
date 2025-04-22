export interface Charity {
  id: string;
  name: string;
  category: string;
  location: string;
  contact: {
    email: string | null;
    phone: string | null;
    website: string | null;
  };
  mission: string;
  impact: string;
  featured: boolean;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "community-development",
    name: "Community Development",
    description: "Organizations that uplift communities through job creation, urban renewal, and local improvement initiatives.",
    icon: "building-community"
  },
  {
    id: "animal-welfare",
    name: "Animal Welfare",
    description: "Organizations that protect, rescue, and care for animals in need.",
    icon: "paw-print"
  },
  {
    id: "child-welfare",
    name: "Child Welfare",
    description: "Organizations that care for orphaned, abandoned, and vulnerable children.",
    icon: "heart-hands"
  },
  {
    id: "elderly-care",
    name: "Elderly Care",
    description: "Organizations that provide care, housing, and support for the elderly.",
    icon: "users"
  },
  {
    id: "disease-support",
    name: "Disease Support & Research",
    description: "Organizations that support those affected by diseases and fund research for cures and treatments.",
    icon: "stethoscope"
  },
  {
    id: "homeless-support",
    name: "Homeless Support",
    description: "Organizations that provide shelter, food, and rehabilitation for the homeless.",
    icon: "home-heart"
  },
  {
    id: "community-initiatives",
    name: "Community Initiatives",
    description: "Grassroots initiatives that bring communities together for health, fitness, and social connection.",
    icon: "users-round"
  }
];

export const charities: Charity[] = [
  {
    id: "lets-work",
    name: "Let's Work (Ward 88)",
    category: "Community Development",
    location: "Emmarentia / Ward 88",
    contact: {
      email: "felicity@letswork.org.za",
      phone: "082 568 1783",
      website: null
    },
    mission: "Create jobs for homeless while cleaning and maintaining public spaces.",
    impact: "Employs former homeless to clear litter, cut grass, and fix park fencing. Supports city services by keeping Ward 88 clean and safe.",
    featured: true,
    image: "/images/charity/placeholder-community.svg"
  },
  {
    id: "future-city-fourways",
    name: "Future City Fourways",
    category: "Community Development",
    location: "Fourways (Douglasdale & Lonehill area)",
    contact: {
      email: "info@futurecityfourways.co.za",
      phone: "074 252 8877",
      website: null
    },
    mission: "Uplift Fourways through anti-grime and anti-crime initiatives led by community.",
    impact: "Launched street clean-up programme clearing tons of litter. Created jobs for local residents and expanded safety patrols in Fourways.",
    featured: false,
    image: "/images/charity/placeholder-community.svg"
  },
  {
    id: "gift-of-the-givers",
    name: "Gift of the Givers",
    category: "Community Development",
    location: "Robertville, JHB (HQ in Pietermaritzburg)",
    contact: {
      email: "info@giftofthegivers.org",
      phone: "0800 786 911",
      website: "giftofthegivers.org"
    },
    mission: "Largest African disaster response NGO providing impartial humanitarian aid in crises irrespective of race or religion.",
    impact: "Delivered R4.5 billion in life-saving aid since 1992, across 45+ countries including SA. Notable for disaster relief and community projects.",
    featured: true,
    image: "/images/charity/placeholder-community.svg"
  },
  {
    id: "one-small-act",
    name: "One Small Act of Kindness",
    category: "Homeless Support",
    location: "Bordeaux, Randburg",
    contact: {
      email: "info@onesmallactofkindness.org.za",
      phone: "082 513 2042",
      website: null
    },
    mission: "Provides shelter, food and support to the homeless and destitute.",
    impact: "Serves ~510 plates of food daily across porridge, sandwiches, and meals. Feeds children in foster care and local schools, and supports 30 men with shelter.",
    featured: false,
    image: "/images/charity/placeholder-homeless.svg"
  },
  {
    id: "spca-randburg",
    name: "SPCA Randburg",
    category: "Animal Welfare",
    location: "229 Northumberland Ave, Northriding, Randburg",
    contact: {
      email: "admin@spca-rbg.org.za",
      phone: "011 462 1610",
      website: "spca-rbg.org.za"
    },
    mission: "Prevent cruelty to animals and provide shelter for stray, abandoned, and abused animals.",
    impact: "Investigates animal cruelty complaints in Randburg area. Operates a kennel for adoptions and a small clinic. Offers public education on pet care.",
    featured: true,
    image: "/images/charity/placeholder-animal.svg"
  },
  {
    id: "spca-sandton",
    name: "SPCA Sandton & Eastern Metro",
    category: "Animal Welfare",
    location: "9th Street, Marlboro Gardens, Sandton",
    contact: {
      email: "info@sandtonspca.org.za",
      phone: "011 444 7730",
      website: "sandtonspca.org.za"
    },
    mission: "Prevention of animal cruelty in Sandton & surrounding areas. Rescue, rehabilitate and rehome lost, abandoned or abused pets.",
    impact: "Runs mobile clinics in Alexandra and other townships. Handles ~hundreds of cases yearly, covering wealthy and impoverished areas alike.",
    featured: false,
    image: "/images/charity/placeholder-animal.svg"
  },
  {
    id: "kitty-puppy-haven",
    name: "Kitty and Puppy Haven",
    category: "Animal Welfare",
    location: "37 Modderfontein Rd, President Park, Midrand",
    contact: {
      email: "info@kittyhaven.co.za",
      phone: "083 387 1012",
      website: "kittypuppyhaven.org.za"
    },
    mission: "A pro-life animal sanctuary rescuing neglected, abused and abandoned cats and dogs.",
    impact: "Rehomes ~1,200 animals per year. Provides extensive veterinary care to nurse animals back to health. Runs outreach pet care days and sterilisation drives.",
    featured: false,
    image: "/images/charity/placeholder-animal.svg"
  },
  {
    id: "mother-of-peace",
    name: "Mother of Peace Johannesburg",
    category: "Child Welfare",
    location: "457A Valley Road, Northriding, Randburg",
    contact: {
      email: null,
      phone: null,
      website: "motherofpeacejhb.co.za"
    },
    mission: "Operates a foster-care community for orphans and vulnerable children in a family-like environment.",
    impact: "Cares for ~30 children on site. Children live in small group homes with house parents, recreating a family structure. Provides schooling support and life skills.",
    featured: true,
    image: "/images/charity/placeholder-children.svg"
  },
  {
    id: "gift-a-child",
    name: "Gift a Child Children's Home",
    category: "Child Welfare",
    location: "Franklin Roosevelt Park, Randburg",
    contact: {
      email: null,
      phone: null,
      website: null
    },
    mission: "A fully registered children's home offering love, care and shelter to abandoned, abused, and HIV-positive children.",
    impact: "Provides 24/7 care in a home setting. Helps children heal and thrive, with many success stories of kids overcoming trauma.",
    featured: false,
    image: "/images/charity/placeholder-children.svg"
  },
  {
    id: "oasis-haven",
    name: "Oasis Haven",
    category: "Child Welfare",
    location: "Robin Hills, Randburg",
    contact: {
      email: "info@oasishaven.org",
      phone: "010 010 5500",
      website: "oasishaven.org"
    },
    mission: "A Child & Youth Care Centre that provides family-based care for orphaned and abandoned children.",
    impact: "Since 2002, has cared for dozens of vulnerable children in small home units. Emphasises breaking the cycle of abuse/neglect by loving them as our own.",
    featured: false,
    image: "/images/charity/placeholder-children.svg"
  },
  {
    id: "rand-aid",
    name: "Rand Aid Association",
    category: "Elderly Care",
    location: "Headquarters: Lyndhurst, Johannesburg",
    contact: {
      email: "info@randaid.co.za",
      phone: "011 882 2510",
      website: "randaid.co.za"
    },
    mission: "NPO offering accommodation in retirement villages and frail-care centres, and running rehab programmes.",
    impact: "Operates multiple facilities: Tarentaal Village (subsidised flats), Ron Smith Centre (frail care), Thembalami Care Centre (for disadvantaged seniors) and Wedge Gardens Treatment Centre.",
    featured: false,
    image: "/images/charity/placeholder-elderly.svg"
  },
  {
    id: "garden-village",
    name: "Garden Village (Methodist Homes)",
    category: "Elderly Care",
    location: "Garden Rd, Bordeaux, Randburg",
    contact: {
      email: null,
      phone: "068 668 4152",
      website: "mha.co.za"
    },
    mission: "A long-established retirement home and frail care facility for seniors, providing compassionate care and comfortable accommodation to the elderly for over 50 years.",
    impact: "Home to dozens of elderly residents in the Randburg area. Known for a vibrant community life – e.g., organising events like Mardi Gras parties for residents.",
    featured: true,
    image: "/images/charity/placeholder-elderly.svg"
  },
  {
    id: "rare-diseases-sa",
    name: "Rare Diseases SA (RDSA)",
    category: "Disease Support & Research",
    location: "Midrand (National office)",
    contact: {
      email: "info@rarediseases.co.za",
      phone: "0860 Rare 05",
      website: "rarediseases.co.za"
    },
    mission: "Advocates for the ~1 in 15 South Africans living with rare diseases or congenital disorders.",
    impact: "Supports rare disease patients via patient registry, navigation to specialists, and help with funding treatment. Organises Rare Disease Day events and public campaigns.",
    featured: false,
    image: "/images/charity/placeholder-health.svg"
  },
  {
    id: "cansa",
    name: "CANSA (Cancer Association of SA)",
    category: "Disease Support & Research",
    location: "(Gauteng Care Centre) Edenvale, JHB",
    contact: {
      email: "info@cansa.org.za",
      phone: "0800 22 66 22",
      website: "cansa.org.za"
    },
    mission: "A national health charity (est. 1931) dedicated to fighting cancer and supporting those affected.",
    impact: "Operates CANSA Care Centres across Gauteng offering screenings, counselling and a toll-free helpline. Runs the iconic CANSA Shavathon fundraising campaign nationwide.",
    featured: false,
    image: "/images/charity/placeholder-health.svg"
  },
  {
    id: "choc",
    name: "CHOC Childhood Cancer Foundation",
    category: "Disease Support & Research",
    location: "Saxonwold, Johannesburg (Nat'l Office)",
    contact: {
      email: "headoffice@choc.org.za",
      phone: "086 111 3500",
      website: "choc.org.za"
    },
    mission: "Provides comprehensive support to children with cancer or life-threatening blood disorders, and their families.",
    impact: "CHOC runs 13 accommodation facilities near pediatric oncology units, offering families free lodging during treatment. Offers emotional support via social workers and support groups.",
    featured: true,
    image: "/images/charity/placeholder-health.svg"
  },
  {
    id: "mes",
    name: "MES (Mould Empower Serve)",
    category: "Homeless Support",
    location: "Braamfontein and Hillbrow, Johannesburg",
    contact: {
      email: "jhb@mes.org.za",
      phone: "011 725 6531",
      website: "mes.org.za"
    },
    mission: "Urban homelessness intervention organisation focused on Changing the heart of the city.",
    impact: "In Johannesburg, MES runs overnight shelters, soup kitchens, and vocational programmes that assist thousands annually. The Hillbrow Safe Space and Braamfontein shelters accommodate hundreds of homeless.",
    featured: false,
    image: "/images/charity/placeholder-homeless.svg"
  },
  {
    id: "parkrun",
    name: "Parkrun South Africa",
    category: "Community Initiatives",
    location: "Various parks (e.g. Delta Park, Bryanston, Midrand)",
    contact: {
      email: "office@parkrun.co.za",
      phone: null,
      website: "parkrun.co.za"
    },
    mission: "A global charity that organises free, weekly 5km community runs/walks in public parks.",
    impact: "Local examples: Delta Parkrun (Victory Park) with scenic trails; Golden Harvest Parkrun (Northriding) in a nature reserve; Braamfontein Parkrun (at Zoo Lake) etc. Each event draws hundred-plus participants weekly.",
    featured: false,
    image: "/images/charity/placeholder-community.svg"
  }
]; 