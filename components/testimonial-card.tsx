import Image from "next/image"
import { Star, Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role?: string
  location?: string
  testimonial: string
  imageSrc?: string
  rating?: number
  date?: string
  compact?: boolean
}

const TestimonialCard = ({ 
  name, 
  role, 
  location,
  testimonial, 
  imageSrc, 
  rating = 5, 
  date,
  compact = false
}: TestimonialCardProps) => {
  
  // For compact mode, truncate testimonial if it's too long
  const displayTestimonial = compact && testimonial.length > 220 
    ? testimonial.substring(0, 220) + '...' 
    : testimonial;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gold h-full flex flex-col">
      {/* Testimonial Quote */}
      <div className="mb-4">
        <Quote className="h-8 w-8 text-gold opacity-40 mb-2" />
        <p className="text-body-sm mb-4">"{displayTestimonial}"</p>
      </div>
      
      {/* Author information - pushed to bottom with flex-col and mt-auto */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center">
          {imageSrc && (
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
              <Image src={imageSrc} alt={name} fill className="object-cover" />
            </div>
          )}
          
          {!imageSrc && (
            <div className="h-10 w-10 rounded-full bg-navy/10 text-navy flex items-center justify-center mr-4 flex-shrink-0">
              <span className="font-semibold text-lg">{name.charAt(0)}</span>
            </div>
          )}
          
          <div>
            <h4 className="font-bold text-navy">{name}</h4>
            {role && <p className="text-sm text-muted-foreground">{role}</p>}
            {location && <p className="text-sm text-muted-foreground">{location}</p>}
          </div>
        </div>
        
        {rating && (
          <div className="flex mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "text-gold fill-gold" : "text-gray-300"}`} />
            ))}
          </div>
        )}
        
        {date && <p className="text-xs text-muted-foreground mt-1">{date}</p>}
      </div>
    </div>
  )
}

export default TestimonialCard
