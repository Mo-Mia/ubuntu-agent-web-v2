import Link from "next/link"
import Image from "next/image"
import { Calendar, Home } from "lucide-react"

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
            subtitle="Coming Soon"
            title="Property Listings Coming Soon"
            description="Our property listings feature is currently in development."
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
                Gary specializes in residential properties in Fourways, Dainfern, North Riding, and Midrand areas. 
                While the property listings section is being developed, Gary can help you find your ideal home through personalized service.
              </p>

              <p className="text-body mb-6">
                Contact Gary directly to discuss your property needs, whether you're looking to buy, sell, or rent in the North Johannesburg area.
              </p>

              <div className="flex justify-center">
                <Link href="/contact" className="btn-primary">
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
              Contact Gary directly to discuss your property needs in Fourways, Dainfern, North Riding, and Midrand. Experience personalized service with the Ubuntu philosophy.
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
