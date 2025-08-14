import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white">
      <div className="relative container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
              Expert Dispute Resolution Services You Can 
              <span className="text-accent-600"> Trust</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              With extensive experience in alternative dispute resolution, our expert attorneys 
              are dedicated to resolving conflicts efficiently and achieving the best possible 
              outcomes for our clients in Delhi and Greater Noida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 group inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Our Services
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-gold-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-gold-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Disputes Resolved</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-gold-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="h-full bg-gradient-to-br from-accent-50 to-gold-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Shield className="h-24 w-24 text-accent-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Expert Dispute Resolution</h3>
                  <p className="text-gray-600">
                    Trusted by clients for effective conflict resolution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
