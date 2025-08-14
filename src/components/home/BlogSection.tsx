'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';
import { Article } from '@/types';
import { apiService } from '@/lib/api';

const BlogSection: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback data in case API is not available
  const fallbackArticles: Article[] = [
    {
      id: 1,
      title: 'Understanding Your Rights in Personal Injury Cases',
      excerpt: 'Learn about your legal rights and what to do immediately after an accident to protect your interests.',
      author: 'Sarah Johnson, Esq.',
      published_date: '2024-08-10',
      slug: 'understanding-personal-injury-rights',
      tags: ['Personal Injury', 'Legal Rights'],
      content: '',
      featured_image: '/images/blog/personal-injury.jpg'
    },
    {
      id: 2,
      title: 'Business Formation: Choosing the Right Entity Type',
      excerpt: 'A comprehensive guide to selecting the appropriate business structure for your venture.',
      author: 'Michael Chen, Esq.',
      published_date: '2024-08-08',
      slug: 'business-formation-guide',
      tags: ['Corporate Law', 'Business'],
      content: '',
      featured_image: '/images/blog/business-formation.jpg'
    },
    {
      id: 3,
      title: 'Family Law Mediation: A Better Path Forward',
      excerpt: 'Discover how mediation can provide a more amicable and cost-effective resolution to family disputes.',
      author: 'Emily Rodriguez, Esq.',
      published_date: '2024-08-05',
      slug: 'family-law-mediation',
      tags: ['Family Law', 'Mediation'],
      content: '',
      featured_image: '/images/blog/family-mediation.jpg'
    }
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await apiService.getFeaturedArticles(3);
        if (data && data.length > 0) {
          setArticles(data);
        } else {
          setArticles(fallbackArticles);
        }
      } catch (error) {
        console.error('Failed to fetch articles, using fallback data:', error);
        setArticles(fallbackArticles);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Legal Insights & News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-gray-200 animate-pulse rounded-lg h-80"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
            Legal Insights & News
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest legal developments, insights, and practical 
            advice from our experienced attorneys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                {article.featured_image ? (
                  <div className="w-full h-full bg-primary-300 flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-primary-600" />
                  </div>
                ) : (
                  <Calendar className="h-16 w-16 text-primary-600" />
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{article.author}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{formatDate(article.published_date)}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-primary-900 mb-3 leading-tight">
                  <Link href={`/blog/${article.slug}`} className="hover:text-primary-600 transition-colors">
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/blog/${article.slug}`} 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
