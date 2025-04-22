import Image from "next/image"
import Link from "next/link"
import { Home, Building, Search, FileText, PiggyBank, Users, Map, Clock, Heart } from "lucide-react"

import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import ServiceCard from "@/components/service-card"
import AreaMap from "@/components/area-map"

export const metadata = {
  title: "Real Estate Services | The Ubuntu Agent",
  description:
    "Comprehensive real estate services for buyers and sellers in Johannesburg, South Africa with the Ubuntu Agent.",
}

export default function ServicesPage() {
  const buyerServices = [
    {
      title: "Market Analysis",
      description: "Thorough market analysis to help you find the best property at the right price.",
      icon: Search,
      link: "/services#buyers",
    },
    {
      title: "Money Saving Strategies",
      description: "Two strategies to save you money: thorough market analysis and expert negotiation.",
      icon: PiggyBank,
      link: "/services#buyers",
    },
    {
      title: "Expert Negotiation",
      description: "Skilled negotiation to secure the best possible price for your new home.",
      icon: Users,
      link: "/services#buyers",
    },
    {
      title: "Charitable Giving",
      description: "Direct 5% of commission (10% if capped) to a charity of your choice.",
      icon: Heart,
      link: "/services#buyers",
    },
  ]

  const sellerServices = [
    {
      title: "Offer Maximization",
      description: "Strategic approach to increase offers on your property and maximize your sale price.",
      icon: Building,
      link: "/services#sellers",
    },
    {
      title: "Agent Collaboration",
      description: "Working with a network of agents to ensure wide exposure for your property.",
      icon: Users,
      link: "/services#sellers",
    },
    {
      title: "Market Knowledge",
      description: "Specialized knowledge of the North Johannesburg property market.",
      icon: Map,
      link: "/services#sellers",
    },
    {
      title: "Charitable Giving",
      description: "Direct 5% of commission (10% if capped) to a charity of your choice.",
      icon: Heart,
      link: "/services#sellers",
    },
  ]

  return (
    <>
      <HeroSection
        title="Real Estate Services"
        subtitle="Professional Expertise"
        description="Comprehensive services for buyers and sellers with a community impact component."
        imageSrc="/images/services-bg.jpg"
        imageAlt="Modern home in Johannesburg"
        height="medium"
      />

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="The Ubuntu Agent Approach"
                title="Real Estate Services with Real Impact"
                description="Professional expertise combined with community-focused values."
              />

              <p className="text-body mb-4">
                With 10 years of experience in North Johannesburg real estate, I specialize in residential sales and rentals in 
                Fourways, Dainfern, North Riding, and Midrand, combining professional expertise with a commitment to community 
                impact through the Ubuntu Giving Program.
              </p>

              <p className="text-body mb-4">
                My approach focuses on saving money for buyers through thorough market analysis and expert negotiation, 
                while helping sellers maximize offers through strategic approaches and collaboration with other agents.
              </p>

              <p className="text-body mb-6">
                Every transaction includes the opportunity to direct 5% of my commission (10% if capped) to charities like 
                Four Paws, CHOC, and Breadline, creating positive community change through your property transaction.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Schedule a Consultation
                </Link>
                <Link href="/ubuntu-giving" className="btn-tertiary">
                  Ubuntu Giving Program
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/services/property-viewing.jpg"
                alt="North Johannesburg property"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Services Section */}
      <section id="buyers" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="For Home Buyers"
            title="Finding Your Perfect Home"
            description="Comprehensive support throughout your home buying journey."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {buyerServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/services/happy-homebuyers.jpg"
                alt="Happy home buyers in Johannesburg"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="heading-md mb-4">The Buyer's Journey with The Ubuntu Agent</h3>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-lg mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Initial Consultation</h4>
                    <p className="text-body-sm text-muted-foreground">
                      We'll discuss your needs, preferences, budget, and timeline to create a personalized home buying
                      strategy.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-lg mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Property Search & Viewings</h4>
                    <p className="text-body-sm text-muted-foreground">
                      Receive curated property options that match your criteria, with guided viewings at your
                      convenience.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-lg mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Offer & Negotiation</h4>
                    <p className="text-body-sm text-muted-foreground">
                      Expert guidance on making competitive offers and skilled negotiation to secure the best terms.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-lg mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Transaction Management</h4>
                    <p className="text-body-sm text-muted-foreground">
                      Comprehensive support through inspections, financing, and all paperwork until closing.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-lg mr-4">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Ubuntu Giving Selection</h4>
                    <p className="text-body-sm text-muted-foreground">
                      Choose a local charity to receive 5% of the commission, creating community impact through your
                      purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Services Section */}
      <section id="sellers" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="For Home Sellers"
            title="Maximizing Your Property's Value"
            description="Strategic marketing and expert guidance throughout the selling process."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {sellerServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                variant="outlined"
              />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="heading-md mb-4">The Seller's Journey with The Ubuntu Agent</h3>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Property Evaluation</h4>
                    <p className="text-body-sm text-muted-foreground">
                      Comprehensive market analysis and property assessment to determine optimal pricing strategy.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Preparation & Staging</h4>
                    <p className="text-body-sm text-muted-foreground">
                      Professional advice on preparing your property to appeal to target buyers and maximize value.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Marketing Campaign</h4>
                    <p className="text-body-sm text-muted-foreground">
                      Strategic, multi-channel marketing to showcase your property to qualified potential buyers.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Offer Management & Negotiation</h4>
                    <p className="text-body-sm text-muted-foreground">
                      Expert evaluation of offers and skilled negotiation to secure the best terms and price.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg mr-4">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Ubuntu Giving Selection</h4>
                    <p className="text-body-sm text-muted-foreground">
                      Choose a local charity to receive 5% of the commission, creating a lasting legacy in your
                      community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/services/house-keys.jpg"
                alt="Home selling process in Johannesburg"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section id="areas" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Service Areas"
            title="North Johannesburg Areas"
            description="Specialized service in select North Johannesburg neighborhoods."
            alignment="center"
          />

          <div className="mt-12">
            <AreaMap />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4">Fourways</h3>
              <p className="text-body-sm mb-4">
                A vibrant commercial and residential hub with diverse property options ranging from apartments to luxury estates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Map className="h-4 w-4 text-gold mr-2" />
                  <span>Residential sales and rentals</span>
                </li>
                <li className="flex items-center">
                  <Map className="h-4 w-4 text-gold mr-2" />
                  <span>Family homes and apartments</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4">Dainfern</h3>
              <p className="text-body-sm mb-4">
                Prestigious golf estate offering secure living with luxury homes and excellent amenities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Map className="h-4 w-4 text-gold mr-2" />
                  <span>Luxury properties</span>
                </li>
                <li className="flex items-center">
                  <Map className="h-4 w-4 text-gold mr-2" />
                  <span>Estate living specialist</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4">North Riding</h3>
              <p className="text-body-sm mb-4">
                Growing area with a mix of townhouse complexes, security estates, and freestanding homes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Map className="h-4 w-4 text-gold mr-2" />
                  <span>Residential sales</span>
                </li>
                <li className="flex items-center">
                  <Map className="h-4 w-4 text-gold mr-2" />
                  <span>Security complexes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4">Midrand</h3>
              <p className="text-body-sm mb-4">
                Rapidly developing area with business parks, residential estates, and diverse housing options.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Map className="h-4 w-4 text-gold mr-2" />
                  <span>Residential properties</span>
                </li>
                <li className="flex items-center">
                  <Map className="h-4 w-4 text-gold mr-2" />
                  <span>Growing family neighborhoods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Process"
            title="The Ubuntu Agent Service Timeline"
            description="A structured approach to ensure a smooth, successful real estate experience."
            alignment="center"
          />

          <div className="mt-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gold/30 transform md:translate-x-[-50%] hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="heading-sm mb-2">Initial Consultation</h3>
                  <p className="text-body-sm text-muted-foreground">
                    We begin with a detailed discussion of your real estate goals, timeline, and specific needs. This
                    helps us create a personalized strategy tailored to your unique situation.
                  </p>
                </div>

                <div className="relative order-1 md:order-2">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-20px] md:left-[-36px] top-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center hidden md:flex">
                    <span className="text-navy font-bold">1</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex md:hidden items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center mr-2">
                        <span className="text-navy font-bold">1</span>
                      </div>
                      <h3 className="heading-sm">Initial Consultation</h3>
                    </div>
                    <ul className="space-y-2 text-body-sm">
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Understand your property goals and timeline</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Discuss budget considerations and financing options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Introduce the Ubuntu Giving Program</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-20px] md:left-[-36px] top-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center hidden md:flex">
                    <span className="text-navy font-bold">2</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex md:hidden items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center mr-2">
                        <span className="text-navy font-bold">2</span>
                      </div>
                      <h3 className="heading-sm">Strategy Development</h3>
                    </div>
                    <ul className="space-y-2 text-body-sm">
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Create a customized buying or selling plan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Conduct market analysis and property valuation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Set realistic expectations and timelines</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="md:text-left">
                  <h3 className="heading-sm mb-2">Strategy Development</h3>
                  <p className="text-body-sm text-muted-foreground">
                    Based on our initial consultation, we develop a comprehensive strategy that includes market
                    analysis, pricing recommendations, and a detailed action plan to achieve your real estate goals.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="heading-sm mb-2">Active Phase</h3>
                  <p className="text-body-sm text-muted-foreground">
                    This is where the main activity happens—property searches and viewings for buyers, or marketing and
                    showings for sellers. Throughout this phase, we provide regular updates and guidance.
                  </p>
                </div>

                <div className="relative order-1 md:order-2">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-20px] md:left-[-36px] top-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center hidden md:flex">
                    <span className="text-navy font-bold">3</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex md:hidden items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center mr-2">
                        <span className="text-navy font-bold">3</span>
                      </div>
                      <h3 className="heading-sm">Active Phase</h3>
                    </div>
                    <ul className="space-y-2 text-body-sm">
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>For buyers: Property searches and viewings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>For sellers: Marketing, showings, and open houses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Regular communication and progress updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-20px] md:left-[-36px] top-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center hidden md:flex">
                    <span className="text-navy font-bold">4</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex md:hidden items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center mr-2">
                        <span className="text-navy font-bold">4</span>
                      </div>
                      <h3 className="heading-sm">Negotiation & Offer Management</h3>
                    </div>
                    <ul className="space-y-2 text-body-sm">
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Expert negotiation of terms and price</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Thorough review of all offer documents</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Clear explanation of contractual obligations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="md:text-left">
                  <h3 className="heading-sm mb-2">Negotiation & Offer Management</h3>
                  <p className="text-body-sm text-muted-foreground">
                    When offers are made or received, we provide expert negotiation to secure the best possible terms
                    and price. We carefully review all documents and explain the implications of each term.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="heading-sm mb-2">Transaction Coordination</h3>
                  <p className="text-body-sm text-muted-foreground">
                    Once an offer is accepted, we manage all aspects of the transaction process, from inspections and
                    financing to paperwork and legal requirements, ensuring a smooth path to closing.
                  </p>
                </div>

                <div className="relative order-1 md:order-2">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-20px] md:left-[-36px] top-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center hidden md:flex">
                    <span className="text-navy font-bold">5</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex md:hidden items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center mr-2">
                        <span className="text-navy font-bold">5</span>
                      </div>
                      <h3 className="heading-sm">Transaction Coordination</h3>
                    </div>
                    <ul className="space-y-2 text-body-sm">
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Coordination of inspections and appraisals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Management of financing and legal requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Preparation for a smooth closing process</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-20px] md:left-[-36px] top-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center hidden md:flex">
                    <span className="text-navy font-bold">6</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex md:hidden items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center mr-2">
                        <span className="text-navy font-bold">6</span>
                      </div>
                      <h3 className="heading-sm">Closing & Ubuntu Giving</h3>
                    </div>
                    <ul className="space-y-2 text-body-sm">
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Representation at closing to ensure all details are addressed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Selection of charity for Ubuntu Giving donation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold font-bold mr-2">•</span>
                        <span>Continued support after the transaction is complete</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="md:text-left">
                  <h3 className="heading-sm mb-2">Closing & Ubuntu Giving</h3>
                  <p className="text-body-sm text-muted-foreground">
                    We attend the closing to ensure all details are properly addressed. After closing, you'll select a
                    charity to receive the Ubuntu Giving donation, creating a positive community impact through your
                    transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to Begin Your Real Estate Journey?</h2>
            <p className="text-body-lg mb-8">
              Whether you're buying, selling, or just exploring your options in North Johannesburg, let's connect to discuss how The Ubuntu Agent can help you achieve your real estate goals while making a positive community impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
              <Link href="/about" className="btn-tertiary bg-transparent border-white text-white hover:bg-white/20">
                Learn More About Gary
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
