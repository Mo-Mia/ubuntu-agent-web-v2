"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqProps {
  items: FaqItem[]
}

const FAQ = ({ items }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleFaq(index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium">{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-gold transition-transform duration-200 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-body-sm">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQ 