'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Gavel, FileText, Users, Building, Home, Briefcase, ArrowRight } from 'lucide-react';
import { Service } from '@/types';
import { apiService } from '@/lib/api';

const ServicesSection: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback data in case API is not available
  const fallbackServices: Service[] = [
    {
      id: 1,
      title: 'Mediation Services',
      description: 'Professional mediation to help parties reach mutually acceptable agreements in a confidential setting.',
      features: ['Confidential proceedings', 'Neutral mediator', 'Cost-effective solution', 'Flexible scheduling'],
      icon: 'users'
    },
    {
      id: 2,
      title: 'Arbitration',
      description: 'Binding arbitration services for commercial and civil disputes with experienced arbitrators.',
      features: ['Faster than court litigation', 'Expert arbitrators', 'Confidential process', 'Final and binding awards'],
      icon: 'scale'
    },
    {
      id: 3,
      title: 'Commercial Disputes',
      description: 'Specialized resolution of business and commercial conflicts through various ADR methods.',
      features: ['Business conflict resolution', 'Contract disputes', 'Partnership disputes', 'Corporate mediation'],
      icon: 'building'
    },
    {
      id: 4,
      title: 'Family Dispute Resolution',
      description: 'Sensitive handling of family conflicts with focus on preserving relationships.',
      features: ['Divorce mediation', 'Child custody matters', 'Property settlements', 'Family counseling'],
      icon: 'home'
    },
    {
      id: 5,
      title: 'Employment Disputes',
      description: 'Resolution of workplace conflicts and employment-related disputes.',
      features: ['Workplace mediation', 'Wrongful termination', 'Discrimination cases', 'HR consulting'],
      icon: 'briefcase'
    },
    {
      id: 6,
      title: 'Legal Consultation',
      description: 'Expert legal advice and consultation on dispute prevention and resolution strategies.',
      features: ['Legal advisory', 'Risk assessment', 'Dispute prevention', 'Strategic planning'],
      icon: 'file-text'
    }
  ];

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'users': return <Users className="h-8 w-8" />;
      case 'building': return <Building className="h-8 w-8" />;
      case 'home': return <Home className="h-8 w-8" />;
      case 'scale': return <Gavel className="h-8 w-8" />;
      case 'briefcase': return <Briefcase className="h-8 w-8" />;
      case 'file-text': return <FileText className="h-8 w-8" />;
      default: return <Gavel className="h-8 w-8" />;
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await apiService.getServices();
        if (data && data.length > 0) {
          setServices(data.slice(0, 6));
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
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Our Practice Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gray-200 animate-pulse rounded-lg h-64"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Dispute Resolution Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive alternative dispute resolution services, specializing in 
            mediation, arbitration, and other efficient conflict resolution methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="text-accent-600 mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              {service.price && (
                <div className="text-accent-600 font-semibold mb-4">
                  Starting at {service.price}
                </div>
              )}
              <Link href={`/services/${service.id}`} className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
