import Link from "next/link"
import Image from "next/image"
import { Home, Heart, Building } from "lucide-react"
import React from 'react';
import { HeroImage } from '@/components/ui/HeroImage';
import { ContactCard } from '@/components/ContactCard';

import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import BlogCard from "@/components/blog-card"
import GivingProcess from "@/components/giving-process"
import CharitableCalculator from "@/components/charitable-calculator"

export default function HomePage() {
  return (
    <>
      <section className="relative">
        <HeroImage 
          src="/images/backgrounds/johannesburg-skyline.jpg" 
          alt="Johannesburg skyline with dramatic sky" 
          height="h-[600px]"
          overlay
          priority={true}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                The Ubuntu Agent
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Real estate with real impact. Your property transaction can make a difference through charitable giving.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="btn-primary">
                  Contact Gary
                </a>
                <a href="/ubuntu-giving" className="btn-secondary">
                  Ubuntu Giving Program
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to The Ubuntu Agent
              </h2>
              <p className="text-gray-600 mb-4">
                With 10 years of experience in Johannesburg real estate, I combine professional service with the Ubuntu philosophy - "I am because we are." Through my giving program, 5% of my commission (10% if capped) goes to local charities.
              </p>
              <p className="text-gray-600 mb-6">
                Specialising in residential sales and rentals in Fourways, Dainfern, North Riding, and Midrand, I'm here to help you navigate the property market while making a positive impact on our community.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/about" className="btn-primary">
                  About Gary
                </a>
                <a href="/contact" className="btn-secondary">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <ContactCard />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="How I Can Help"
            title="Residential Real Estate Services"
            description="Whether you're buying, selling, or renting in the North Johannesburg area, I provide personalised services to meet your unique needs."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ServiceCard
              title="For Home Buyers"
              description="Save money with my two-way approach: thorough market analysis and expert negotiation to ensure you get the best possible price."
              icon={Home}
              link="/services#buyers"
            />

            <ServiceCard
              title="For Home Sellers"
              description="Maximise your property's value with my strategic approach to increasing offers and collaborating with a network of agents."
              icon={Building}
              link="/services#sellers"
              variant="outlined"
            />

            <ServiceCard
              title="Ubuntu Giving Program"
              description="Make your real estate transaction matter by directing 5% of my commission (10% if capped) to a charity of your choice."
              icon={Heart}
              link="/ubuntu-giving"
              variant="filled"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Ubuntu Giving Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="How It Works"
            title="The Ubuntu Giving Program"
            description="Making a difference in our community is simple and transparent."
            alignment="center"
          />

          <GivingProcess />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="heading-sm mb-4">Current Charitable Activities</h3>
              <p className="text-body mb-4">
                The Ubuntu philosophy teaches us that our humanity is tied together. I'm currently supporting organisations like Four Paws, CHOC, and Breadline through my real estate transactions, with plans to expand partnerships.
              </p>
              <p className="text-body mb-4">
                When you buy or sell a home with me, you can direct 5% of my commission (10% if capped) to one of these charities or suggest another cause that resonates with you.
              </p>
              <Link href="/ubuntu-giving" className="text-gold font-medium hover:underline">
                Learn more about the program
              </Link>
            </div>

            <CharitableCalculator />
          </div>
        </div>
      </section>

      {/* Featured Testimonial Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="Client Feedback"
            title="What Our Clients Say"
            description="Real experiences from homeowners who have worked with The Ubuntu Agent."
            alignment="center"
          />

          <div className="max-w-3xl mx-auto mt-8">
            <TestimonialCard 
              name="Mark Solomon"
              testimonial="Gary took over the sale of my house when the previous agent who had a sole mandate could not bring a single person through to view the place over a 6 month period. The previous estate agent went as far as to tell me that I needed to drop the price and that in this market there was no way this house would be sold. Gary contacted me and he brought in immediate energy and exuberance that lacked in other agents. Within 2 days he started to bring through potential buyers. We managed to find a buyer within 2 months and he managed to get our asking price. Gary was understanding, vibrant and had an amazing 'can do' attitude."
              rating={5}
            />
          </div>

          <div className="text-center mt-8">
            <Link href="/about#testimonials" className="btn-secondary">
              View More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Resources"
            title="Real Estate Resources"
            description="Stay informed with resources about the Johannesburg property market and tips for your real estate journey."
            alignment="center"
          />

          <div className="p-8 bg-gray-50 rounded-lg mt-8 text-center">
            <h3 className="heading-sm mb-4">Resource Library Coming Soon</h3>
            <p className="text-body mb-6">
              I'm currently developing useful resources to help you navigate the property market. Check back soon for market insights, buyer guides, and more information about the Ubuntu philosophy in action.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact for Information
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Let's Connect</h2>
            <p className="text-body-lg mb-8">
              Whether you're buying, selling, or just exploring the North Johannesburg property market, I'm here to help. Let's discuss how to achieve your real estate goals while making a positive community impact.
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
