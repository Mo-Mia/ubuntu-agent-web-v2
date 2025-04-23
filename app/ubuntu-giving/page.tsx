import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { HeroImage } from '@/components/ui/HeroImage'
import SectionHeading from '@/components/section-heading'
import GivingProcess from '@/components/giving-process'
import CharityCard from '@/components/charity-card'
import CharitableCalculator from '@/components/charitable-calculator'
import FAQ from '@/components/faq'
import CharitySection from '@/components/charity/CharitySection'
import { charities } from "@/lib/data/charities"

export const metadata: Metadata = {
  title: "Ubuntu Giving Programme: Making a Difference Together | The Ubuntu Agent",
  description:
    "Learn about the Ubuntu Giving Programme where 5% of commission is donated to local charities chosen by home buyers in Johannesburg, South Africa.",
}

const faqItems = [
  {
    question: "What is Ubuntu and why is it important?",
    answer:
      "Ubuntu is a South African philosophy that means 'I am because we are.' It emphasises our interconnectedness and shared humanity. In real estate, I apply this by ensuring each transaction contributes positively to our community."
  },
  {
    question: "How does the Ubuntu Giving Programme work?",
    answer:
      "Through the Ubuntu Giving Programme, 5% of my commission on every transaction (10% if my commission is capped) is donated to a charitable cause of your choice. You can select from our partner organisations or nominate another registered non-profit organisation."
  },
  {
    question: "Which charities can I choose from?",
    answer:
      "You can select from our list of vetted charity partners, which ensures the organisations are registered, transparent, and making a real impact. If you have another charity in mind, we can evaluate it to ensure it meets our criteria for inclusion in the programme."
  },
  {
    question: "Is there any additional cost to me as a client?",
    answer:
      "Absolutely not. The donation comes directly from my commission, not from your pocket. My services and fees remain competitive with other agents, but with the added benefit of community impact."
  },
  {
    question: "How do I know the donation was made?",
    answer:
      "Transparency is central to the Ubuntu Giving Programme. You'll receive documentation of the donation made in your name, and we maintain public records of all donations on our impact tracking page."
  },
]

export default function UbuntuGivingPage() {
  // Get featured charities for the highlight section
  const featuredCharities = charities.filter(charity => charity.featured).slice(0, 3);
  
  // Format charities for compatibility with current CharityCard component
  const formattedCharities = featuredCharities.map(charity => ({
    name: charity.name,
    description: charity.mission,
    imageSrc: charity.image,
    category: charity.category,
    link: `/ubuntu-giving/charity-selection?highlight=${charity.id}`,
  }));

  return (
    <>
      <section className="relative">
        <HeroImage 
          src="/images/backgrounds/johannesburg-skyline.jpg" 
          alt="Ubuntu Giving Programme"
          height="h-[600px]"
          overlay
          priority={true}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg">
              <span className="inline-block text-gold font-medium mb-2">About</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Ubuntu Giving Programme
              </h1>
              <p className="text-gray-700 mb-6">
                Making a difference through real estate. With every transaction, 5% of commission goes to a charity of your choice.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#process" className="btn-primary">
                  How It Works
                </Link>
                <Link href="#charity-partners" className="btn-secondary">
                  Charity Partners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="About"
                title="The Ubuntu Giving Programme: Making a Difference Together"
                alignment="left"
              />
              <p className="text-body mb-4">
                Ubuntu is a South African philosophy that means "I am because we are." The Ubuntu
                Giving Programme brings this philosophy to real estate by connecting each property transaction to positive
                community impact.
              </p>
              <p className="text-body mb-6">
                With every home bought or sold, 5% of my commission (10% if capped) goes to a
                charity of your choice. This approach costs you nothing extra but makes your real
                estate transaction more meaningful.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#process" className="btn-primary">
                  How It Works
                </Link>
                <Link href="#charity-partners" className="btn-secondary">
                  Our Charity Partners
                </Link>
                <Link href="#impact" className="btn-tertiary">
                  Track Our Impact
                </Link>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                  src="/images/ubuntu/ubuntu-philosophy.svg"
                  alt="Ubuntu philosophy visualization"
                fill
                className="object-cover"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Process"
            title="How the Ubuntu Giving Programme Works"
            description="Making a difference is simple and transparent."
            alignment="center"
          />

          <GivingProcess />

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">
              Start Your Ubuntu Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Charity Partners Section */}
      <section id="charities" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Current Impact"
            title="Charities We've Supported"
            description="Through the Ubuntu Giving Programme, we're already making an impact with these organisations."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <CharityCard
              name="Four Paws"
              description="Animal welfare organisation dedicated to saving animals in need."
              imageSrc="/images/charity/logos/four-paws-logo.svg"
              websiteUrl="https://www.four-paws.org.za/"
            />
            <CharityCard
              name="CHOC"
              description="Childhood Cancer Foundation supporting children and families affected by cancer."
              imageSrc="/images/charity/logos/choc-logo.png"
              websiteUrl="https://choc.org.za/"
            />
            <CharityCard
              name="Breadline Africa"
              description="Transforming the lives of children through infrastructure projects."
              imageSrc="/images/charity/logos/breadline-africa-logo.png"
              websiteUrl="https://breadlineafrica.org/"
            />
          </div>
        </div>
      </section>

      {/* Comprehensive Charity Partners Section */}
      <section id="charity-partners" className="bg-white">
        <CharitySection />
      </section>

      {/* Impact Tracking Section */}
      <section id="impact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Impact"
            title="Tracking Our Giving"
            description="As the Ubuntu Giving Programme grows, we'll provide transparent reporting on donations and impact."
            alignment="center"
          />

            <div className="text-center max-w-2xl mx-auto">
            <p className="text-body mb-6">
              This section will include:
            </p>
            <ul className="list-disc text-left pl-8 mb-6 space-y-2">
              <li>Total donations made through the programme</li>
              <li>Breakdown by charity category</li>
              <li>Impact stories from beneficiary organisations</li>
              <li>Monthly and yearly donation totals</li>
              <li>Details of which organisations have been supported</li>
              <li>Real estate transaction volume connected to charitable giving</li>
            </ul>
            <p className="text-body mb-8">
              The dashboard will also feature:
            </p>
            <ul className="list-disc text-left pl-8 mb-6 space-y-2">
              <li>Interactive giving metrics</li>
              <li>Recognition for clients who participate in the programme</li>
              <li>Testimonials from charity partners</li>
            </ul>
            <p className="text-body mb-6 italic">
              As the programme expands, this section will be updated with actual donation data and impact stories.
                  </p>
                </div>
              </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Discuss the Programme</h2>
              <p className="text-body-lg mb-4">
                Interested in learning more about how the Ubuntu Giving Programme works with your
                real estate transaction?
              </p>
              <p className="text-body-lg mb-6">
                Contact me today to discuss your property goals and how we can make a difference
                together. When your transaction is complete, you'll receive a Certificate
                of Giving acknowledging your contribution through the Ubuntu Giving Programme.
              </p>
              <Link href="/contact" className="btn-primary">
                Get In Touch
              </Link>
            </div>
            <div>
              <CharitableCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Questions"
            title="Frequently Asked Questions"
            description="Learn more about how the Ubuntu Giving Programme works."
            alignment="center"
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>
    </>
  )
}