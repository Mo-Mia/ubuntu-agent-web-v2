import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="btn-primary inline-flex items-center">
          <Home className="mr-2 h-4 w-4" />
          Return Home
        </Link>
      </div>
    </div>
  )
}
