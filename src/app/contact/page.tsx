'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    legalMatter: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Get in touch with our legal experts for professional consultation and legal services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-dark-green-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-dark-green-600 mb-8">
                Ready to discuss your legal matters? Contact Juris Source today for expert legal consultation 
                and professional dispute resolution services.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-900 mb-1">Phone</h3>
                    <p className="text-dark-green-600">+91-83689 80930</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-900 mb-1">Email</h3>
                    <p className="text-dark-green-600">jurissource@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-900 mb-1">Office Locations</h3>
                    <p className="text-dark-green-600">Delhi & Greater Noida</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-green-900 mb-1">Office Hours</h3>
                    <p className="text-dark-green-600">Mon – Sat: 09:00-18:00</p>
                    <p className="text-dark-green-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-green-50 p-8 rounded-xl border border-green-100">
              <h3 className="text-2xl font-bold text-dark-green-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-dark-green-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-dark-green-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-green-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-green-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="legalMatter" className="block text-sm font-medium text-dark-green-700 mb-2">
                    Legal Matter Type
                  </label>
                  <select
                    id="legalMatter"
                    name="legalMatter"
                    value={formData.legalMatter}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  >
                    <option value="">Select legal matter type</option>
                    <option value="debt-recovery">Debt Recovery</option>
                    <option value="arbitration">Arbitration</option>
                    <option value="taxation">Taxation</option>
                    <option value="commercial-dispute">Commercial Dispute</option>
                    <option value="civil-litigation">Civil Litigation</option>
                    <option value="contract-management">Contract Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-green-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-vertical"
                    placeholder="Please describe your legal matter and how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Notice */}
      <section className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border border-green-100">
            <h3 className="text-xl font-bold text-dark-green-900 mb-4">Professional Legal Services</h3>
            <p className="text-dark-green-600 leading-relaxed">
              <strong>Advocate Rashmi Singh</strong> and the Juris Source team provide comprehensive legal services 
              in debt recovery, arbitration, taxation, and commercial disputes. We handle all types of civil litigation 
              matters with professional expertise and client-focused approach.
            </p>
            <div className="mt-6 p-4 bg-gold-50 rounded-lg border border-gold-200">
              <p className="text-sm text-dark-green-600">
                <strong>Note:</strong> Initial consultation fees may apply. All communications are confidential 
                and subject to attorney-client privilege. Please provide accurate information for effective legal assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}