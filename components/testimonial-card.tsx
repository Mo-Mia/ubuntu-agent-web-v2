import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role?: string
  testimonial: string
  imageSrc: string
  rating?: number
  date?: string
}

const TestimonialCard = ({ name, role, testimonial, imageSrc, rating = 5, date }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>

      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-gold fill-gold" : "text-gray-300"}`} />
        ))}
      </div>

      <p className="text-body-sm mb-2">"{testimonial}"</p>

      {date && <p className="text-xs text-muted-foreground">{date}</p>}
    </div>
  )
}

export default TestimonialCard
