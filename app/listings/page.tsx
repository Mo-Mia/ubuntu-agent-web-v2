import Link from "next/link"
import Image from "next/image"
import { Calendar, Home, ExternalLink } from "lucide-react"

import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"

export const metadata = {
  title: "Property Listings | The Ubuntu Agent",
  description:
    "Browse Gary's current property listings in Johannesburg through his eXp Realty agent profile - specialising in Fourways, Dainfern, North Riding, and Midrand.",
}

export default function ListingsPage() {
  return (
    <>
      <HeroSection
        title="Property Listings"
        subtitle="Available Properties"
        description="Browse Gary's current property listings through his eXp Realty agent profile, specialising in Fourways, Dainfern, North Riding, and Midrand."
        ctaText="View Current Listings"
        ctaLink="https://www.expsouthafrica.co.za/agents/80314"
        secondaryCtaText="Contact for Property Inquiries"
        secondaryCtaLink="/contact"
        imageSrc="/images/backgrounds/modern-homes-johannesburg.svg"
        imageAlt="Modern homes in Johannesburg"
        height="medium"
        ctaExternal={true}
      />

      {/* Available Properties Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Available Properties"
            title="Current Property Listings"
            description="Browse Gary's current property listings via his eXp Realty agent profile."
            alignment="center"
          />

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <div className="relative h-32 w-48">
                  <Image src="/images/backgrounds/property-search-illustration.svg" alt="Property search illustration" fill className="object-contain" />
                </div>
              </div>

              <p className="text-body mb-6">
                Gary specialises in residential properties in Fourways, Dainfern, North Riding, and Midrand areas. 
                View all of Gary's current property listings on his official eXp Realty agent profile.
              </p>

              <p className="text-body mb-6">
                You can browse available properties, view details and photos, or contact Gary directly to discuss specific properties.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a 
                  href="https://www.expsouthafrica.co.za/agents/80314" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  View Current Listings <ExternalLink className="h-4 w-4" />
                </a>
                <Link href="/contact" className="btn-secondary">
                  Contact for Property Inquiries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Looking to Buy or Sell?</h2>
            <p className="text-body-lg mb-8">
              Contact Gary directly to discuss your property needs in Fourways, Dainfern, North Riding, and Midrand. Experience personalised service with the Ubuntu philosophy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Gary
              </Link>
              <a 
                href="https://www.expsouthafrica.co.za/agents/80314" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-tertiary bg-transparent border-white text-white hover:bg-white/20 flex items-center gap-2"
              >
                View Listings <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
