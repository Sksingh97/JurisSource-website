import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Award, CheckCircle, Phone, Mail } from 'lucide-react';

export default function ArmedForceTribunalPage() {
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
                <Award className="text-gold-400 mr-4" size={48} />
                <h1 className="text-4xl md:text-5xl font-bold">Armed Force Tribunal</h1>
              </div>
              <p className="text-xl text-green-100 leading-relaxed">
                Specialized representation before Armed Forces Tribunal for military personnel 
                and veterans with expertise in military law and service-related matters.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Military Law Services?</h3>
              <ul className="space-y-3">
                {[
                  'Expert military law knowledge',
                  'Veteran-focused representation',
                  'Tribunal procedure expertise',
                  'Service benefits advocacy'
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
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Armed Forces Tribunal Overview</h2>
                <div className="prose prose-lg text-dark-green-600">
                  <p>
                    The Armed Forces Tribunal (AFT) is a specialized judicial body established under 
                    the Armed Forces Tribunal Act, 2007, to adjudicate disputes and complaints 
                    relating to commission, appointment, enrollment, and service conditions of 
                    members of the armed forces.
                  </p>
                  <p>
                    Our legal team has extensive experience in military law and Armed Forces Tribunal 
                    proceedings. We provide dedicated representation for serving and retired military 
                    personnel, including officers and other ranks, in matters relating to service 
                    conditions, pension disputes, court martial proceedings, and other military law issues.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our Military Law Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Court Martial Defense",
                      description: "Defense representation in court martial proceedings and military disciplinary actions."
                    },
                    {
                      title: "Service Matters",
                      description: "Disputes related to promotion, transfer, posting, and other service conditions."
                    },
                    {
                      title: "Pension Disputes",
                      description: "Resolution of military pension, disability pension, and family pension matters."
                    },
                    {
                      title: "Military Appeals",
                      description: "Appeals against adverse orders and decisions affecting military personnel."
                    },
                    {
                      title: "Discharge Matters",
                      description: "Disputes relating to premature retirement, dismissal, and discharge orders."
                    },
                    {
                      title: "Benefits Claims",
                      description: "Claims for military benefits, allowances, and compensation matters."
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h3 className="font-semibold text-dark-green-900 mb-2">{service.title}</h3>
                      <p className="text-dark-green-600 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AFT Jurisdiction */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">AFT Jurisdiction & Procedures</h2>
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-dark-green-900 mb-4">Armed Forces Tribunal has jurisdiction over:</h3>
                  <ul className="space-y-2 text-dark-green-600">
                    <li>• Commission, appointment, enrollment and conditions of service</li>
                    <li>• Disciplinary matters and court martial proceedings</li>
                    <li>• Pension, family pension, and gratuity matters</li>
                    <li>• Appeals against orders of competent authority</li>
                    <li>• Claims for benefits, allowances, and compensation</li>
                    <li>• Matters relating to discharge, dismissal, and removal</li>
                  </ul>
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-dark-green-900 mb-6">Our Representation Process</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Case Assessment",
                      description: "Detailed evaluation of military service records and legal merit of the case."
                    },
                    {
                      step: "2", 
                      title: "Documentation",
                      description: "Preparation of comprehensive application with supporting documents and evidence."
                    },
                    {
                      step: "3",
                      title: "Filing & Representation",
                      description: "Filing application before AFT and providing skilled legal representation."
                    },
                    {
                      step: "4",
                      title: "Hearings & Arguments",
                      description: "Attending hearings and presenting strong legal arguments before the tribunal."
                    },
                    {
                      step: "5",
                      title: "Order Implementation",
                      description: "Ensuring proper implementation of favorable orders and judgments."
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
                <h3 className="text-xl font-bold mb-4">Need Military Law Help?</h3>
                <p className="mb-6">
                  Contact our experienced military law team for dedicated representation before AFT.
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
                    { name: "Civil Litigation", href: "/practice-areas/civil-litigation" },
                    { name: "Contract Management", href: "/practice-areas/contract-management" },
                    { name: "Arbitration", href: "/practice-areas/arbitration" },
                    { name: "Administrative Law", href: "/practice-areas/civil-litigation" }
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