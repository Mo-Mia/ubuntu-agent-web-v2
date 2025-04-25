"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Send } from "lucide-react"
import Script from "next/script"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "buying",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  
  // Check for success parameter in URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('success') === 'true') {
        setFormSuccess(true);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Form will be submitted normally via action attribute
  }

  return (
    <>
      <Script src="https://js.hcaptcha.com/1/api.js" async defer />
      
      {formSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded flex items-start mb-8" role="alert">
          <div className="mx-auto text-center">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you for your message!</h3>
            <p className="text-green-700">We've received your inquiry and will get back to you shortly.</p>
          </div>
        </div>
      ) : (
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="space-y-6" 
          aria-label="Contact form"
          onSubmit={handleSubmit}
        >
          {/* Required Web3forms fields */}
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY} />
          <input type="hidden" name="subject" value="Ubuntu Agent Website Submission" />
          <input type="hidden" name="from_name" value="Ubuntu Agent Notification" />
          <input type="hidden" name="redirect" value="https://ubuntuagent.co.za/contact?success=true" />
          
          {/* Required field for Web3Forms to enable spam protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="form-label">
                Full Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                className="form-input"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email Address <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                className="form-input"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="interest" className="form-label">
                I'm Interested In <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                aria-required="true"
                className="form-select"
                disabled={isSubmitting}
              >
                <option value="buying">Buying a Property</option>
                <option value="selling">Selling a Property</option>
                <option value="valuation">Property Valuation</option>
                <option value="ubuntu">Ubuntu Giving Programme</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="form-label">
              Subject <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="form_subject"
              value={formData.subject}
              onChange={handleChange}
              required
              aria-required="true"
              className="form-input"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="form-label">
              Message <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              rows={5}
              className="form-textarea"
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          <div className="my-6 flex justify-start">
            {/* Web3Forms hCaptcha implementation - using direct site key instead of proxy */}
            <div className="h-captcha" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"></div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary flex items-center justify-center w-full md:w-auto ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                </span>
              )}
            </button>
          </div>
        </form>
      )}
    </>
  )
}

export default ContactForm
