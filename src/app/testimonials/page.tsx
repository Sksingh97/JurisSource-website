'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Quote, Filter } from 'lucide-react';
import { Testimonial } from '@/types';
import { apiService } from '@/lib/api';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-gold-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <Quote className="h-12 w-12 text-primary-200 absolute top-4 right-4" />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          {renderStars(testimonial.rating)}
        </div>
        
        <blockquote className="text-gray-700 leading-relaxed mb-6">
          "{testimonial.review}"
        </blockquote>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="font-semibold text-primary-900 mb-1">
            {testimonial.client_name}
          </div>
          {testimonial.case_type && (
            <div className="text-primary-600 text-sm mb-2">
              {testimonial.case_type}
            </div>
          )}
          <div className="text-sm text-gray-500">
            {formatDate(testimonial.date)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCaseType, setSelectedCaseType] = useState('');

  // Expanded fallback data
  const fallbackTestimonials: Testimonial[] = [
    {
      id: 1,
      client_name: 'Robert Thompson',
      rating: 5,
      review: 'JurisSource provided exceptional representation during my personal injury case. Their attention to detail and dedication to my case resulted in a settlement that exceeded my expectations. Sarah Johnson and her team were professional, compassionate, and always available to answer my questions. I highly recommend their services to anyone seeking top-notch legal representation.',
      case_type: 'Personal Injury',
      date: '2024-07-15'
    },
    {
      id: 2,
      client_name: 'Maria Gonzalez',
      rating: 5,
      review: 'The corporate law team at JurisSource helped us navigate a complex merger and acquisition. Michael Chen\'s expertise and professional guidance were invaluable throughout the entire process. They made what could have been a stressful situation manageable and successful. Outstanding service and highly knowledgeable team!',
      case_type: 'Corporate Law',
      date: '2024-07-10'
    },
    {
      id: 3,
      client_name: 'James Wilson',
      rating: 5,
      review: 'During a difficult family law matter involving child custody, the attorneys at JurisSource showed both professionalism and genuine compassion. Emily Rodriguez helped me achieve a fair resolution while always keeping my children\'s best interests at heart. Their sensitivity and expertise made all the difference during a challenging time.',
      case_type: 'Family Law',
      date: '2024-06-25'
    },
    {
      id: 4,
      client_name: 'Lisa Chen',
      rating: 5,
      review: 'JurisSource provided excellent criminal defense representation for my case. David Wilson fought tirelessly and achieved a favorable outcome that I didn\'t think was possible. His knowledge of the law and strategic approach were impressive. I am grateful for their expertise and dedication to protecting my rights.',
      case_type: 'Criminal Defense',
      date: '2024-06-20'
    },
    {
      id: 5,
      client_name: 'David Miller',
      rating: 5,
      review: 'The real estate law services were top-notch. They handled our commercial property transaction smoothly and identified potential issues before they became problems. The team\'s thoroughness and attention to detail saved us from costly mistakes. Highly professional and knowledgeable team.',
      case_type: 'Real Estate Law',
      date: '2024-06-15'
    },
    {
      id: 6,
      client_name: 'Jennifer Adams',
      rating: 5,
      review: 'JurisSource helped me with an employment law matter involving workplace discrimination. They were professional, understanding, and fought hard for my rights. The team kept me informed throughout the process and achieved a settlement that was fair and just. I couldn\'t be happier with the outcome.',
      case_type: 'Employment Law',
      date: '2024-06-10'
    },
    {
      id: 7,
      client_name: 'Michael Brown',
      rating: 5,
      review: 'After a car accident left me with serious injuries, JurisSource took care of everything. They dealt with the insurance companies, medical bills, and all the legal complexities while I focused on recovery. Their dedication resulted in a substantial settlement that will help secure my family\'s future.',
      case_type: 'Personal Injury',
      date: '2024-05-28'
    },
    {
      id: 8,
      client_name: 'Susan Rodriguez',
      rating: 5,
      review: 'The family law team helped me through a difficult divorce with professionalism and empathy. They explained every step of the process clearly and worked hard to protect my interests and those of my children. I felt supported throughout the entire ordeal. Excellent attorneys who truly care about their clients.',
      case_type: 'Family Law',
      date: '2024-05-20'
    },
    {
      id: 9,
      client_name: 'Thomas Johnson',
      rating: 5,
      review: 'JurisSource assisted our startup with business formation and contract negotiations. Their corporate law expertise was invaluable in helping us structure our company properly from the beginning. Michael Chen and his team provided clear guidance and helped us avoid potential pitfalls. Highly recommended for any business legal needs.',
      case_type: 'Corporate Law',
      date: '2024-05-15'
    },
    {
      id: 10,
      client_name: 'Patricia Davis',
      rating: 5,
      review: 'The criminal defense representation was exceptional. When I was facing serious charges, David Wilson provided aggressive defense that ultimately led to all charges being dropped. His knowledge of criminal law and courtroom experience were evident throughout the case. I am forever grateful for their dedication.',
      case_type: 'Criminal Defense',
      date: '2024-05-10'
    }
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await apiService.getTestimonials();
        if (data && data.length > 0) {
          setTestimonials(data);
        } else {
          setTestimonials(fallbackTestimonials);
        }
      } catch (error) {
        console.error('Failed to fetch testimonials, using fallback data:', error);
        setTestimonials(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Get unique case types for filter
  const caseTypes = Array.from(new Set(testimonials.map(t => t.case_type).filter(Boolean)));

  // Filter testimonials by case type
  const filteredTestimonials = selectedCaseType === '' 
    ? testimonials 
    : testimonials.filter(t => t.case_type === selectedCaseType);

  // Calculate average rating
  const averageRating = testimonials.length > 0 
    ? testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length 
    : 5;

  if (loading) {
    return (
      <main>
        <Header />
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                Client Testimonials
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-gray-200 animate-pulse rounded-lg h-64"></div>
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
              Client Testimonials
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Don't just take our word for it. Read what our satisfied clients 
              have to say about their experience with JurisSource Law Firm.
            </p>
            
            {/* Rating Summary */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <div className="flex items-center justify-center mb-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className={`h-6 w-6 ${index < Math.round(averageRating) ? 'text-gold-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-lg">
                <span className="font-bold">{averageRating.toFixed(1)}</span> out of 5 stars
              </p>
              <p className="text-sm text-primary-200">
                Based on {testimonials.length} client reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container">
          <div className="flex items-center justify-center space-x-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <select
              value={selectedCaseType}
              onChange={(e) => setSelectedCaseType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">All Practice Areas</option>
              {caseTypes.map((caseType, index) => (
                <option key={index} value={caseType}>{caseType}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No testimonials found for the selected practice area.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join our satisfied clients and get the legal representation you deserve. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                Get Free Consultation
              </a>
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
