interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  alignment?: "left" | "center" | "right"
  titleSize?: "sm" | "md" | "lg" | "xl"
}

const SectionHeading = ({
  title,
  subtitle,
  description,
  alignment = "left",
  titleSize = "lg",
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  const titleClasses = {
    sm: "heading-sm",
    md: "heading-md",
    lg: "heading-lg",
    xl: "heading-xl",
  }

  return (
    <div className={`max-w-3xl mb-8 md:mb-12 ${alignmentClasses[alignment]}`}>
      {subtitle && <span className="inline-block text-gold font-medium mb-2">{subtitle}</span>}
      <h2 className={`${titleClasses[titleSize]} mb-4`}>{title}</h2>
      {description && <p className="text-body text-muted-foreground">{description}</p>}
    </div>
  )
}

export default SectionHeading
