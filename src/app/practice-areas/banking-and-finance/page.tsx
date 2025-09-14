import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Briefcase, CheckCircle, Phone, Mail } from 'lucide-react';

export default function BankingFinancePage() {
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
                <Briefcase className="text-gold-400 mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Banking & Finance</h1>
              </div>
              <p className="text-xl text-green-100 leading-relaxed">
                Specialized legal services in banking and financial matters including regulatory 
                compliance, dispute resolution, and comprehensive financial law advisory services.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Banking Law Services?</h3>
              <ul className="space-y-3">
                {[
                  'Banking law expertise',
                  'Regulatory compliance',
                  'Financial dispute resolution',
                  'Recovery & enforcement'
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
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Banking & Finance Law Overview</h2>
                <div className="prose prose-lg text-dark-green-600">
                  <p>
                    Banking and finance law encompasses a complex framework of regulations governing 
                    financial institutions, transactions, and markets. Our specialized team provides 
                    comprehensive legal services to banks, financial institutions, corporate borrowers, 
                    and individual clients in various banking and financial matters.
                  </p>
                  <p>
                    We handle banking disputes, loan recovery matters, regulatory compliance issues, 
                    SARFAESI proceedings, and provide strategic advisory services for complex financial 
                    transactions. Our expertise covers both public and private sector banking operations 
                    and emerging fintech regulations.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our Banking & Finance Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Banking Disputes",
                      description: "Resolution of banking disputes, loan defaults, and financial disagreements."
                    },
                    {
                      title: "Financial Regulations",
                      description: "Compliance with RBI guidelines, banking regulations, and financial laws."
                    },
                    {
                      title: "Loan Recovery",
                      description: "Legal assistance in loan recovery proceedings and debt enforcement."
                    },
                    {
                      title: "SARFAESI Actions",
                      description: "Representation in SARFAESI proceedings for asset reconstruction and recovery."
                    },
                    {
                      title: "Financial Documentation",
                      description: "Drafting and review of loan agreements, security documents, and financial contracts."
                    },
                    {
                      title: "Regulatory Advisory",
                      description: "Strategic advisory on banking regulations, compliance, and risk management."
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h3 className="font-semibold text-dark-green-900 mb-2">{service.title}</h3>
                      <p className="text-dark-green-600 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Banking Laws */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Key Banking & Finance Laws</h2>
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-dark-green-900 mb-4">Important Legislation & Regulations:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-dark-green-600">
                    <div>
                      <h4 className="font-medium mb-2">Core Banking Laws:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Banking Regulation Act, 1949</li>
                        <li>• Reserve Bank of India Act, 1934</li>
                        <li>• SARFAESI Act, 2002</li>
                        <li>• Recovery of Debts Due to Banks Act, 1993</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Financial Regulations:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Payment and Settlement Systems Act, 2007</li>
                        <li>• Foreign Exchange Management Act, 1999</li>
                        <li>• Anti-Money Laundering Laws</li>
                        <li>• Digital Payment Regulations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SARFAESI Process */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">SARFAESI Process & Procedures</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Demand Notice (Section 13(2))",
                      description: "Issuance of 60-day demand notice for loan repayment to borrower."
                    },
                    {
                      step: "2", 
                      title: "Possession Notice (Section 13(4))",
                      description: "Taking symbolic or physical possession of secured assets."
                    },
                    {
                      step: "3",
                      title: "Asset Valuation",
                      description: "Professional valuation of secured assets for sale proceedings."
                    },
                    {
                      step: "4",
                      title: "Sale Notice (Section 13(8))",
                      description: "Public notice for sale of secured assets through auction or tender."
                    },
                    {
                      step: "5",
                      title: "Sale & Recovery",
                      description: "Conducting asset sale and recovery of outstanding dues from proceeds."
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
                <h3 className="text-xl font-bold mb-4">Need Banking Law Help?</h3>
                <p className="mb-6">
                  Contact our banking and finance legal experts for specialized representation.
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

              {/* Key Areas */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-dark-green-900 mb-4">Key Practice Areas</h3>
                <ul className="space-y-2 text-dark-green-600 text-sm">
                  <li>• Loan Recovery Actions</li>
                  <li>• SARFAESI Proceedings</li>
                  <li>• Banking Disputes</li>
                  <li>• Regulatory Compliance</li>
                  <li>• Financial Documentation</li>
                  <li>• Asset Reconstruction</li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-dark-green-900 mb-4">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Debt Recovery", href: "/practice-areas/debt-recovery" },
                    { name: "Insolvency & Bankruptcy", href: "/practice-areas/insolvency-and-bankruptcy" },
                    { name: "Commercial Dispute", href: "/practice-areas/commercial-dispute" },
                    { name: "Civil Litigation", href: "/practice-areas/civil-litigation" }
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