import { ArrowRight } from "lucide-react"

const GivingProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Buy or Sell Your Home",
      description: "Work with Gary Berkowitz to find your dream home or sell your property.",
    },
    {
      number: 2,
      title: "Transaction Closes",
      description: "Once your real estate transaction successfully closes, the giving process begins.",
    },
    {
      number: 3,
      title: "Choose Your Charity",
      description: "Select from our list of vetted local charity partners or nominate your own.",
    },
    {
      number: 4,
      title: "Donation Made",
      description: "5% of commission (10% if capped) is donated to your chosen charity.",
    },
    {
      number: 5,
      title: "Impact Tracked",
      description: "Receive updates on how your contribution is making a difference in the community.",
    },
  ]

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gold text-navy w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="heading-sm mb-2">{step.title}</h3>
              <p className="text-body-sm text-muted-foreground">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-full w-full transform -translate-x-1/2">
                <ArrowRight className="w-6 h-6 text-gold" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GivingProcess
