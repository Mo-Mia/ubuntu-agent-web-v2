"use client"

import { useState, useEffect } from "react"
import { Calculator } from "lucide-react"

const CharitableCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(2000000)
  const [commission, setCommission] = useState(0)
  const [donation, setDonation] = useState(0)
  const [isCapped, setIsCapped] = useState(false)

  // Total commission rate
  const totalCommissionRate = 0.06 // 6% total commission

  // Agent's share of commission (71% when uncapped, 96% when capped)
  const agentCommissionPercentage = isCapped ? 0.96 : 0.71

  // Donation percentage (5% standard, 10% if capped)
  const donationPercentage = isCapped ? 0.1 : 0.05

  useEffect(() => {
    // Calculate total commission
    const totalCommission = propertyValue * totalCommissionRate
    
    // Calculate agent's commission
    const agentCommission = totalCommission * agentCommissionPercentage
    setCommission(agentCommission)

    // Calculate donation
    const calculatedDonation = agentCommission * donationPercentage
    setDonation(calculatedDonation)
  }, [propertyValue, totalCommissionRate, agentCommissionPercentage, donationPercentage, isCapped])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "ZAR",
      maximumFractionDigits: 0,
      currencyDisplay: "symbol"
    }).format(value).replace("ZAR", "R")
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-gold-dark mr-3" aria-hidden="true" />
        <h3 className="heading-md text-navy m-0">Charitable Donation Calculator</h3>
      </div>

      <div className="mb-8">
        <label htmlFor="property-value" className="form-label font-medium mb-2 block">
          Property Value: <span className="font-bold">{formatCurrency(propertyValue)}</span>
        </label>
        <input
          type="range"
          id="property-value"
          min="500000"
          max="10000000"
          step="100000"
          value={propertyValue}
          onChange={(e) => setPropertyValue(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-dark"
          aria-valuemin={500000}
          aria-valuemax={10000000}
          aria-valuenow={propertyValue}
          aria-valuetext={formatCurrency(propertyValue)}
        />
        <div className="flex justify-between text-xs text-gray-700 mt-2 font-medium">
          <span>R500,000</span>
          <span>R10,000,000</span>
        </div>
      </div>

      <div className="mb-8">
        <label className="flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={isCapped} 
            onChange={() => setIsCapped(!isCapped)} 
            className="sr-only peer" 
            aria-checked={isCapped}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gold-dark rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-dark"></div>
          <span className="ms-3 text-sm font-medium text-gray-700">
            Agent is capped <span className="text-gold-dark font-bold">(10% donation)</span>
          </span>
        </label>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-100 p-5 rounded-md border border-gray-200">
          <p className="text-sm text-gray-700 mb-2 font-medium">Estimated Commission:</p>
          <p className="text-xl font-bold text-navy">{formatCurrency(commission)}</p>
          <p className="text-xs text-gray-600 mt-1">
            {isCapped ? "96%" : "71%"} of total 6% commission
          </p>
        </div>

        <div className="bg-[#f7f3e3] p-5 rounded-md border border-gold/20">
          <p className="text-sm text-gray-700 mb-2 font-medium">Charitable Donation:</p>
          <p className="text-xl font-bold text-gold-dark">{formatCurrency(donation)}</p>
          <p className="text-sm text-gray-700 mt-2">
            <span className="font-bold">{isCapped ? "10%" : "5%"}</span> of commission
          </p>
          <p className="text-xs text-gray-600 mt-1 italic">
            *All amounts shown are before tax
          </p>
        </div>
      </div>
    </div>
  )
}

export default CharitableCalculator
