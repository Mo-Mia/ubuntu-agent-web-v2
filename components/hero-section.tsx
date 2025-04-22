import Link from "next/link"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  imageSrc: string
  imageAlt: string
  height?: "small" | "medium" | "large"
  priority?: boolean
}

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
  imageAlt,
  height = "large",
  priority = false,
}: HeroSectionProps) => {
  const heightClasses = {
    small: "min-h-[40vh]",
    medium: "min-h-[60vh]",
    large: "min-h-[85vh]",
  }

  return (
    <section className={`relative ${heightClasses[height]} flex items-center`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block text-gold font-medium mb-4">{subtitle}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">{description}</p>
          
          <div className="flex flex-wrap gap-4">
            {ctaText && ctaLink && (
              <Link href={ctaLink} className="btn-primary">
                {ctaText}
              </Link>
            )}
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink} className="btn-tertiary bg-transparent border-white text-white hover:bg-white/20">
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
