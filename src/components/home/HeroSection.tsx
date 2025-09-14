import React from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-gold-500/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpolygon points='36,34 24,34 20,30 20,18 24,14 36,14 40,18 40,30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <div className="relative container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to{' '}
                <span className="text-gradient bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
                  Juris Source
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Professional legal services with proven expertise in debt recovery, arbitration, 
                taxation, commercial disputes, and comprehensive legal solutions for individuals and businesses.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Expert Legal Consultation',
                'Proven Track Record',
                'Comprehensive Solutions',
                'Client-Focused Service'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-gold-400 flex-shrink-0" />
                  <span className="text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-gold inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+918368980930" 
                className="btn btn-secondary inline-flex items-center border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +91 83689 80930
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-slate-700">
              <div className="flex flex-wrap items-center gap-8 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="text-gold-400 font-bold text-lg">15+</span>
                  <span>Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold-400 font-bold text-lg">500+</span>
                  <span>Cases Resolved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold-400 font-bold text-lg">99%</span>
                  <span>Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-2xl">JS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Expert Legal Advice</h3>
                  <p className="text-slate-300">
                    Founded by Advocate Rashmi Singh, we provide comprehensive legal solutions 
                    with the highest level of professionalism and transparency.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-slate-300">Debt Recovery</span>
                    <span className="text-gold-400">Expert</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-slate-300">Commercial Disputes</span>
                    <span className="text-gold-400">Specialist</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-300">Legal Consultation</span>
                    <span className="text-gold-400">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection