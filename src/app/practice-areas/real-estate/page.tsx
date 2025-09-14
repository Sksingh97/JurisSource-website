import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Building, CheckCircle, Phone, Mail } from 'lucide-react';

export default function RealEstatePage() {
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
                <Building className="text-gold-400 mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Real Estate Law</h1>
              </div>
              <p className="text-xl text-green-100 leading-relaxed">
                Comprehensive real estate legal services including property transactions, disputes, 
                regulatory compliance, and strategic real estate advisory services.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Real Estate Services?</h3>
              <ul className="space-y-3">
                {[
                  'Expert property law knowledge',
                  'Transaction security',
                  'Regulatory compliance',
                  'Dispute resolution expertise'
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
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Real Estate Law Overview</h2>
                <div className="prose prose-lg text-dark-green-600">
                  <p>
                    Real estate law encompasses a wide range of legal matters related to property ownership, 
                    transfer, development, and use. Our experienced real estate legal team provides 
                    comprehensive services for residential, commercial, and industrial property matters, 
                    ensuring secure transactions and protecting client interests.
                  </p>
                  <p>
                    We handle complex real estate transactions, property disputes, regulatory compliance, 
                    and provide strategic legal advice for property development projects. Our expertise 
                    extends to RERA compliance, property documentation, title verification, and dispute 
                    resolution in real estate matters.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our Real Estate Legal Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Property Transactions",
                      description: "Legal support for buying, selling, leasing, and property transfer transactions."
                    },
                    {
                      title: "Title Verification",
                      description: "Comprehensive title search and verification to ensure clear property ownership."
                    },
                    {
                      title: "Real Estate Disputes",
                      description: "Resolution of property disputes, boundary issues, and ownership conflicts."
                    },
                    {
                      title: "RERA Compliance",
                      description: "Regulatory compliance under Real Estate Regulation and Development Act."
                    },
                    {
                      title: "Property Documentation",
                      description: "Drafting and review of sale deeds, lease agreements, and property documents."
                    },
                    {
                      title: "Development Projects",
                      description: "Legal support for real estate development and construction projects."
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h3 className="font-semibold text-dark-green-900 mb-2">{service.title}</h3>
                      <p className="text-dark-green-600 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Types */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Property Types We Handle</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Residential Properties",
                    "Commercial Properties", 
                    "Industrial Properties",
                    "Agricultural Land",
                    "Plots & Vacant Land",
                    "Apartments & Flats",
                    "Office Spaces",
                    "Retail Properties",
                    "Warehouses",
                    "Mixed-Use Developments",
                    "Rental Properties",
                    "Investment Properties"
                  ].map((property, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-green-200 text-center">
                      <span className="text-dark-green-700 font-medium">{property}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal Framework */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Real Estate Legal Framework</h2>
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-dark-green-900 mb-4">Key Legislation & Regulations:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-dark-green-600">
                    <div>
                      <h4 className="font-medium mb-2">Central Acts:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Real Estate (Regulation and Development) Act, 2016</li>
                        <li>• Transfer of Property Act, 1882</li>
                        <li>• Registration Act, 1908</li>
                        <li>• Indian Stamp Act, 1899</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">State Laws:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• State-specific Land Revenue Acts</li>
                        <li>• Building and Construction Regulations</li>
                        <li>• Municipal and Local Laws</li>
                        <li>• Environmental Clearance Requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our Real Estate Legal Process</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Property Assessment",
                      description: "Comprehensive evaluation of property legal status and documentation."
                    },
                    {
                      step: "2", 
                      title: "Due Diligence",
                      description: "Thorough verification of title, approvals, and regulatory compliance."
                    },
                    {
                      step: "3",
                      title: "Documentation",
                      description: "Preparation and review of all necessary legal documents and agreements."
                    },
                    {
                      step: "4",
                      title: "Transaction Support",
                      description: "Legal support throughout the transaction process and registration."
                    },
                    {
                      step: "5",
                      title: "Post-Transaction Services",
                      description: "Ongoing legal support and compliance monitoring after transaction completion."
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
                <h3 className="text-xl font-bold mb-4">Need Real Estate Legal Help?</h3>
                <p className="mb-6">
                  Contact our real estate legal experts for secure property transactions and dispute resolution.
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

              {/* Key Services */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-dark-green-900 mb-4">Key Services</h3>
                <ul className="space-y-2 text-dark-green-600 text-sm">
                  <li>• Property Due Diligence</li>
                  <li>• Title Verification</li>
                  <li>• Transaction Documentation</li>
                  <li>• RERA Compliance</li>
                  <li>• Dispute Resolution</li>
                  <li>• Legal Opinion</li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-dark-green-900 mb-4">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Contract Management", href: "/practice-areas/contract-management" },
                    { name: "Civil Litigation", href: "/practice-areas/civil-litigation" },
                    { name: "Commercial Dispute", href: "/practice-areas/commercial-dispute" },
                    { name: "Arbitration", href: "/practice-areas/arbitration" }
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