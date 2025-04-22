import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  imageSrc: string
  slug: string
  date: string
  category?: string
}

const BlogCard = ({ title, excerpt, imageSrc, slug, date, category }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/resources/${slug}`} className="block">
        <div className="relative h-48">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
          {category && (
            <span className="absolute top-4 left-4 bg-gold text-navy px-3 py-1 rounded-md text-xs font-medium">
              {category}
            </span>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <time dateTime={date}>{date}</time>
        </div>

        <Link href={`/resources/${slug}`}>
          <h3 className="heading-sm mb-2 hover:text-gold transition-colors">{title}</h3>
        </Link>

        <p className="text-body-sm text-muted-foreground mb-4">{excerpt}</p>

        <Link href={`/resources/${slug}`} className="text-gold font-medium hover:underline">
          Read more
        </Link>
      </div>
    </article>
  )
}

export default BlogCard
