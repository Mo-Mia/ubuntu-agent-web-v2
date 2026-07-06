import Link from "next/link";
import { Building2, Camera, Heart } from "lucide-react";

import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Building2,
    title: "Live inventory",
    description: "Current homes for sale and rent, updated on PropCon.",
  },
  {
    icon: Camera,
    title: "Professional marketing",
    description: "Photography, video, and drone footage where it showcases your property best.",
  },
  {
    icon: Heart,
    title: "Ubuntu Giving on every sale",
    description: "5% of commission (10% if capped) donated to a charity you choose.",
  },
];

export function FindPropertyCta() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <SectionHeading
            subtitle="Property search"
            title="Find a property"
            description="Browse Gary's current listings on PropCon, then get in touch here for viewings, advice, or a consultation."
          />

          <div className="space-y-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-[#F7F5EF] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0C0F24] text-[#D4AF37]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-[#0C0F24]">{title}</h3>
                  <p className="mb-0 text-sm text-slate-600">{description}</p>
                </div>
              </div>
            ))}

            <Button asChild size="lg" className="mt-2 w-full bg-[#D4AF37] text-[#0C0F24] hover:bg-[#B3941F] sm:w-auto">
              <Link href="/listings">Browse properties</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
