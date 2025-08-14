'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';
import { Service } from '@/types';
import { apiService } from '@/lib/api';

export default function ServiceDetailPage() {
  const params = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fallback service data
  const fallbackServices: { [key: string]: Service } = {
    '1': {
      id: 1,
      title: 'Personal Injury',
      description: 'We fight for maximum compensation for victims of accidents, medical malpractice, and wrongful death cases. Our experienced personal injury attorneys have recovered millions of dollars for our clients.',
      features: [
        'Free initial consultation',
        'No fee unless we win your case',
        'Experienced in all types of injuries',
        '24/7 client support',
        'Proven track record of success',
        'Medical expert network',
        'Insurance company negotiation',
        'Trial experience when needed'
      ],
      price: 'Contingency Fee - No Win, No Fee',
      icon: 'users'
    },
    '2': {
      id: 2,
      title: 'Corporate Law',
      description: 'Comprehensive legal services for businesses of all sizes, from startups to established corporations. We help businesses navigate complex legal challenges and opportunities.',
      features: [
        'Business formation and structuring',
        'Contract drafting and review',
        'Mergers and acquisitions',
        'Employment law compliance',
        'Intellectual property protection',
        'Regulatory compliance',
        'Corporate governance',
        'Commercial litigation'
      ],
      price: 'Starting at $300/hour',
      icon: 'building'
    }
  };

  useEffect(() => {
    const fetchService = async () => {
      try {
        const serviceId = parseInt(params.id as string);
        if (isNaN(serviceId)) {
          setError('Invalid service ID');
          setLoading(false);
          return;
        }

        // Try to fetch from API first
        const data = await apiService.getService(serviceId);
        if (data) {
          setService(data);
        } else {
          // Use fallback data
          const fallbackService = fallbackServices[serviceId.toString()];
          if (fallbackService) {
            setService(fallbackService);
          } else {
            setError('Service not found');
          }
        }
      } catch (error) {
        console.error('Failed to fetch service:', error);
        // Try fallback data
        const serviceId = params.id as string;
        const fallbackService = fallbackServices[serviceId];
        if (fallbackService) {
          setService(fallbackService);
        } else {
          setError('Service not found');
        }
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchService();
    }
  }, [params.id]);

  if (loading) {
    return (
      <main>
        <Header />
        <div className="container section-padding">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !service) {
    return (
      <main>
        <Header />
        <div className="container section-padding text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services" className="btn-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/services" className="text-primary-600 hover:text-primary-700">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Link href="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Services
              </Link>
              
              <h1 className="text-4xl font-bold text-primary-900 mb-6">
                {service.title}
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <h2 className="text-2xl font-semibold text-primary-900 mb-4">
                  What We Offer
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {service.price && (
                  <div className="bg-primary-50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Pricing</h3>
                    <p className="text-primary-700 text-lg font-medium">{service.price}</p>
                  </div>
                )}

                <h2 className="text-2xl font-semibold text-primary-900 mb-4">
                  Why Choose JurisSource?
                </h2>
                
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                    <span>Over 25 years of combined experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                    <span>Proven track record of successful outcomes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                    <span>Personalized attention to every case</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                    <span>Transparent communication throughout the process</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Contact Card */}
                <div className="bg-primary-600 text-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6">
                    Contact us today for a free consultation about your {service.title.toLowerCase()} matter.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="tel:+918368980930"
                      className="flex items-center space-x-3 text-white hover:text-gold-200 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>+91 83689 80930</span>
                    </a>
                    <a 
                      href="mailto:jurissource@gmail.com"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      <span>jurissource@gmail.com</span>
                    </a>
                  </div>
                  <div className="mt-6 pt-6 border-t border-primary-500">
                    <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 w-full text-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Consultation
                    </Link>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Free Consultation:</strong> Yes</li>
                    <li><strong>Response Time:</strong> Within 24 hours</li>
                    <li><strong>Experience:</strong> 25+ years</li>
                    <li><strong>Success Rate:</strong> 95%+</li>
                  </ul>
                </div>

                {/* Related Services */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">Related Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/1" className="text-primary-600 hover:text-primary-700 text-sm">
                        Personal Injury
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/2" className="text-primary-600 hover:text-primary-700 text-sm">
                        Corporate Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="text-primary-600 hover:text-primary-700 text-sm">
                        View All Services →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
