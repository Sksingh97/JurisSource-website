'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { Article } from '@/types';
import { apiService } from '@/lib/api';

export default function BlogPostPage() {
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fallback article data
  const fallbackArticles: { [key: string]: Article } = {
    'understanding-personal-injury-rights': {
      id: 1,
      title: 'Understanding Your Rights in Personal Injury Cases',
      excerpt: 'Learn about your legal rights and what to do immediately after an accident to protect your interests and maximize your potential compensation.',
      author: 'Sarah Johnson, Esq.',
      published_date: '2024-08-10',
      slug: 'understanding-personal-injury-rights',
      tags: ['Personal Injury', 'Legal Rights', 'Compensation'],
      content: `
        <p>Personal injury cases can be complex and overwhelming, especially when you're dealing with the physical and emotional aftermath of an accident. Understanding your rights is crucial to ensuring you receive the compensation you deserve.</p>

        <h2>Immediate Steps After an Accident</h2>
        <p>The actions you take immediately following an accident can significantly impact your case:</p>
        <ul>
          <li><strong>Seek medical attention immediately</strong> - Even if you feel fine, some injuries may not be immediately apparent</li>
          <li><strong>Document everything</strong> - Take photos, gather witness information, and keep detailed records</li>
          <li><strong>Contact law enforcement</strong> - File a police report when applicable</li>
          <li><strong>Avoid admitting fault</strong> - Let the investigation determine what happened</li>
          <li><strong>Contact an attorney</strong> - The sooner you have legal representation, the better</li>
        </ul>

        <h2>Types of Compensation Available</h2>
        <p>In personal injury cases, you may be entitled to various types of compensation:</p>
        <ul>
          <li><strong>Medical expenses</strong> - Both current and future medical costs</li>
          <li><strong>Lost wages</strong> - Income lost due to your inability to work</li>
          <li><strong>Pain and suffering</strong> - Compensation for physical and emotional distress</li>
          <li><strong>Property damage</strong> - Repair or replacement of damaged property</li>
          <li><strong>Loss of consortium</strong> - Impact on your relationship with your spouse</li>
        </ul>

        <h2>The Importance of Legal Representation</h2>
        <p>Insurance companies have teams of lawyers working to minimize payouts. Having experienced legal representation ensures that your rights are protected and that you receive fair compensation. An attorney can:</p>
        <ul>
          <li>Investigate your case thoroughly</li>
          <li>Negotiate with insurance companies on your behalf</li>
          <li>Ensure all paperwork is filed correctly and on time</li>
          <li>Represent you in court if necessary</li>
          <li>Help you understand the true value of your claim</li>
        </ul>

        <h2>Statute of Limitations</h2>
        <p>It's crucial to understand that personal injury claims have time limits, known as statutes of limitations. In most states, you have between one to three years to file a claim from the date of the accident. Waiting too long could result in losing your right to compensation entirely.</p>

        <h2>Conclusion</h2>
        <p>If you've been injured due to someone else's negligence, don't face the insurance companies alone. Contact an experienced personal injury attorney who can protect your rights and fight for the compensation you deserve. Remember, most personal injury attorneys work on a contingency fee basis, meaning you don't pay unless they win your case.</p>
      `,
      featured_image: '/images/blog/personal-injury.jpg'
    },
    'business-formation-guide': {
      id: 2,
      title: 'Business Formation: Choosing the Right Entity Type',
      excerpt: 'A comprehensive guide to selecting the appropriate business structure for your venture, including LLCs, corporations, and partnerships.',
      author: 'Michael Chen, Esq.',
      published_date: '2024-08-08',
      slug: 'business-formation-guide',
      tags: ['Corporate Law', 'Business Formation', 'Startups'],
      content: `
        <p>Choosing the right business entity structure is one of the most important decisions you'll make when starting a business. The structure you choose will affect your taxes, personal liability, and the way you run your business.</p>

        <h2>Sole Proprietorship</h2>
        <p>The simplest business structure, where you are the sole owner of the business.</p>
        <h3>Advantages:</h3>
        <ul>
          <li>Easy and inexpensive to form</li>
          <li>Complete control over business decisions</li>
          <li>Direct tax benefits - profits and losses pass through to personal tax return</li>
        </ul>
        <h3>Disadvantages:</h3>
        <ul>
          <li>Unlimited personal liability</li>
          <li>Difficult to raise capital</li>
          <li>Business dies with the owner</li>
        </ul>

        <h2>Partnership</h2>
        <p>A business owned by two or more people. There are general partnerships and limited partnerships.</p>
        <h3>Advantages:</h3>
        <ul>
          <li>Easy to establish</li>
          <li>Shared financial commitment</li>
          <li>Pass-through taxation</li>
        </ul>
        <h3>Disadvantages:</h3>
        <ul>
          <li>Joint personal liability</li>
          <li>Shared profits</li>
          <li>Potential for disagreements</li>
        </ul>

        <h2>Limited Liability Company (LLC)</h2>
        <p>Combines the limited liability protection of a corporation with the tax efficiencies and operational flexibility of a partnership.</p>
        <h3>Advantages:</h3>
        <ul>
          <li>Limited personal liability</li>
          <li>Tax flexibility</li>
          <li>Fewer corporate formalities</li>
          <li>Credibility with customers and vendors</li>
        </ul>
        <h3>Disadvantages:</h3>
        <ul>
          <li>Self-employment taxes may apply</li>
          <li>Limited life in some states</li>
          <li>More paperwork than sole proprietorship</li>
        </ul>

        <h2>Corporation</h2>
        <p>A legal entity that is separate and distinct from its owners. Corporations can be C-Corps or S-Corps.</p>
        <h3>C-Corporation Advantages:</h3>
        <ul>
          <li>Limited liability protection</li>
          <li>Perpetual existence</li>
          <li>Easy to transfer ownership</li>
          <li>Can raise capital through stock sales</li>
        </ul>
        <h3>C-Corporation Disadvantages:</h3>
        <ul>
          <li>Double taxation</li>
          <li>More complex tax filings</li>
          <li>Corporate formalities required</li>
        </ul>

        <h3>S-Corporation</h3>
        <p>Allows profits and losses to pass through directly to owners' personal income without being subject to corporate tax rates.</p>

        <h2>Factors to Consider</h2>
        <p>When choosing a business structure, consider:</p>
        <ul>
          <li><strong>Liability protection</strong> - How much personal asset protection do you need?</li>
          <li><strong>Tax implications</strong> - What structure offers the best tax advantages?</li>
          <li><strong>Fundraising needs</strong> - Do you plan to seek investment or go public?</li>
          <li><strong>Administrative requirements</strong> - How much complexity can you handle?</li>
          <li><strong>Future growth plans</strong> - What are your long-term business goals?</li>
        </ul>

        <h2>Getting Professional Help</h2>
        <p>Business formation is a complex process with long-term implications. It's highly recommended to consult with both an attorney and an accountant to ensure you choose the structure that best fits your specific situation and goals.</p>

        <p>The right business structure can save you thousands of dollars in taxes and protect your personal assets. Don't leave this important decision to chance - get professional guidance to make the right choice for your business.</p>
      `,
      featured_image: '/images/blog/business-formation.jpg'
    }
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const slug = params.slug as string;
        
        // Try to fetch from API first
        const data = await apiService.getArticle(slug);
        if (data) {
          setArticle(data);
        } else {
          // Use fallback data
          const fallbackArticle = fallbackArticles[slug];
          if (fallbackArticle) {
            setArticle(fallbackArticle);
          } else {
            setError('Article not found');
          }
        }
      } catch (error) {
        console.error('Failed to fetch article:', error);
        // Try fallback data
        const slug = params.slug as string;
        const fallbackArticle = fallbackArticles[slug];
        if (fallbackArticle) {
          setArticle(fallbackArticle);
        } else {
          setError('Article not found');
        }
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchArticle();
    }
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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

  if (error || !article) {
    return (
      <main>
        <Header />
        <div className="container section-padding text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
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
            <Link href="/blog" className="text-primary-600 hover:text-primary-700">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(article.published_date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>5 min read</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image Placeholder */}
          <div className="mb-8">
            <div className="h-64 lg:h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
              <Calendar className="h-24 w-24 text-primary-600" />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Share & Actions */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Need Legal Help?</h3>
                <p className="text-gray-600">Contact us for a free consultation about your legal matter.</p>
              </div>
              <div className="flex space-x-4">
                <Link href="/contact" className="btn-primary">
                  Get Consultation
                </Link>
                <button className="btn-secondary">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-2xl font-semibold text-primary-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/business-formation-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-primary-900 mb-2">Business Formation: Choosing the Right Entity Type</h4>
                <p className="text-sm text-gray-600">A comprehensive guide to selecting the appropriate business structure for your venture...</p>
              </Link>
              <Link href="/blog/family-law-mediation" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-primary-900 mb-2">Family Law Mediation: A Better Path Forward</h4>
                <p className="text-sm text-gray-600">Discover how mediation can provide a more amicable resolution to family disputes...</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
