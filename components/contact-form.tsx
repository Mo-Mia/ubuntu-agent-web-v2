"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Send, AlertCircle, CheckCircle } from "lucide-react"
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
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage("")

    try {
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus("success");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          interest: "buying",
        });
        
        // Reset reCAPTCHA
        if (typeof window !== 'undefined' && (window as any).grecaptcha) {
          (window as any).grecaptcha.reset();
        }
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      
      <form 
        onSubmit={handleSubmit} 
        action="https://api.web3forms.com/submit" 
        method="POST" 
        className="space-y-6" 
        aria-label="Contact form"
      >
        {/* Web3Forms Access Key */}
        <input type="hidden" name="access_key" value="87b52da1-b119-44a1-a6cb-2a13eb7c16e3" />
        
        {/* Redirect URL on success */}
        <input type="hidden" name="redirect" value="https://theubuntuagent.com/contact?success=true" />
        
        {/* Subject field for email */}
        <input type="hidden" name="subject" value={`New contact form submission: ${formData.subject}`} />
        
        {/* BCC field for email notifications */}
        <input type="hidden" name="bcc" value="momia@projectmohem.co.za" />
        
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
          <div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
        </div>

        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-start" role="alert">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-medium">There was an error submitting your form</p>
              {errorMessage && <p className="text-sm">{errorMessage}</p>}
            </div>
          </div>
        )}

        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-start" role="alert">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-medium">Thank you for your message!</p>
              <p className="text-sm">We'll get back to you shortly.</p>
            </div>
          </div>
        )}

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
    </>
  )
}

export default ContactForm
