import Link from "next/link"
import Image from "next/image"
import { Calendar, Home, ExternalLink } from "lucide-react"

import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"

export const metadata = {
  title: "Property Listings | The Ubuntu Agent",
  description:
    "Browse property listings in Johannesburg with The Ubuntu Agent - real estate with a charitable giving component.",
}

export default function ListingsPage() {
  return (
    <>
      <HeroSection
        title="Property Listings"
        subtitle="Coming Soon"
        description="Our property listings section is currently under development. Check back soon for available properties in Johannesburg."
        ctaText="Contact for Property Inquiries"
        ctaLink="/contact"
        secondaryCtaText="Learn About Our Services"
        secondaryCtaLink="/services"
        imageSrc="/images/backgrounds/modern-homes-johannesburg.svg"
        imageAlt="Modern homes in Johannesburg"
        height="medium"
      />

      {/* Simple Coming Soon Section */}
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
                While our integrated property listings section is being developed, you can view Gary's current listings on his eXp Realty profile.
              </p>

              <p className="text-body mb-6">
                View all of Gary's active property listings by clicking the button below, or contact Gary directly to discuss your specific property needs.
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
              <Link href="/services" className="btn-tertiary bg-transparent border-white text-white hover:bg-white/20">
                Learn About Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
