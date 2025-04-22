"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  title?: string
  description?: string
  faqs: FaqItem[]
}

const FaqSection = ({ title = "Frequently Asked Questions", description, faqs }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {title && <h2 className="heading-lg mb-4">{title}</h2>}
      {description && <p className="text-body text-muted-foreground mb-8">{description}</p>}

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-gold transition-transform duration-200 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-body-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqSection
