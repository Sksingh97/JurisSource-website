'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { apiService } from '@/lib/api';
import { ContactForm } from '@/types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const success = await apiService.submitContactForm(data);
      if (success) {
        setSubmitSuccess(true);
        reset();
      } else {
        setSubmitError('Failed to send message. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitError('An error occurred. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Phone',
      primary: '+91 83689 80930',
      secondary: 'Call anytime',
      action: 'tel:+918368980930',
      description: 'Mon-Fri: 8am-6pm, Sat: 9am-1pm'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email',
      primary: 'jurissource@gmail.com',
      secondary: '+91 83689 80930',
      action: 'mailto:jurissource@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Delhi Office',
      primary: '37, Ground Floor, Site - 2, Block C',
      secondary: 'Vikaspuri, Delhi, 110018',
      action: '#',
      description: 'Free parking available'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Business Hours',
      primary: 'Monday - Friday: 8:00 AM - 6:00 PM',
      secondary: 'Saturday: 9:00 AM - 1:00 PM',
      action: '#',
      description: 'Emergency consultations available'
    }
  ];

  const faqs = [
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer free initial consultations for most practice areas. This allows us to understand your case and discuss how we can help.'
    },
    {
      question: 'How quickly will you respond to my inquiry?',
      answer: 'We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly for immediate assistance.'
    },
    {
      question: 'What should I bring to my first consultation?',
      answer: 'Bring any relevant documents, correspondence, contracts, or evidence related to your legal matter. We\'ll provide a specific list based on your case type.'
    },
    {
      question: 'Do you handle cases outside your local area?',
      answer: 'Yes, depending on the practice area and case type. We can handle many matters remotely or associate with local counsel when necessary.'
    }
  ];

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Ready to discuss your legal needs? Get in touch with our experienced 
              legal team for a free consultation. We're here to help you navigate 
              your legal challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-primary-600 flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  {item.title}
                </h3>
                {item.action.startsWith('#') ? (
                  <div className="space-y-1 mb-3">
                    <p className="font-medium text-gray-800">{item.primary}</p>
                    <p className="text-gray-600">{item.secondary}</p>
                  </div>
                ) : (
                  <div className="space-y-1 mb-3">
                    <a href={item.action} className="block text-primary-600 font-medium hover:text-primary-700">
                      {item.primary}
                    </a>
                    {item.secondary && (
                      <p className="text-gray-600">{item.secondary}</p>
                    )}
                  </div>
                )}
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Send us a Message
              </h2>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-700 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="What can we help you with?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Please describe your legal matter or question in detail..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-600">{submitError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map and Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Visit Our Offices
              </h2>
              
              {/* Office Locations */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3 flex items-center">
                    <MapPin className="h-5 w-5 text-gold-500 mr-2" />
                    Delhi Office
                  </h3>
                  <div className="text-gray-700 space-y-1">
                    <p>37, Ground Floor, Site - 2</p>
                    <p>Block C, Vikaspuri</p>
                    <p>Delhi, 110018</p>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3 flex items-center">
                    <MapPin className="h-5 w-5 text-gold-500 mr-2" />
                    Greater Noida Office
                  </h3>
                  <div className="text-gray-700 space-y-1">
                    <p>Plot No 7, E-Block</p>
                    <p>Sector 2, Greater Noida West</p>
                    <p>201207</p>
                  </div>
                </div>
              </div>
              
              {/* Placeholder for Google Maps */}
              <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Google Maps would be embedded here</p>
                  <p className="text-sm text-gray-500 mt-1">Multiple Office Locations</p>
                </div>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  Office Information
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-2" />
                    Free parking available
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-2" />
                    Wheelchair accessible
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-2" />
                    Conference rooms available
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-2" />
                    Virtual consultations offered
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Emergency Contact
                </h3>
                <p className="text-gray-700 mb-3">
                  For urgent legal matters that require immediate attention:
                </p>
                <div className="space-y-2">
                  <a href="tel:+918368980930" className="block text-primary-600 font-semibold hover:text-primary-700">
                    Emergency Line: +91 83689 80930
                  </a>
                  <p className="text-sm text-gray-500">
                    Available 24/7 for existing clients and emergency situations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
