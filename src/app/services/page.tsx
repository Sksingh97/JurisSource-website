'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Gavel, FileText, Users, Building, Home, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import { Service } from '@/types';
import { apiService } from '@/lib/api';

const ServiceCard = ({ service }: { service: Service }) => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'users': return <Users className="h-12 w-12" />;
      case 'building': return <Building className="h-12 w-12" />;
      case 'home': return <Home className="h-12 w-12" />;
      case 'scale': return <Gavel className="h-12 w-12" />;
      case 'briefcase': return <Briefcase className="h-12 w-12" />;
      case 'file-text': return <FileText className="h-12 w-12" />;
      default: return <Gavel className="h-12 w-12" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 p-8">
      <div className="text-primary-600 mb-6">
        {getIcon(service.icon)}
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      <div className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      {service.price && (
        <div className="text-primary-600 font-semibold text-lg mb-4">
          Starting at {service.price}
        </div>
      )}
      <Link 
        href={`/services/${service.id}`}
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // Expanded fallback data
  const fallbackServices: Service[] = [
    {
      id: 1,
      title: 'Personal Injury',
      description: 'We fight for maximum compensation for victims of accidents, medical malpractice, and wrongful death cases.',
      features: [
        'Free initial consultation',
        'No fee unless we win your case',
        'Experienced in all types of injuries',
        '24/7 client support',
        'Proven track record of success'
      ],
      price: 'Contingency Fee',
      icon: 'users'
    },
    {
      id: 2,
      title: 'Corporate Law',
      description: 'Comprehensive legal services for businesses, from startups to established corporations.',
      features: [
        'Business formation and structuring',
        'Contract drafting and review',
        'Mergers and acquisitions',
        'Employment law compliance',
        'Intellectual property protection'
      ],
      price: '$300/hour',
      icon: 'building'
    },
    {
      id: 3,
      title: 'Family Law',
      description: 'Compassionate representation for all family law matters with focus on protecting your interests.',
      features: [
        'Divorce and separation',
        'Child custody and support',
        'Spousal support/alimony',
        'Property division',
        'Adoption services'
      ],
      price: '$250/hour',
      icon: 'home'
    },
    {
      id: 4,
      title: 'Criminal Defense',
      description: 'Aggressive defense representation for all criminal charges, protecting your rights and freedom.',
      features: [
        'DUI and traffic violations',
        'Drug-related charges',
        'White collar crimes',
        'Theft and property crimes',
        'Appeals and post-conviction relief'
      ],
      price: '$350/hour',
      icon: 'scale'
    },
    {
      id: 5,
      title: 'Real Estate Law',
      description: 'Expert guidance for all real estate transactions and property-related legal matters.',
      features: [
        'Residential and commercial transactions',
        'Title examination and insurance',
        'Property disputes and litigation',
        'Zoning and land use issues',
        'Landlord-tenant matters'
      ],
      price: '$275/hour',
      icon: 'briefcase'
    },
    {
      id: 6,
      title: 'Employment Law',
      description: 'Protecting both employee rights and employer interests in workplace legal matters.',
      features: [
        'Wrongful termination claims',
        'Discrimination and harassment',
        'Employment contract review',
        'Wage and hour disputes',
        'Workplace safety issues'
      ],
      price: '$300/hour',
      icon: 'file-text'
    }
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await apiService.getServices();
        if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices(fallbackServices);
        }
      } catch (error) {
        console.error('Failed to fetch services, using fallback data:', error);
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <main>
        <Header />
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                Our Legal Services
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-gray-200 animate-pulse rounded-lg h-96"></div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Legal Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We provide comprehensive legal representation across multiple practice areas. 
              Our experienced attorneys are dedicated to achieving the best possible outcomes 
              for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Don't See Your Legal Issue Listed?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We handle many other legal matters. Contact us today to discuss 
              your specific situation and learn how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                Get Free Consultation
              </Link>
              <a href="tel:+918368980930" className="btn-primary bg-gold-500 border-gold-500 hover:bg-gold-600">
                Call +91 83689 80930
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
