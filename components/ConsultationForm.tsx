"use client"

import React, { useState } from 'react';
import { DatePicker } from './ui/DatePicker';
import { addDays, startOfToday, format } from 'date-fns';
import Script from 'next/script';

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentDate: null as Date | null,
    message: '',
    preferredContact: 'email',
    interest: 'consultation' as 'buying' | 'selling' | 'valuation' | 'ubuntu' | 'consultation' | 'other',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear the error when field is changed
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({ ...prev, appointmentDate: date }));
    // Clear the error when date is changed
    if (errors.appointmentDate) {
      setErrors(prev => ({ ...prev, appointmentDate: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.appointmentDate) newErrors.appointmentDate = 'Please select a preferred date';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSubmitting(true);
    
    try {
      const formElement = e.target as HTMLFormElement;
      const formDataObj = new FormData(formElement);
      
      // Add formatted appointment date
      if (formData.appointmentDate) {
        formDataObj.append('appointmentDate', format(formData.appointmentDate, 'yyyy-MM-dd'));
      }
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          appointmentDate: null,
          message: '',
          preferredContact: 'email',
          interest: 'consultation',
        });
        
        // Reset reCAPTCHA
        if (typeof window !== 'undefined' && (window as any).grecaptcha) {
          (window as any).grecaptcha.reset();
        }
      } else {
        throw new Error(data.message || "Something went wrong with the submission");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ 
        form: error instanceof Error 
          ? error.message 
          : 'Failed to submit form. Please try again or contact us directly.'
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  // Business hours: Mon-Fri
  const excludeWeekends = Array.from({ length: 60 }, (_, i) => {
    const date = addDays(startOfToday(), i);
    return date.getDay() === 0 || date.getDay() === 6 ? date : null;
  }).filter(Boolean) as Date[];
  
  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        {submitted ? (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">
              Your consultation request has been received. Gary will contact you within 24 hours to confirm your appointment details.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit} 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="space-y-4"
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="87b52da1-b119-44a1-a6cb-2a13eb7c16e3" />
            
            {/* Redirect URL on success */}
            <input type="hidden" name="redirect" value="https://theubuntuagent.com/contact?success=true" />
            
            {/* Subject field for email */}
            <input type="hidden" name="subject" value="New Consultation Request" />
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Schedule a Consultation</h2>
            
            {errors.form && (
              <div className="bg-red-50 p-3 rounded-md flex items-start space-x-2">
                <svg className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-red-600">{errors.form}</span>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                    ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                    ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                    ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="preferredContact" className="text-sm font-medium text-gray-700">
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="interest" className="text-sm font-medium text-gray-700">
                I'm interested in
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="px-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="consultation">A consultation</option>
                <option value="buying">Buying property</option>
                <option value="selling">Selling property</option>
                <option value="valuation">Property valuation</option>
                <option value="ubuntu">The Ubuntu Giving Programme</option>
                <option value="other">Other inquiry</option>
              </select>
            </div>
            
            {/* Appointment Date Picker */}
            <DatePicker
              label="Preferred Consultation Date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleDateChange}
              excludeDates={excludeWeekends}
              errorMessage={errors.appointmentDate}
              required
              placeholder="Select your preferred date"
              minDate={startOfToday()}
              maxDate={addDays(startOfToday(), 60)}
            />
            
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your real estate needs..."
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            
            <div className="my-6 flex justify-start">
              <div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full px-4 py-3 bg-amber-600 text-white rounded-md font-medium
                  ${submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-amber-700'}
                  transition-colors`}
              >
                {submitting ? 'Submitting...' : 'Schedule Consultation'}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
} 