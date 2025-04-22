import Image from "next/image"
import Link from "next/link"

import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import GivingProcess from "@/components/giving-process"
import CharityCard from "@/components/charity-card"
import CharitableCalculator from "@/components/charitable-calculator"
import FaqSection from "@/components/faq-section"
import { charities } from "@/lib/data/charities"

export const metadata = {
  title: "Ubuntu Giving Program | The Ubuntu Agent",
  description:
    "Learn about the Ubuntu Giving Program where 5% of commission is donated to local charities chosen by home buyers in Johannesburg, South Africa.",
}

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

  const faqs = [
    {
      question: "How does the Ubuntu Giving Program work?",
      answer:
        "When you buy or sell a property with The Ubuntu Agent, 5% of the commission (10% if the agent is capped) is donated to a local charity of your choice. You can select from our list of vetted charity partners or nominate another registered non-profit organization.",
    },
    {
      question: "Can I choose any charity for the donation?",
      answer:
        "You can select from our list of vetted charity partners, which ensures the organizations are registered, transparent, and making a real impact. If you have another charity in mind, we can evaluate it to ensure it meets our criteria for inclusion in the program.",
    },
    {
      question: "Is there any additional cost to me as a buyer or seller?",
      answer:
        "No, there is absolutely no additional cost to you. The donation comes directly from The Ubuntu Agent's commission, not from your pocket. You receive the same professional real estate service while also making a positive community impact.",
    },
    {
      question: "How much is typically donated per transaction?",
      answer:
        "The donation amount varies based on the property value and commission structure. For example, on a R2 million property with a 5% commission, the donation would be approximately R5,000. You can use our Charitable Calculator to estimate the donation for your specific transaction.",
    },
    {
      question: "Do I get a tax benefit from the donation?",
      answer:
        "Since the donation comes from The Ubuntu Agent's commission, the tax receipt goes to the agent. However, you receive recognition for directing the funds and will receive impact reports showing how your chosen charity used the donation.",
    },
    {
      question: "Can I split my donation between multiple charities?",
      answer:
        "Yes, you can divide your donation among up to three different charity partners, allowing you to support multiple causes that matter to you.",
    },
    {
      question: "How do I know the money actually reaches the charity?",
      answer:
        "Transparency is central to the Ubuntu Giving Program. You'll receive documentation of the donation made in your name, and we maintain public records of all donations on our impact tracking page.",
    },
    {
      question: "What if I want to make an additional personal donation?",
      answer:
        "We're happy to facilitate additional personal donations to your chosen charity. These would be made directly by you and would be eligible for any applicable tax benefits.",
    },
  ]

  return (
    <>
      <HeroSection
        title="Ubuntu Giving Program"
        subtitle="Community Impact"
        description="Transforming real estate transactions into opportunities for positive community change."
        ctaText="How It Works"
        ctaLink="#how-it-works"
        secondaryCtaText="Our Charity Partners"
        secondaryCtaLink="#charity-partners"
        imageSrc="/images/backgrounds/community-gathering.svg"
        imageAlt="Community gathering in Johannesburg"
        priority={false}
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="Real Estate with Purpose"
                title="The Ubuntu Giving Program"
                description="Connecting property transactions to community impact through charitable giving."
              />

              <p className="text-body mb-4">
                The Ubuntu philosophy teaches us that "I am because we are" — our humanity is tied together. The Ubuntu
                Giving Program brings this philosophy to real estate by connecting each property transaction to positive
                community change.
              </p>

              <p className="text-body mb-4">
                When you buy or sell a property with The Ubuntu Agent, 5% of the commission (10% if capped) is donated
                to a local charity of your choice. This creates a ripple effect of positive impact that extends far
                beyond the property itself.
              </p>

              <p className="text-body mb-6">
                There's no additional cost to you as a client — you receive the same professional real estate service
                while also making a meaningful contribution to the community you're joining or leaving.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/ubuntu-giving/charity-selection" className="btn-tertiary">
                  View Charity Partners
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/backgrounds/community-impact.svg"
                alt="Community impact through real estate"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="The Process"
            title="How the Ubuntu Giving Program Works"
            description="A simple, transparent process that connects real estate to community impact."
            alignment="center"
          />

          <GivingProcess />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="heading-sm mb-4">Current Charity Partners</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Four Paws</span> - Animal welfare organisation protecting animals under human control
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">CHOC (Childhood Cancer Foundation)</span> - Supporting children with cancer and their families
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Breadline</span> - Providing nutritional support to those in need
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Future Partnership</span> - In discussions with Gift of the Givers for future support
                  </p>
                </li>
                <li className="flex items-start mt-6 pt-4 border-t border-gray-200">
                  <span className="text-gold font-bold mr-2">•</span>
                  <p className="text-body-sm">
                    You can also <span className="font-bold">suggest a charity</span> that's meaningful to you
                  </p>
                </li>
              </ul>
            </div>

            <CharitableCalculator />
          </div>
        </div>
      </section>

      {/* Current Charitable Support */}
      <section id="charity-partners" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Making a Difference"
            title="Current Charitable Support"
            description="Through the Ubuntu Giving Program, we're already making an impact with these organizations."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
              <h3 className="heading-sm mb-4">Four Paws</h3>
              <p className="text-body-sm mb-4">
                Supporting animal welfare by protecting animals under direct human influence - farm animals, companion animals, wild animals and animals used in entertainment.
              </p>
              <a href="https://www.four-paws.org.za/" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline">
                Learn more
              </a>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
              <h3 className="heading-sm mb-4">CHOC</h3>
              <p className="text-body-sm mb-4">
                The Childhood Cancer Foundation of South Africa provides comprehensive support for children with cancer and life-threatening blood disorders, and their families.
              </p>
              <a href="https://choc.org.za/" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline">
                Learn more
              </a>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
              <h3 className="heading-sm mb-4">Breadline</h3>
              <p className="text-body-sm mb-4">
                Providing nutritional support to South Africans living in poverty, Breadline helps address food insecurity in communities throughout Johannesburg.
              </p>
              <a href="#" className="text-gold font-medium hover:underline">
                Contact for more information
              </a>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-body mb-6">
              We're in the process of expanding our charity partnerships to offer more options for buyers and sellers.
              If you have a specific charity you'd like to support, please let me know during our consultation.
            </p>
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Discuss Charity Options
            </Link>
          </div>
        </div>
      </section>

      {/* Future Impact Tracking Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Future Transparency"
            title="Impact Tracking Coming Soon"
            description="As the Ubuntu Giving Program grows, we'll provide transparent reporting on donations and impact."
            alignment="center"
          />

          <div className="bg-white p-8 rounded-lg shadow-md mt-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="heading-sm mb-6">Planned Impact Tracking Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
                <div className="flex items-start">
                  <span className="text-gold font-bold mr-2 mt-1">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Total Donation Tracking</span><br />
                    Transparent reporting of all charitable contributions
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-gold font-bold mr-2 mt-1">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Charity Breakdown</span><br />
                    Details of which organizations have been supported
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-gold font-bold mr-2 mt-1">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Community Impact</span><br />
                    Stories and updates about how donations are making a difference
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-gold font-bold mr-2 mt-1">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Donation Certificates</span><br />
                    Recognition for clients who participate in the program
                  </p>
                </div>
              </div>
              
              <p className="text-body mb-6">
                As the program expands, this section will be updated with actual donation data and impact stories. 
                For now, you can contact me directly to learn more about how your transaction can support these worthy causes.
              </p>
              
              <Link href="/contact" className="btn-primary">
                Discuss the Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              The Certificate of Community Contribution
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-body mb-4">
                  After your property transaction is complete, you'll receive a personalised Certificate
                  of Giving acknowledging your contribution through the Ubuntu Giving Program.
                </p>
                <p className="text-body mb-4">
                  This certificate details:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li className="text-body">The charity you've chosen to support</li>
                  <li className="text-body">The amount donated on your behalf</li>
                  <li className="text-body">How this donation will make a difference</li>
                </ul>
                <p className="text-body">
                  It's a tangible reminder of the positive impact your property transaction has had
                  beyond just changing homes.
                </p>
              </div>
              
              <div className="relative h-[300px] rounded-lg overflow-hidden border shadow-sm">
                <Image
                  src="/images/charity/certificate-sample.svg"
                  alt="Sample Certificate of Community Contribution"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}