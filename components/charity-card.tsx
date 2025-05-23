import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface CharityCardProps {
  name: string
  description: string
  imageSrc: string
  category?: string
  link?: string
  websiteUrl?: string
}

const CharityCard = ({ name, description, imageSrc, category, link, websiteUrl }: CharityCardProps) => {
  // Check if the image is a logo (SVG or contains "logo" in the path)
  const isLogo = imageSrc.endsWith('.svg') || imageSrc.includes('logo');

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className={`relative ${isLogo ? 'h-32 p-4' : 'h-48'}`}>
        <Image 
          src={imageSrc || "/placeholder.svg"} 
          alt={name} 
          fill 
          className={isLogo ? "object-contain" : "object-cover"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        {category && (
          <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium mb-3">
            {category}
          </span>
        )}
        <h3 className="heading-sm mb-2">{name}</h3>
        <p className="text-body-sm text-muted-foreground mb-4">{description}</p>
        
        {link && (
          <Link href={link} className="text-gold font-medium hover:underline">
            Learn more
          </Link>
        )}
        
        {websiteUrl && (
          <a 
            href={websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gold font-medium hover:underline flex items-center"
          >
            Visit Website <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  )
}

export default CharityCard
