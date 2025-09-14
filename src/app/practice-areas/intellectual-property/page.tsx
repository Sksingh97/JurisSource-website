import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, CheckCircle, Phone, Mail } from 'lucide-react';

export default function IntellectualPropertyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/practice-areas" className="inline-flex items-center text-green-100 hover:text-white transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              Back to Practice Areas
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="text-gold-400 mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Intellectual Property</h1>
              </div>
              <p className="text-xl text-green-100 leading-relaxed">
                Comprehensive intellectual property services including trademark, patent, and 
                copyright protection, registration, enforcement, and IP litigation services.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Why Choose Our IP Services?</h3>
              <ul className="space-y-3">
                {[
                  'Comprehensive IP protection',
                  'Registration expertise',
                  'Enforcement & litigation',
                  'Strategic IP portfolio management'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-gold-400 mr-3" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Intellectual Property Law Overview</h2>
                <div className="prose prose-lg text-dark-green-600">
                  <p>
                    Intellectual Property (IP) law protects creations of the mind, including inventions, 
                    literary and artistic works, designs, symbols, names, and images used in commerce. 
                    Our specialized IP practice provides comprehensive services for trademark, patent, 
                    copyright, and design protection and enforcement.
                  </p>
                  <p>
                    We assist individuals, startups, corporations, and institutions in developing strategic 
                    IP portfolios, securing registrations, conducting IP due diligence, and enforcing IP 
                    rights through litigation when necessary. Our team handles both domestic and 
                    international IP matters with expertise in emerging technology areas.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our Intellectual Property Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Trademark Registration",
                      description: "Comprehensive trademark search, filing, prosecution, and registration services."
                    },
                    {
                      title: "Patent Filing",
                      description: "Patent drafting, filing, prosecution, and portfolio management for inventions."
                    },
                    {
                      title: "Copyright Protection",
                      description: "Copyright registration and protection for literary, artistic, and digital works."
                    },
                    {
                      title: "IP Litigation",
                      description: "Enforcement of IP rights through infringement litigation and dispute resolution."
                    },
                    {
                      title: "Design Registration",
                      description: "Industrial design registration and protection for product designs and aesthetics."
                    },
                    {
                      title: "IP Due Diligence",
                      description: "Comprehensive IP audits and due diligence for transactions and investments."
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h3 className="font-semibold text-dark-green-900 mb-2">{service.title}</h3>
                      <p className="text-dark-green-600 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* IP Types */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Types of Intellectual Property</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Trademarks",
                      description: "Distinctive signs identifying goods/services",
                      examples: ["Brand names", "Logos", "Slogans", "Trade dress"]
                    },
                    {
                      title: "Patents",
                      description: "Protection for new inventions and innovations",
                      examples: ["Utility patents", "Design patents", "Plant patents", "Software patents"]
                    },
                    {
                      title: "Copyrights",
                      description: "Protection for original creative works",
                      examples: ["Literary works", "Musical compositions", "Software code", "Artistic works"]
                    },
                    {
                      title: "Trade Secrets",
                      description: "Confidential business information",
                      examples: ["Formulas", "Processes", "Customer lists", "Business strategies"]
                    }
                  ].map((type, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-green-200">
                      <h3 className="font-semibold text-dark-green-900 mb-2">{type.title}</h3>
                      <p className="text-dark-green-600 text-sm mb-3">{type.description}</p>
                      <ul className="text-xs text-dark-green-500">
                        {type.examples.map((example, i) => (
                          <li key={i}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* IP Laws */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">IP Legal Framework in India</h2>
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-dark-green-900 mb-4">Key IP Legislation:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-dark-green-600">
                    <div>
                      <h4 className="font-medium mb-2">Core IP Acts:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Trade Marks Act, 1999</li>
                        <li>• Patents Act, 1970</li>
                        <li>• Copyright Act, 1957</li>
                        <li>• Designs Act, 2000</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Related Laws:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Information Technology Act, 2000</li>
                        <li>• Geographical Indications Act, 1999</li>
                        <li>• Plant Varieties Protection Act, 2001</li>
                        <li>• Semiconductor Layout-Design Act, 2000</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our IP Registration Process</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "IP Assessment & Strategy",
                      description: "Comprehensive evaluation of IP assets and development of protection strategy."
                    },
                    {
                      step: "2", 
                      title: "Search & Analysis",
                      description: "Thorough prior art search and clearance analysis for registrability."
                    },
                    {
                      step: "3",
                      title: "Application Filing",
                      description: "Preparation and filing of IP applications with relevant authorities."
                    },
                    {
                      step: "4",
                      title: "Prosecution & Response",
                      description: "Managing examination process and responding to office actions."
                    },
                    {
                      step: "5",
                      title: "Registration & Maintenance",
                      description: "Securing registration and ongoing portfolio maintenance and renewals."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-green-900 mb-1">{item.title}</h3>
                        <p className="text-dark-green-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Contact Card */}
              <div className="bg-primary-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Need IP Protection?</h3>
                <p className="mb-6">
                  Contact our intellectual property experts for comprehensive IP protection and enforcement.
                </p>
                <div className="space-y-4">
                  <a href="tel:+918368980930" className="flex items-center text-gold-200 hover:text-gold-100">
                    <Phone className="mr-3" size={20} />
                    +91 83689 80930
                  </a>
                  <a href="mailto:jurissource@gmail.com" className="flex items-center text-gold-200 hover:text-gold-100">
                    <Mail className="mr-3" size={20} />
                    jurissource@gmail.com
                  </a>
                </div>
                <Link href="/contact" className="inline-block mt-6 bg-gold-500 hover:bg-gold-600 text-dark-green-900 font-semibold py-2 px-4 rounded-lg transition-colors">
                  Get Consultation
                </Link>
              </div>

              {/* Quick Services */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-dark-green-900 mb-4">Quick IP Services</h3>
                <ul className="space-y-2 text-dark-green-600 text-sm">
                  <li>• Trademark Search & Registration</li>
                  <li>• Patent Filing & Prosecution</li>
                  <li>• Copyright Registration</li>
                  <li>• Design Protection</li>
                  <li>• IP Portfolio Management</li>
                  <li>• Infringement Analysis</li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-dark-green-900 mb-4">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Civil Litigation", href: "/practice-areas/civil-litigation" },
                    { name: "Contract Management", href: "/practice-areas/contract-management" },
                    { name: "Commercial Dispute", href: "/practice-areas/commercial-dispute" },
                    { name: "Technology Law", href: "/practice-areas/civil-litigation" }
                  ].map((service, index) => (
                    <li key={index}>
                      <Link href={service.href} className="text-dark-green-600 hover:text-primary-600 transition-colors">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}