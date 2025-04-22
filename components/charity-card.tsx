import Image from "next/image"
import Link from "next/link"

interface CharityCardProps {
  name: string
  description: string
  imageSrc: string
  category: string
  link: string
}

const CharityCard = ({ name, description, imageSrc, category, link }: CharityCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium mb-3">
          {category}
        </span>
        <h3 className="heading-sm mb-2">{name}</h3>
        <p className="text-body-sm text-muted-foreground mb-4">{description}</p>
        <Link href={link} className="text-gold font-medium hover:underline">
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default CharityCard
