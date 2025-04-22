import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Header from '@/components/header'
import { Footer } from '@/components/footer'
import type React from "react"
import type { Viewport } from "next"
import Script from 'next/script'

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C0F24",
  colorScheme: "light",
}

export const metadata: Metadata = {
  title: {
    default: "The Ubuntu Agent | Your Home, Our Community",
    template: "%s | The Ubuntu Agent",
  },
  description:
    "Real estate with real impact in Johannesburg, South Africa. 5% of commission donated to local charities through the Ubuntu Giving Program.",
  keywords: [
    "real estate", 
    "Johannesburg", 
    "South Africa", 
    "charity", 
    "ubuntu", 
    "eXp Realty", 
    "Gary Berkowitz", 
    "property sales", 
    "home buying", 
    "property market",
    "charitable giving",
    "community impact"
  ],
  authors: [{ name: "Gary Berkowitz", url: "https://www.theubuntuagent.co.za" }],
  creator: "Gary Berkowitz",
  publisher: "eXp Realty South Africa",
  category: "Real Estate",
  metadataBase: new URL("https://www.theubuntuagent.co.za"),
  alternates: {
    canonical: "/",
    languages: {
      'en-ZA': '/',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.theubuntuagent.co.za",
    title: "The Ubuntu Agent | Your Home, Our Community",
    description:
      "Real estate with real impact in Johannesburg, South Africa. 5% of commission donated to local charities.",
    siteName: "The Ubuntu Agent",
    images: [
      {
        url: "/images/social/og-image.svg",
        width: 1200,
        height: 630,
        alt: "The Ubuntu Agent - Real Estate with Real Impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ubuntu Agent | Your Home, Our Community",
    description:
      "Real estate with real impact in Johannesburg, South Africa. 5% of commission donated to local charities.",
    images: ["/images/social/twitter-image.svg"],
    creator: "@theubuntuagent",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
  generator: 'Next.js',
  applicationName: 'The Ubuntu Agent',
  referrer: 'origin-when-cross-origin',
  icons: [
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'alternate icon', url: '/favicon.ico', type: 'image/x-icon' }
  ]
}

// Structured data for real estate agent (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "The Ubuntu Agent - Gary Berkowitz",
  "url": "https://www.theubuntuagent.co.za",
  "logo": "https://www.theubuntuagent.co.za/images/ubuntu-agent-logo.png",
  "image": "https://www.theubuntuagent.co.za/images/gary-profile.jpg",
  "description": "Real estate with real impact in Johannesburg, South Africa. 5% of commission donated to local charities.",
  "telephone": "+27-000-000-000", // Replace with actual phone number
  "email": "gary@theubuntuagent.co.za",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Johannesburg",
    "addressRegion": "Gauteng",
    "addressCountry": "South Africa"
  },
  "sameAs": [
    "https://www.facebook.com/theubuntuagent",
    "https://www.instagram.com/theubuntuagent",
    "https://www.linkedin.com/in/garyberkowitz"
  ],
  "areaServed": {
    "@type": "City",
    "name": "Johannesburg"
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}