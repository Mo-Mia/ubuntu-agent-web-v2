import Image from "next/image"

const UbuntuVisualizer = () => {
  const concepts = [
    {
      title: "Community",
      description: "Ubuntu recognises our interconnectedness and how our actions affect others.",
      icon: "/images/icons/concept-community.svg",
    },
    {
      title: "Compassion",
      description: "Showing empathy and care for others is central to the Ubuntu philosophy.",
      icon: "/images/icons/concept-compassion.svg",
    },
    {
      title: "Contribution",
      description: "Giving back to strengthen the community that supports us all.",
      icon: "/images/icons/concept-contribution.svg",
    },
    {
      title: "Connection",
      description: "Building meaningful relationships that enrich our lives and communities.",
      icon: "/images/icons/concept-connection.svg",
    },
  ]

  return (
    <div className="relative py-12">
      <div className="absolute inset-0 bg-pattern-bg opacity-50 z-0"></div>

      <div className="relative z-10">
        <div className="flex justify-center mb-12">
          <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-gold">
            <Image src="/images/ubuntu/ubuntu-symbol-visualizer.svg" alt="Ubuntu Symbol" fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {concepts.map((concept, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="relative h-16 w-16">
                  <Image src={concept.icon || "/placeholder.svg"} alt={concept.title} fill className="object-contain" />
                </div>
              </div>
              <h3 className="heading-sm mb-2">{concept.title}</h3>
              <p className="text-body-sm text-muted-foreground">{concept.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-body italic">
            "I am because we are. We are because I am. Through real estate transactions, we strengthen our community
            bonds and create positive change together."
          </p>
        </div>
      </div>
    </div>
  )
}

export default UbuntuVisualizer
