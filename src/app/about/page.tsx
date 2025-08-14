import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Gavel, Award, Users, Target, Heart, Shield } from 'lucide-react';

export const metadata = {
  title: 'About Us - JurisSource Law Firm',
  description: 'Learn about our experienced legal team, our mission, and our commitment to providing exceptional legal services.',
};

const LawyerCard = ({ name, title, bio, specializations, experience }: {
  name: string;
  title: string;
  bio: string;
  specializations: string[];
  experience: string;
}) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full mx-auto mb-4 flex items-center justify-center">
      <Users className="h-16 w-16 text-primary-700" />
    </div>
    <h3 className="text-xl font-semibold text-primary-900 text-center mb-2">{name}</h3>
    <p className="text-primary-600 text-center mb-2">{title}</p>
    <p className="text-sm text-gold-600 text-center mb-4">{experience}</p>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
    <div className="space-y-2">
      <h4 className="font-medium text-primary-900">Specializations:</h4>
      <div className="flex flex-wrap gap-1">
        {specializations.map((spec, index) => (
          <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
            {spec}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson, Esq.',
      title: 'Founding Partner',
      experience: '15+ Years Experience',
      bio: 'Sarah founded JurisSource with a vision to provide personalized, high-quality legal services. She specializes in personal injury and has recovered millions for her clients.',
      specializations: ['Personal Injury', 'Medical Malpractice', 'Product Liability']
    },
    {
      name: 'Michael Chen, Esq.',
      title: 'Senior Partner',
      experience: '12+ Years Experience',
      bio: 'Michael leads our corporate law division and has extensive experience in business formation, mergers, and complex commercial transactions.',
      specializations: ['Corporate Law', 'Business Formation', 'M&A']
    },
    {
      name: 'Emily Rodriguez, Esq.',
      title: 'Partner',
      experience: '10+ Years Experience',
      bio: 'Emily is known for her compassionate approach to family law matters. She helps clients navigate difficult situations with sensitivity and expertise.',
      specializations: ['Family Law', 'Divorce', 'Child Custody']
    },
    {
      name: 'David Wilson, Esq.',
      title: 'Senior Associate',
      experience: '8+ Years Experience',
      bio: 'David provides aggressive criminal defense representation and has successfully defended clients in a wide range of criminal matters.',
      specializations: ['Criminal Defense', 'DUI', 'White Collar Crimes']
    }
  ];

  const values = [
    {
      icon: <Gavel className="h-12 w-12" />,
      title: 'Justice',
      description: 'We are committed to upholding justice and fighting for what\'s right for our clients.'
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: 'Compassion',
      description: 'We understand that legal issues are often stressful and approach each case with empathy.'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and are transparent in all our dealings.'
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Results',
      description: 'We are focused on achieving the best possible outcomes for our clients.'
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
              About JurisSource
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              For over 25 years, we have been dedicated to providing exceptional legal 
              representation with a personal touch. Our experienced team is committed 
              to protecting your rights and achieving the best possible outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At JurisSource, our mission is to provide exceptional legal services 
                that protect our clients' rights and interests. We believe that everyone 
                deserves quality legal representation, regardless of their background or 
                the complexity of their case.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We strive to build lasting relationships with our clients based on trust, 
                communication, and results. Our commitment extends beyond just winning cases—we 
                aim to be advisors, advocates, and partners in your legal journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Award className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-900">95%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-900">1000+</h3>
                <p className="text-gray-600">Clients Served</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-primary-600 flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Meet Our Legal Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced attorneys bring decades of combined experience and 
              are dedicated to providing the highest quality legal representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <LawyerCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-primary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 text-center mb-12">Our History</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1999
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Founded</h3>
                  <p className="text-gray-600">
                    JurisSource was founded by Sarah Johnson with a mission to provide 
                    personalized legal services to the community.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2005
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    Added corporate law division and expanded team to serve business clients 
                    throughout the region.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2015
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Recognition</h3>
                  <p className="text-gray-600">
                    Recognized as one of the top law firms in the region, with multiple 
                    attorneys receiving industry awards.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2024
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">Today</h3>
                  <p className="text-gray-600">
                    Continuing to grow and serve clients with the same dedication to 
                    excellence that has defined us for 25+ years.
                  </p>
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
