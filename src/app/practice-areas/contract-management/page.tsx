import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle, Phone, Mail } from 'lucide-react';

export default function ContractManagementPage() {
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
                <FileText className="text-gold-400 mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Contract Management</h1>
              </div>
              <p className="text-xl text-green-100 leading-relaxed">
                Professional contract drafting, review, and management services with focus on 
                risk mitigation, legal compliance, and strategic business protection.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Contract Services?</h3>
              <ul className="space-y-3">
                {[
                  'Expert contract drafting',
                  'Comprehensive risk assessment',
                  'Legal compliance assurance',
                  'Strategic business protection'
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
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Contract Management Overview</h2>
                <div className="prose prose-lg text-dark-green-600">
                  <p>
                    Effective contract management is crucial for business success and legal protection. 
                    Our comprehensive contract management services encompass the entire contract lifecycle 
                    from initial drafting and negotiation to execution, monitoring, and renewal or termination.
                  </p>
                  <p>
                    We provide strategic legal support to businesses of all sizes, ensuring that contracts 
                    are legally sound, commercially viable, and aligned with business objectives. Our 
                    experienced team handles complex commercial agreements, vendor contracts, employment 
                    agreements, and specialized industry contracts.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our Contract Management Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Contract Drafting",
                      description: "Professional drafting of various types of contracts tailored to your business needs."
                    },
                    {
                      title: "Contract Review",
                      description: "Thorough review and analysis of existing contracts to identify risks and opportunities."
                    },
                    {
                      title: "Risk Assessment",
                      description: "Comprehensive risk evaluation and mitigation strategies for contractual arrangements."
                    },
                    {
                      title: "Compliance Management",
                      description: "Ensuring contracts comply with applicable laws, regulations, and industry standards."
                    },
                    {
                      title: "Negotiation Support",
                      description: "Strategic support during contract negotiations to achieve favorable terms."
                    },
                    {
                      title: "Contract Administration",
                      description: "Ongoing contract administration, monitoring, and performance management."
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h3 className="font-semibold text-dark-green-900 mb-2">{service.title}</h3>
                      <p className="text-dark-green-600 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contract Types */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Types of Contracts We Handle</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Commercial Agreements",
                    "Service Contracts", 
                    "Supply Agreements",
                    "Employment Contracts",
                    "Non-Disclosure Agreements",
                    "Partnership Agreements",
                    "Licensing Agreements",
                    "Distribution Agreements",
                    "Joint Venture Agreements",
                    "Franchise Agreements",
                    "Construction Contracts",
                    "Technology Agreements"
                  ].map((contract, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-green-200 text-center">
                      <span className="text-dark-green-700 font-medium">{contract}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our Contract Management Process</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Requirements Analysis",
                      description: "Understanding your business needs and contract objectives."
                    },
                    {
                      step: "2", 
                      title: "Drafting & Structuring",
                      description: "Creating legally sound contracts with appropriate terms and conditions."
                    },
                    {
                      step: "3",
                      title: "Review & Negotiation",
                      description: "Thorough review and strategic negotiation to optimize terms."
                    },
                    {
                      step: "4",
                      title: "Execution & Implementation",
                      description: "Facilitating proper contract execution and implementation procedures."
                    },
                    {
                      step: "5",
                      title: "Monitoring & Maintenance",
                      description: "Ongoing monitoring for compliance and contract lifecycle management."
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
                <h3 className="text-xl font-bold mb-4">Need Contract Help?</h3>
                <p className="mb-6">
                  Contact our contract management experts for professional legal assistance.
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

              {/* Key Benefits */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-dark-green-900 mb-4">Key Benefits</h3>
                <ul className="space-y-2 text-dark-green-600 text-sm">
                  <li>• Risk mitigation and protection</li>
                  <li>• Legal compliance assurance</li>
                  <li>• Cost-effective solutions</li>
                  <li>• Strategic business advantage</li>
                  <li>• Dispute prevention</li>
                  <li>• Professional expertise</li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-dark-green-900 mb-4">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Commercial Dispute", href: "/practice-areas/commercial-dispute" },
                    { name: "Civil Litigation", href: "/practice-areas/civil-litigation" },
                    { name: "Corporate Law", href: "/practice-areas/commercial-dispute" },
                    { name: "Legal Consultation", href: "/contact" }
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