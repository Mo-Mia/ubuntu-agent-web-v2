import Link from "next/link"
import Image from "next/image"
import { Calendar, Home, ExternalLink } from "lucide-react"

import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import { HeroImage } from "@/components/ui/HeroImage"

export const metadata = {
  title: "Property Listings | The Ubuntu Agent",
  description:
    "Browse Gary's current property listings in Johannesburg through his eXp Realty agent profile - specialising in Fourways, Dainfern, North Riding, and Midrand.",
}

export default function ListingsPage() {
  return (
    <>
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image 
            src="/images/backgrounds/johannesburg-skyline.jpg" 
            alt="Johannesburg skyline"
            fill
            className="object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg">
              <span className="inline-block text-gold font-medium mb-2">Available Properties</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Property Listings
              </h1>
              <p className="text-gray-700 mb-6">
                Browse Gary's current property listings through his eXp Realty agent profile, specialising in Fourways, Dainfern, North Riding, and Midrand.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.expsouthafrica.co.za/agents/80314" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary flex items-center gap-2"
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
            <p className="text-white mb-8">
              Whether you are looking to buy or sell property in North Johannesburg, The Ubuntu Agent has the expertise and local knowledge to help you navigate the market successfully.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Gary
              </Link>
              <Link href="/services" className="btn-tertiary bg-transparent border-white text-white hover:bg-white/20">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
