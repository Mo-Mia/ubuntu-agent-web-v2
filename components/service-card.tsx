import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  link: string
  variant?: "default" | "outlined" | "filled"
}

const ServiceCard = ({ title, description, icon: Icon, link, variant = "default" }: ServiceCardProps) => {
  const variantClasses = {
    default: "bg-white hover:shadow-lg",
    outlined: "border border-gold/30 hover:border-gold",
    filled: "bg-navy text-white hover:bg-navy/90",
  }

  const iconClasses = {
    default: "text-gold",
    outlined: "text-gold",
    filled: "text-gold",
  }

  return (
    <Link href={link} className="block group">
      <div className={`p-6 rounded-lg transition-all duration-300 h-full ${variantClasses[variant]}`}>
        <div className="mb-4">
          <Icon className={`h-10 w-10 ${iconClasses[variant]}`} />
        </div>
        <h3 className="heading-sm mb-2 group-hover:text-gold transition-colors">{title}</h3>
        <p className={`text-body-sm ${variant === "filled" ? "text-white/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      </div>
    </Link>
  )
}

export default ServiceCard
