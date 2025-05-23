import React, { Suspense } from 'react';
import { ConsultationForm } from '@/components/ConsultationForm';
import { ProfileImage } from '@/components/ui/ProfileImage';
import { ContactDetails } from '@/components/ContactDetails';
import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact-form';
import SectionHeading from '@/components/section-heading';
import { HeroImage } from '@/components/ui/HeroImage';
import { ContactCard } from '@/components/ContactCard';

export const metadata = {
  title: "Contact Gary Berkowitz | The Ubuntu Agent",
  description:
    "Get in touch with Gary Berkowitz, The Ubuntu Agent, for all your real estate needs in Johannesburg. Expert service with a community impact focus.",
  alternates: {
    canonical: "/contact",
  },
};

// Loading fallbacks for the forms
const FormLoading = () => (
  <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
    <div className="h-8 bg-gray-200 rounded mb-4 w-2/3"></div>
    <div className="space-y-4">
      <div className="h-10 bg-gray-200 rounded"></div>
      <div className="h-10 bg-gray-200 rounded"></div>
      <div className="h-10 bg-gray-200 rounded"></div>
      <div className="h-32 bg-gray-200 rounded"></div>
      <div className="h-12 bg-gray-200 rounded"></div>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <>
      <section className="relative">
        <HeroImage 
          src="/images/backgrounds/johannesburg-skyline.jpg" 
          alt="Contact The Ubuntu Agent"
          height="h-[600px]"
          overlay
          priority={true}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg">
              <span className="inline-block text-gold font-medium mb-2">Get in Touch</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Contact Gary
              </h1>
              <p className="text-gray-700 mb-6">
                Let's discuss your real estate needs and how we can achieve your goals together.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#consultation-form" className="btn-primary">
                  Schedule Consultation
                </a>
                <Link href="/services" className="btn-secondary">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">          
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div id="consultation-form" className="md:col-span-2">
                  <Suspense fallback={<FormLoading />}>
                    <ConsultationForm />
                  </Suspense>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                  <div className="flex flex-col items-center md:items-start mb-6">
                    <ProfileImage size="lg" className="mb-4" />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      Gary Berkowitz
                    </h2>
                    <p className="text-gray-600 mb-4">
                      The Ubuntu Agent | eXp South Africa
                    </p>
                    <p className="text-xs text-gray-500">
                      Company Registration No 2020/480535/07<br />
                      VAT Registration No 426 029 4204
                    </p>
                  </div>
                  
                  <div className="w-full overflow-hidden">
                    <ContactDetails showIcons={true} className="mb-6" />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Office Hours</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Monday - Sunday</div>
                      <div>08:00 - 20:00</div>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Office Address</h3>
                    <p className="text-gray-600">
                      Wanderers Office Park<br />
                      BDO Building<br />
                      52 Corlett Drive, Illovo, 2196<br />
                      South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
