import Link from "next/link";
import { ExternalLink, MoveLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PROPCON_AGENT_URL } from "@/lib/config/listings";

type ListingMovedPageProps = {
  uniqueId: string;
};

export function ListingMovedPage({ uniqueId }: ListingMovedPageProps) {
  return (
    <section className="bg-[#F7F5EF] pb-20 pt-32">
      <div className="container-custom">
        <Link
          href="/listings"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#0C0F24]"
        >
          <MoveLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to properties</span>
        </Link>

        <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#B3941F]">
            Listing moved
          </p>
          <h1 className="mb-4 text-3xl font-semibold text-[#0C0F24] md:text-4xl">
            This property is now on PropCon
          </h1>
          <p className="mb-8 text-slate-600">
            Property details for this listing are hosted on Gary&apos;s live PropCon profile, where
            inventory is kept up to date. Browse current listings there, or get in touch if you
            have a question about this property.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#D4AF37] text-[#0C0F24] hover:bg-[#B3941F]"
            >
              <a href={PROPCON_AGENT_URL} target="_blank" rel="noopener noreferrer">
                View listings on PropCon
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`/contact?property=${encodeURIComponent(uniqueId)}`}>
                Enquire about this property
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
