import React from 'react'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <div className="container" style={{ paddingTop: '50px !important', paddingBottom: '64px' }}>
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/images/js-logo.png"
                alt="Juris Source Logo"
                width={200}
                height={200}
                className="w-50 h-50 object-contain"
              />
            </div>
            
            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              Professional legal services with expertise in debt recovery, arbitration, 
              taxation, commercial disputes, and comprehensive legal solutions.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Debt Recovery',
                'Arbitration', 
                'Taxation',
                'Civil Litigation',
                'Commercial Dispute',
                'Armed Force Tribunal',
                'Contract Management',
                'Real Estate',
                'Insolvency and Bankruptcy',
                'Banking and Finance',
                'Intellectual Property'
              ].map((area, index) => (
                <li key={index}>
                  <a href={`/practice-areas/${area.toLowerCase().replace(/\s+/g, '-')}`} 
                     className="text-slate-300 hover:text-gold-400 transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="space-y-1">
                <p className="text-slate-300 font-medium">Delhi Office</p>
                <p className="text-slate-400">37, Ground Floor, Site II, Vikaspuri<br />New Delhi - 110018</p>
              </div>
              <div className="space-y-1">
                <p className="text-slate-300 font-medium">Greater Noida Office</p>
                <p className="text-slate-400">Plot No 7, E-Block<br />Sector 2, Greater Noida West - 201207</p>
              </div>
              <div className="pt-2 space-y-1">
                <p className="text-slate-300">
                  <a href="tel:+918368980930" className="hover:text-gold-400 transition-colors">
                    +91 83689 80930
                  </a>
                </p>
                <p className="text-slate-300">
                  <a href="mailto:jurissource@gmail.com" className="hover:text-gold-400 transition-colors">
                    jurissource@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Office Hours</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p>Monday - Saturday</p>
              <p className="text-gold-400 font-medium">09:00 - 18:00</p>
              <p className="text-xs text-slate-400 mt-4">
                Sunday: By appointment only
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex justify-center">
            <p className="text-slate-400 text-sm">
              © 2025 Juris Source. All rights reserved.
            </p>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <p className="legal-notice text-center">
              This website follows the relevant rules of the Bar Council of India. The contents of this website 
              are meant to provide necessary information about Juris Source and updates on relevant laws in India. 
              The information provided herein is not legal advice and the Firm disclaims all liability arising 
              from reliance placed by the user on the information contained therein.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer