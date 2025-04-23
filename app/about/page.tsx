import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Briefcase, Users } from "lucide-react"
import React from 'react';
import { ProfileImage } from '@/components/ui/ProfileImage';
import { ContactDetails } from '@/components/ContactDetails';
import { HeroImage } from '@/components/ui/HeroImage'

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
      <section className="relative">
        <HeroImage 
          src="/images/about-bg.jpg" 
          alt="Gary Berkowitz, The Ubuntu Agent"
          height="h-[600px]"
          overlay
          priority={true}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg">
              <span className="inline-block text-gold font-medium mb-2">The Ubuntu Agent</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                About Gary Berkowitz
              </h1>
              <p className="text-gray-700 mb-6">
                Real estate professional with a passion for community impact through the Ubuntu philosophy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#gary-journey" className="btn-primary">
                  My Journey
                </Link>
                <Link href="#testimonials" className="btn-secondary">
                  Client Testimonials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gary's Journey Section */}
      <section id="gary-journey" className="section-padding bg-white">
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
                I specialise in residential sales and rentals in Fourways, Dainfern, North Riding, and Midrand, helping clients navigate the market with expertise and integrity.
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

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Client Experiences"
            title="What Clients Are Saying"
            description="Real stories from homeowners who experienced The Ubuntu Agent difference."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <TestimonialCard
              name="Michiel Barnard"
              testimonial="It was a real pleasure to deal with you regarding the sale of our home. You were incredibly punctual, very attentive to all the small detail, and very professional. In a time when many other people were negative you remained bullish and optimistic because you believe that a thorough and professional approach will succeed in the end. And it did. You got us a really good buyer in a few weeks, and transfer has just gone through. Thank you very much Gary. You are a star! I unreservedly recommend you to potential sellers."
              rating={5}
            />

            <TestimonialCard
              name="Iain Mackenzie"
              testimonial="I am writing to provide my highest recommendation for Gary Berkowitz as a real estate agent. From start to finish, Gary demonstrated exceptional professionalism, dedication, and a genuine commitment to securing the best possible outcome for me. After initially listing my property with an open mandate, where 4 different agents were actively marketing it, I struggled to get the right buyer at the right price. However, when I signed a sole mandate with Gary, everything changed. He proactively marketed the property, consistently brought in potential buyers, and ensured that every showing was handled with expertise and attention to detail. Thanks to his persistence and strategic approach, he got my property sold—something that didn't happen with multiple agents involved."
              rating={5}
            />

            <TestimonialCard
              name="Mark Solomon"
              testimonial="Gary took over the sale of my house when the previous agent who had a sole mandate could not bring a single person through to view the place over a 6 month period. The previous estate agent went as far as to tell me that I needed to drop the price and that in this market there was no way this house would be sold. Gary contacted me and he brought in immediate energy and exuberance that lacked in other agents. Within 2 days he started to bring through potential buyers. We managed to find a buyer within 2 months and he managed to get our asking price. Gary was understanding, vibrant and had an amazing 'can do' attitude."
              rating={5}
            />

            <TestimonialCard
              name="Chris Coetzee"
              testimonial="Prior to Gary assisting me in selling my property, I had it on the market for 3 months with a different agency without success. I experienced an immediate change in the way in which Gary brought fresh, new energy in helping me sell my property. He was committed, efficient, reliable and professional and I felt the sale of my property was safe in his hands. To his credit, he brought me a desired offer within the first month of working on my property and drove the sale through to completion. He even went the extra mile by arranging to get my property cleaned and the garden seen to."
              rating={5}
            />
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
              <h3 className="heading-sm mb-4">My Values in Real Estate</h3>
              <ul className="space-y-4">
                <li>
                  <p className="text-body">
                    <span className="font-bold">Integrity:</span> Honesty and transparency in every
                    transaction are non-negotiable. You'll always get the full picture from me.
                  </p>
                </li>
                <li>
                  <p className="text-body">
                    <span className="font-bold">Expertise:</span> My specialised knowledge of North
                    Johannesburg neighbourhoods helps buyers find the perfect home and sellers maximise their
                    property's value.
                  </p>
                </li>
                <li>
                  <p className="text-body">
                    <span className="font-bold">Service:</span> I provide personalised attention to each
                    client, adapting my approach to your unique needs and preferences.
                  </p>
                </li>
                <li>
                  <p className="text-body">
                    <span className="font-bold">Community:</span> Recognising that strong communities create better
                    living environments for all, I integrate charitable giving into my business model.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to Work with The Ubuntu Agent?</h2>
            <p className="text-white mb-8">
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
