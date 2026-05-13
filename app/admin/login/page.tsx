import { loginAction } from "@/app/admin/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const dynamic = "force-dynamic"

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>
}

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams

  return (
    <section className="bg-[#F7F5EF] px-4 pb-16 pt-32">
      <div className="mx-auto max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B3941F]">Admin</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#0C0F24]">Sign in</h1>
        <p className="mt-3 text-sm text-slate-600">Use the admin password configured in Vercel.</p>

        {error ? (
          <p className="mt-5 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
            The password was not accepted.
          </p>
        ) : null}

        <form action={loginAction} className="mt-6 space-y-4">
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <Input id="password" name="password" type="password" required autoComplete="current-password" />
          </div>
          <Button type="submit" className="w-full bg-[#0C0F24] text-white hover:bg-[#18204A]">
            Sign in
          </Button>
        </form>
      </div>
    </section>
  )
}
