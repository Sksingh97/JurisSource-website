'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '@/types';
import { apiService } from '@/lib/api';

const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback data in case API is not available
  const fallbackTestimonials: Testimonial[] = [
    {
      id: 1,
      client_name: 'Robert Thompson',
      rating: 5,
      review: 'JurisSource provided exceptional representation during my personal injury case. Their attention to detail and dedication to my case resulted in a settlement that exceeded my expectations. I highly recommend their services.',
      case_type: 'Personal Injury',
      date: '2024-07-15'
    },
    {
      id: 2,
      client_name: 'Maria Gonzalez',
      rating: 5,
      review: 'The corporate law team at JurisSource helped us navigate a complex merger. Their expertise and professional guidance were invaluable throughout the entire process. Outstanding service!',
      case_type: 'Corporate Law',
      date: '2024-07-10'
    },
    {
      id: 3,
      client_name: 'James Wilson',
      rating: 5,
      review: 'During a difficult family law matter, the attorneys at JurisSource showed both professionalism and compassion. They helped me achieve a fair resolution while protecting my children\'s interests.',
      case_type: 'Family Law',
      date: '2024-06-25'
    },
    {
      id: 4,
      client_name: 'Lisa Chen',
      rating: 5,
      review: 'JurisSource provided excellent criminal defense representation. They fought tirelessly for my case and achieved a favorable outcome. I am grateful for their expertise and dedication.',
      case_type: 'Criminal Defense',
      date: '2024-06-20'
    },
    {
      id: 5,
      client_name: 'David Miller',
      rating: 5,
      review: 'The real estate law services were top-notch. They handled our property transaction smoothly and identified potential issues before they became problems. Highly professional team.',
      case_type: 'Real Estate Law',
      date: '2024-06-15'
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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

  if (loading) {
    return (
      <section className="section-padding bg-primary-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="bg-gray-200 animate-pulse rounded-lg h-64 max-w-4xl mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-primary-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our satisfied clients have to say 
            about their experience with JurisSource.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote className="h-16 w-16 text-primary-200 absolute top-4 left-4" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {renderStars(currentTestimonial.rating)}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center">
                "{currentTestimonial.review}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-primary-900 text-lg mb-1">
                  {currentTestimonial.client_name}
                </div>
                <div className="text-gray-600 mb-2">
                  {currentTestimonial.case_type}
                </div>
                <div className="text-sm text-gray-500">
                  {formatDate(currentTestimonial.date)}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/testimonials" className="btn-primary">
            Read All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
