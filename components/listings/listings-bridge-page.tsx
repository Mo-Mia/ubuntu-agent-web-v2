import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PROPCON_AGENT_URL } from "@/lib/config/listings";

const AREAS_SERVED = [
  "Fourways",
  "Dainfern",
  "North Riding",
  "Midrand",
  "Craigavon",
  "Broadacres",
  "Sandton",
  "Bryanston",
];

export function ListingsBridgePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0C0F24_0%,#18204A_55%,#E27D60_180%)] pt-32 text-white">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,#D4AF37_0%,transparent_55%)] opacity-30" />
        <div className="container-custom relative pb-20">
          <div className="max-w-3xl">
            <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.28em] text-[#D4AF37]">
              Property search
            </span>
            <h1 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
              Browse Gary&apos;s current listings
            </h1>
            <p className="mb-0 max-w-2xl text-lg text-white/80">
              Live property inventory is hosted on PropCon, Gary&apos;s official agent profile. Listings
              are always up to date, with the same Ubuntu Giving commitment on every sale.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F5EF]">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="mb-6 text-lg text-slate-700">
              You&apos;ll continue on PropCon to view photos, prices, and full property details. When
              you&apos;re ready to enquire or book a viewing, Gary is still your point of contact here
              on The Ubuntu Agent.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#D4AF37] text-[#0C0F24] hover:bg-[#B3941F]"
              >
                <a href={PROPCON_AGENT_URL} target="_blank" rel="noopener noreferrer">
                  View all listings on PropCon
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Book a consultation</Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B3941F]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Areas served
              </div>
              <p className="mb-4 text-slate-600">
                Residential sales and rentals across North Johannesburg and nearby neighbourhoods.
              </p>
              <div className="flex flex-wrap gap-2">
                {AREAS_SERVED.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mb-0 mt-6 text-sm text-slate-500">
                Registered with the PPRA. When you buy or sell with Gary,{" "}
                <Link href="/ubuntu-giving" className="font-medium text-[#B3941F] hover:underline">
                  5% of commission (10% if capped) goes to a local charity
                </Link>{" "}
                of your choice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
