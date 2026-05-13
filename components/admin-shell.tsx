import Link from "next/link"

import { logoutAction } from "@/app/admin/actions"
import { Button } from "@/components/ui/button"

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-[#F7F5EF] px-4 pb-16 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B3941F]">Admin</p>
            <h1 className="mt-2 text-3xl font-semibold text-[#0C0F24]">Content manager</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild variant="outline">
              <Link href="/admin/donations">Donations</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/admin/listings">Listings</Link>
            </Button>
            <form action={logoutAction}>
              <Button type="submit" variant="ghost">Log out</Button>
            </form>
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
