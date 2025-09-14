import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale, CheckCircle, Phone, Mail } from 'lucide-react';

export default function InsolvencyBankruptcyPage() {
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
                <Scale className="text-gold-400 mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Insolvency & Bankruptcy</h1>
              </div>
              <p className="text-xl text-green-100 leading-relaxed">
                Expert legal services in insolvency and bankruptcy matters under the Insolvency 
                and Bankruptcy Code with specialized NCLT representation and resolution planning.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Why Choose Our IBC Services?</h3>
              <ul className="space-y-3">
                {[
                  'IBC expertise & experience',
                  'NCLT representation',
                  'Resolution plan development',
                  'Stakeholder protection'
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
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Insolvency & Bankruptcy Overview</h2>
                <div className="prose prose-lg text-dark-green-600">
                  <p>
                    The Insolvency and Bankruptcy Code, 2016 (IBC) revolutionized India's insolvency 
                    resolution framework, providing a comprehensive legal mechanism for resolving 
                    insolvency and bankruptcy in a time-bound manner. Our specialized team provides 
                    expert legal services across all aspects of insolvency proceedings.
                  </p>
                  <p>
                    We represent creditors, debtors, resolution professionals, and other stakeholders 
                    in corporate insolvency resolution processes, liquidation proceedings, and individual 
                    bankruptcy matters before the National Company Law Tribunal (NCLT) and other forums.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our IBC Legal Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Corporate Insolvency",
                      description: "Representation in Corporate Insolvency Resolution Process (CIRP) before NCLT."
                    },
                    {
                      title: "Individual Bankruptcy",
                      description: "Legal services for individual insolvency and bankruptcy proceedings."
                    },
                    {
                      title: "Resolution Plans",
                      description: "Drafting and evaluation of resolution plans for distressed companies."
                    },
                    {
                      title: "NCLT Proceedings",
                      description: "Comprehensive representation before National Company Law Tribunal."
                    },
                    {
                      title: "Liquidation Process",
                      description: "Legal support in liquidation proceedings and asset distribution."
                    },
                    {
                      title: "Creditor Rights",
                      description: "Protection and enforcement of creditor rights in insolvency proceedings."
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h3 className="font-semibold text-dark-green-900 mb-2">{service.title}</h3>
                      <p className="text-dark-green-600 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* IBC Framework */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">IBC Legal Framework</h2>
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-dark-green-900 mb-4">Key Provisions of IBC, 2016:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-dark-green-600">
                    <div>
                      <h4 className="font-medium mb-2">Corporate Insolvency:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Section 7: Financial Creditor Application</li>
                        <li>• Section 9: Operational Creditor Application</li>
                        <li>• Section 10: Corporate Debtor Application</li>
                        <li>• Resolution Process & Liquidation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Individual Insolvency:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Fresh Start Process</li>
                        <li>• Individual Insolvency Resolution</li>
                        <li>• Bankruptcy Process</li>
                        <li>• Discharge & Rehabilitation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our IBC Representation Process</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Case Assessment",
                      description: "Detailed evaluation of insolvency case merits and strategic options."
                    },
                    {
                      step: "2", 
                      title: "Application Filing",
                      description: "Preparation and filing of insolvency application before NCLT."
                    },
                    {
                      step: "3",
                      title: "CIRP Representation",
                      description: "Active participation in Corporate Insolvency Resolution Process."
                    },
                    {
                      step: "4",
                      title: "Resolution Planning",
                      description: "Development or evaluation of resolution plans for company revival."
                    },
                    {
                      step: "5",
                      title: "Implementation",
                      description: "Ensuring proper implementation of approved resolution plans or liquidation."
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
                <h3 className="text-xl font-bold mb-4">Need IBC Legal Help?</h3>
                <p className="mb-6">
                  Contact our insolvency and bankruptcy experts for specialized legal representation.
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
                    { name: "Banking and Finance", href: "/practice-areas/banking-and-finance" },
                    { name: "Commercial Dispute", href: "/practice-areas/commercial-dispute" },
                    { name: "Debt Recovery", href: "/practice-areas/debt-recovery" },
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