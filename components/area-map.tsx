"use client"

import { useState } from "react"
import Image from "next/image"

interface Area {
  id: string
  name: string
  description: string
  coordinates: {
    x: number
    y: number
  }
}

const AreaMap = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null)

  const areas: Area[] = [
    {
      id: "fourways",
      name: "Fourways",
      description: "A vibrant commercial and residential hub with diverse property options ranging from apartments to luxury estates.",
      coordinates: { x: 45, y: 30 },
    },
    {
      id: "dainfern",
      name: "Dainfern",
      description: "Prestigious golf estate offering secure living with luxury homes and excellent amenities.",
      coordinates: { x: 40, y: 20 },
    },
    {
      id: "north-riding",
      name: "North Riding",
      description: "Growing area with a mix of townhouse complexes, security estates, and freestanding homes.",
      coordinates: { x: 55, y: 40 },
    },
    {
      id: "midrand",
      name: "Midrand",
      description: "Rapidly developing area with business parks, residential estates, and diverse housing options.",
      coordinates: { x: 65, y: 50 },
    },
  ]

  const handleAreaClick = (area: Area) => {
    setSelectedArea(area)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="heading-sm mb-4">Areas Served in North Johannesburg</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <Image src="/images/backgrounds/johannesburg-map.svg" alt="Johannesburg Map" fill className="object-cover" />

          {areas.map((area) => (
            <button
              key={area.id}
              className={`absolute w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                selectedArea?.id === area.id ? "bg-gold scale-125" : "bg-navy hover:bg-gold"
              }`}
              style={{ left: `${area.coordinates.x}%`, top: `${area.coordinates.y}%` }}
              onClick={() => handleAreaClick(area)}
              aria-label={`Select ${area.name}`}
            ></button>
          ))}
        </div>

        <div>
          <div className="bg-gray-50 p-4 rounded-lg h-full">
            <h4 className="font-bold mb-4">Select an area to learn more</h4>

            {selectedArea ? (
              <div>
                <h5 className="text-lg font-bold text-gold mb-2">{selectedArea.name}</h5>
                <p className="text-body-sm mb-4">{selectedArea.description}</p>
                <button className="text-navy hover:text-gold font-medium text-sm">
                  View properties in {selectedArea.name}
                </button>
              </div>
            ) : (
              <ul className="space-y-2">
                {areas.map((area) => (
                  <li key={area.id}>
                    <button
                      className="text-navy hover:text-gold font-medium text-left w-full"
                      onClick={() => handleAreaClick(area)}
                    >
                      {area.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AreaMap
