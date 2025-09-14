import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, CheckCircle, Phone, Mail } from 'lucide-react';

export default function CivilLitigationPage() {
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
                <h1 className="text-4xl md:text-5xl font-bold">Civil Litigation</h1>
              </div>
              <p className="text-xl text-green-100 leading-relaxed">
                Comprehensive civil litigation services for all types of civil disputes and matters 
                with experienced legal representation and strategic case management.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Civil Litigation Services?</h3>
              <ul className="space-y-3">
                {[
                  'Experienced litigation lawyers',
                  'Strategic case planning',
                  'Thorough legal research',
                  'Client-focused approach'
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
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Civil Litigation Overview</h2>
                <div className="prose prose-lg text-dark-green-600">
                  <p>
                    Civil litigation encompasses a broad range of legal disputes between individuals, 
                    organizations, or entities seeking monetary compensation or specific performance 
                    rather than criminal sanctions. Our experienced civil litigation team handles 
                    complex disputes with strategic approach and dedication to achieving favorable outcomes.
                  </p>
                  <p>
                    We represent clients in various civil matters including property disputes, contract 
                    breaches, tort claims, and commercial litigation. Our comprehensive approach ensures 
                    thorough case preparation, strategic litigation planning, and aggressive representation 
                    in court proceedings.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our Civil Litigation Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Property Disputes",
                      description: "Resolution of property-related disputes including ownership, boundaries, and title issues."
                    },
                    {
                      title: "Contract Litigation",
                      description: "Enforcement and defense of contractual obligations and breach of contract claims."
                    },
                    {
                      title: "Tort Claims",
                      description: "Personal injury, defamation, and other tort-related civil claims and defenses."
                    },
                    {
                      title: "Civil Appeals",
                      description: "Appellate representation for civil matters in higher courts and tribunals."
                    },
                    {
                      title: "Injunctive Relief",
                      description: "Seeking and defending against temporary and permanent injunctions."
                    },
                    {
                      title: "Damages Assessment",
                      description: "Calculation and recovery of monetary damages in civil disputes."
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h3 className="font-semibold text-dark-green-900 mb-2">{service.title}</h3>
                      <p className="text-dark-green-600 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our Litigation Process</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Case Evaluation",
                      description: "Comprehensive analysis of your case merits, evidence, and legal strategies."
                    },
                    {
                      step: "2", 
                      title: "Pleadings & Discovery",
                      description: "Filing necessary pleadings and conducting thorough discovery proceedings."
                    },
                    {
                      step: "3",
                      title: "Pre-trial Motions",
                      description: "Strategic motion practice to strengthen case position before trial."
                    },
                    {
                      step: "4",
                      title: "Trial Representation",
                      description: "Aggressive courtroom advocacy and presentation of your case."
                    },
                    {
                      step: "5",
                      title: "Post-trial Proceedings",
                      description: "Enforcement of judgments and appellate representation if needed."
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
                <h3 className="text-xl font-bold mb-4">Need Civil Litigation Help?</h3>
                <p className="mb-6">
                  Contact our experienced civil litigation team for strategic legal representation.
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

              {/* Related Services */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-dark-green-900 mb-4">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Commercial Dispute", href: "/practice-areas/commercial-dispute" },
                    { name: "Contract Management", href: "/practice-areas/contract-management" },
                    { name: "Debt Recovery", href: "/practice-areas/debt-recovery" },
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