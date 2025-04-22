import Link from "next/link"

import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import BlogCard from "@/components/blog-card"

export const metadata = {
  title: "Resources & Blog | The Ubuntu Agent",
  description: "Explore valuable resources and insights about real estate in Johannesburg, South Africa, and the Ubuntu philosophy from Gary Berkowitz, The Ubuntu Agent.",
};

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        title="Resources & Blog"
        subtitle="Coming Soon"
        description="Stay informed with real estate tips and insights from The Ubuntu Agent."
        imageSrc="/images/resources-bg.jpg"
        imageAlt="Reading real estate resources"
        height="medium"
        priority={false}
      />

      {/* Resources Coming Soon Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Coming Soon"
            title="Resource Library In Development"
            description="I'm working on building a valuable collection of resources to help with your real estate journey."
            alignment="center"
          />

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-body mb-6">
                The resource library is currently under development and will soon feature helpful articles 
                about the Johannesburg property market, buying and selling tips, and information about 
                the Ubuntu philosophy.
              </p>
              
              <p className="text-body mb-6">
                In the meantime, feel free to contact me directly with any questions about real estate 
                in Fourways, Dainfern, North Riding, and Midrand areas.
              </p>

              <div className="flex justify-center">
                <Link href="/contact" className="btn-primary">
                  Contact for Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Resources Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Future Content"
            title="Planned Resource Categories"
            description="These are the topics I plan to cover in upcoming resources."
            alignment="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-3">Buyer Resources</h3>
              <p className="text-body-sm mb-4">
                Tips and guidance for home buyers in the North Johannesburg area, including neighborhood guides, 
                negotiation strategies, and the home buying process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-3">Seller Resources</h3>
              <p className="text-body-sm mb-4">
                Information to help sellers maximize their property's value, prepare homes for sale, 
                and understand the selling process in the current market.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-3">Ubuntu Philosophy</h3>
              <p className="text-body-sm mb-4">
                Insights into how the Ubuntu philosophy of "I am because we are" applies to real estate 
                and creates meaningful community connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Have Questions?</h2>
            <p className="text-body-lg mb-8">
              While the resource library is being developed, I'm happy to answer any questions you might have about real estate in the North Johannesburg area.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Gary
              </Link>
              <Link href="/about" className="btn-tertiary bg-transparent border-white text-white hover:bg-white/20">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
