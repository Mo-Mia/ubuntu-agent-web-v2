import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Briefcase, Users } from "lucide-react"
import React from 'react';
import { ProfileImage } from '@/components/ui/ProfileImage';
import { ContactDetails } from '@/components/ContactDetails';

import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import TestimonialCard from "@/components/testimonial-card"
import UbuntuVisualizer from "@/components/ubuntu-visualizer"

export const metadata = {
  title: "About Gary Berkowitz | The Ubuntu Agent",
  description:
    "Learn about Gary Berkowitz, The Ubuntu Agent, his journey, the Ubuntu philosophy, and his partnership with eXp Realty in Johannesburg, South Africa.",
}

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Gary Berkowitz"
        subtitle="The Ubuntu Agent"
        description="Real estate professional with a passion for community impact through the Ubuntu philosophy."
        imageSrc="/images/about-bg.jpg"
        imageAlt="Gary Berkowitz, The Ubuntu Agent"
        height="medium"
      />

      {/* Gary's Journey Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <div className="relative h-auto rounded-lg overflow-hidden">
                <ProfileImage 
                  size="xl" 
                  rounded="md" 
                  className="w-full h-auto aspect-square md:aspect-[4/5]" 
                  priority={true}
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Gary Berkowitz - The Ubuntu Agent
              </h2>
              <p className="text-gray-600 mb-4">
                With 10 years in Johannesburg real estate, I've helped buyers and sellers across the North Johannesburg area find their perfect properties while building deep community connections.
              </p>
              <p className="text-gray-600 mb-4">
                My approach to real estate is guided by the Ubuntu philosophy: "I am because we are." This belief in our interconnectedness drives my commitment to both exceptional service and meaningful community impact through charitable giving.
              </p>
              <p className="text-gray-600 mb-4">
                I specialize in residential sales and rentals in Fourways, Dainfern, North Riding, and Midrand, helping clients navigate the market with expertise and integrity.
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Contact Gary Directly
                </h3>
                <ContactDetails variant="vertical" showIcons={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubuntu Philosophy Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="The Guiding Principle"
            title="Understanding the Ubuntu Philosophy"
            description="Ubuntu is more than a word—it's a way of life that shapes how I approach real estate."
            alignment="center"
          />

          <UbuntuVisualizer />

          <div className="mt-12 max-w-3xl mx-auto">
            <blockquote className="text-xl italic text-center text-gray-700 mb-6">
              "I am what I am because of who we all are."
            </blockquote>
            
            <p className="text-body mb-4">
              Ubuntu is a profound African philosophy that recognizes our interconnectedness as human beings. The essence of Ubuntu is captured in the quote "I am what I am because of who we all are." It emphasizes that our humanity is tied together—we find our purpose and meaning through our relationships with others.
            </p>

            <p className="text-body mb-4">
              In my real estate practice, Ubuntu transforms what could be merely transactional into something deeply relational and community-oriented. When you buy or sell a home with The Ubuntu Agent, you're not just completing a property transaction—you're participating in community building.
            </p>

            <p className="text-body">
              Through the Ubuntu Giving Program, each real estate transaction becomes an opportunity to strengthen our shared community. By directing 5% of my commission (10% if capped) to local charities like Four Paws, CHOC, and Breadline, we create positive change that extends far beyond the property itself.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Credentials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Professional Background"
            title="Credentials & Expertise"
            description="Backed by education, experience, and ongoing professional development."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-gold" />
              </div>
              <h3 className="heading-sm mb-2">Education</h3>
              <p className="text-body-sm text-muted-foreground">
                Licensed Real Estate Professional
                <br />
                Continuing Real Estate Education
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-gold" />
              </div>
              <h3 className="heading-sm mb-2">Recognition</h3>
              <p className="text-body-sm text-muted-foreground">
                BNI Membership
                <br />
                Recognition for Charitable Contributions
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Briefcase className="h-12 w-12 text-gold" />
              </div>
              <h3 className="heading-sm mb-2">Experience</h3>
              <p className="text-body-sm text-muted-foreground">
                10 Years in Real Estate
                <br />
                Residential Sales and Rentals Specialist
                <br />
                North Johannesburg Market Expert
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-gold" />
              </div>
              <h3 className="heading-sm mb-2">Affiliations</h3>
              <p className="text-body-sm text-muted-foreground">
                eXp Realty Agent
                <br />
                Company Registration No 2020/480535/07
                <br />
                VAT Registration No 426 029 4204
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* eXp Realty Partnership */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero/about-hero.jpg"
                alt="eXp Realty Office in Johannesburg"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <SectionHeading
                subtitle="Powerful Partnership"
                title="Backed by eXp Realty"
                description="The support of a global real estate company with the personal touch of a local agent."
              />

              <p className="text-body mb-4">
                As part of the eXp Realty family, I combine the resources and reach of an international real estate
                company with my personalized, community-focused approach. This partnership allows me to offer clients
                the best of both worlds.
              </p>

              <p className="text-body mb-4">
                eXp Realty's innovative model and cutting-edge technology empower me to provide exceptional service
                while maintaining the flexibility to create initiatives like the Ubuntu Giving Program.
              </p>

              <p className="text-body mb-6">
                This collaboration ensures that my clients receive world-class marketing, extensive property exposure,
                and seamless transactions, all while making a meaningful impact in our local Johannesburg community.
              </p>

              <div className="flex items-center">
                <span className="text-sm mr-3">Proudly powered by</span>
                <div className="relative h-10 w-32">
                  <Image
                    src="/images/partners/exp-realty-logo.png"
                    alt="eXp Realty Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Guiding Principles"
            title="Vision & Values"
            description="The core beliefs that drive The Ubuntu Agent approach to real estate."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-4">Our Vision</h3>
              <p className="text-body mb-4">
                To transform real estate transactions into opportunities for community building and positive social
                impact, creating a network of homeowners who understand that their property decisions can contribute to
                a more connected, compassionate Johannesburg.
              </p>
              <p className="text-body">
                We envision a real estate experience where the joy of finding your perfect home is matched by the
                satisfaction of knowing your purchase has helped strengthen the community you're joining.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Integrity:</span> Honest, transparent communication and ethical business
                    practices in every interaction.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Community:</span> Recognizing that strong communities create better
                    living environments for everyone.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Excellence:</span> Delivering exceptional service and results for every
                    client, every time.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Empathy:</span> Understanding the emotional journey of buying or selling
                    a home and providing compassionate support.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-2">•</span>
                  <p className="text-body-sm">
                    <span className="font-bold">Innovation:</span> Continuously seeking better ways to serve clients and
                    community through new ideas and approaches.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Client Experiences"
            title="What Clients Are Saying"
            description="Real stories from homeowners who experienced The Ubuntu Agent difference."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <TestimonialCard
              name="David & Priya Naidoo"
              role="Home Sellers"
              testimonial="Gary's approach to selling our family home was refreshingly different. His market knowledge was impressive, but what really stood out was how he connected our sale to community impact through the Ubuntu Giving Program."
              imageSrc="/images/testimonials/client-1.jpg"
              date="April 2023"
            />

            <TestimonialCard
              name="Nomsa Mbeki"
              role="First-time Buyer"
              testimonial="As someone new to the property market, I appreciated Gary's patience and expertise. He made a complex process simple and meaningful by helping me direct part of his commission to an education charity close to my heart."
              imageSrc="/images/testimonials/client-2.jpg"
              date="February 2023"
            />

            <TestimonialCard
              name="James & Sarah Wilson"
              role="Property Investors"
              testimonial="We've worked with many agents over the years, but Gary's combination of business acumen and community focus is unique. He understood our investment goals while helping us contribute to Johannesburg's development."
              imageSrc="/images/testimonials/client-3.jpg"
              date="December 2022"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to Work with The Ubuntu Agent?</h2>
            <p className="text-body-lg mb-8">
              Let's connect to discuss your real estate needs and how we can make your property transaction a force for
              positive change in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Gary
              </Link>
              <Link
                href="/ubuntu-giving"
                className="btn-tertiary bg-transparent border-white text-white hover:bg-white/20"
              >
                Learn About Ubuntu Giving
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
