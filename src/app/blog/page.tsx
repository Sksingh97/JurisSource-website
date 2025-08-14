'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Article } from '@/types';
import { apiService } from '@/lib/api';

const ArticleCard = ({ article }: { article: Article }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
        <Calendar className="h-16 w-16 text-primary-600" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <User className="h-4 w-4 mr-1" />
          <span className="mr-4">{article.author}</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{formatDate(article.published_date)}</span>
        </div>
        
        <h2 className="text-xl font-semibold text-primary-900 mb-3 leading-tight">
          <Link href={`/blog/${article.slug}`} className="hover:text-primary-600 transition-colors">
            {article.title}
          </Link>
        </h2>
        
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
  );
};

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Expanded fallback data
  const fallbackArticles: Article[] = [
    {
      id: 1,
      title: 'Understanding Your Rights in Personal Injury Cases',
      excerpt: 'Learn about your legal rights and what to do immediately after an accident to protect your interests and maximize your potential compensation.',
      author: 'Sarah Johnson, Esq.',
      published_date: '2024-08-10',
      slug: 'understanding-personal-injury-rights',
      tags: ['Personal Injury', 'Legal Rights', 'Compensation'],
      content: '',
      featured_image: '/images/blog/personal-injury.jpg'
    },
    {
      id: 2,
      title: 'Business Formation: Choosing the Right Entity Type',
      excerpt: 'A comprehensive guide to selecting the appropriate business structure for your venture, including LLCs, corporations, and partnerships.',
      author: 'Michael Chen, Esq.',
      published_date: '2024-08-08',
      slug: 'business-formation-guide',
      tags: ['Corporate Law', 'Business Formation', 'Startups'],
      content: '',
      featured_image: '/images/blog/business-formation.jpg'
    },
    {
      id: 3,
      title: 'Family Law Mediation: A Better Path Forward',
      excerpt: 'Discover how mediation can provide a more amicable and cost-effective resolution to family disputes, preserving relationships and reducing stress.',
      author: 'Emily Rodriguez, Esq.',
      published_date: '2024-08-05',
      slug: 'family-law-mediation',
      tags: ['Family Law', 'Mediation', 'Divorce'],
      content: '',
      featured_image: '/images/blog/family-mediation.jpg'
    },
    {
      id: 4,
      title: 'Criminal Defense: Your Rights During Police Questioning',
      excerpt: 'Know your constitutional rights when questioned by police and how to protect yourself during criminal investigations.',
      author: 'David Wilson, Esq.',
      published_date: '2024-08-01',
      slug: 'rights-during-police-questioning',
      tags: ['Criminal Defense', 'Legal Rights', 'Police'],
      content: '',
      featured_image: '/images/blog/criminal-defense.jpg'
    },
    {
      id: 5,
      title: 'Real Estate Transactions: Key Legal Considerations',
      excerpt: 'Essential legal aspects to consider when buying or selling property to ensure a smooth and secure transaction.',
      author: 'Michael Chen, Esq.',
      published_date: '2024-07-28',
      slug: 'real-estate-legal-considerations',
      tags: ['Real Estate', 'Property Law', 'Transactions'],
      content: '',
      featured_image: '/images/blog/real-estate.jpg'
    },
    {
      id: 6,
      title: 'Employment Law: Workplace Discrimination and Harassment',
      excerpt: 'Understanding your rights as an employee and employer responsibilities regarding workplace discrimination and harassment.',
      author: 'Emily Rodriguez, Esq.',
      published_date: '2024-07-25',
      slug: 'workplace-discrimination-harassment',
      tags: ['Employment Law', 'Discrimination', 'Workplace Rights'],
      content: '',
      featured_image: '/images/blog/employment-law.jpg'
    }
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await apiService.getArticles(currentPage, 10);
        if (data && data.articles && data.articles.length > 0) {
          setArticles(data.articles);
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
  }, [currentPage]);

  // Get unique tags for filter
  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

  // Filter articles based on search and tag
  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === '' || article.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  if (loading) {
    return (
      <main>
        <Header />
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                Legal Insights & News
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
              Legal Insights & News
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Stay informed with the latest legal developments, practical advice, 
              and insights from our experienced legal team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Categories</option>
                {allTags.map((tag, index) => (
                  <option key={index} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary-600">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Legal News
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Subscribe to our newsletter for the latest legal insights and updates 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-gold-400"
              />
              <button className="btn-primary bg-gold-500 border-gold-500 hover:bg-gold-600 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
