import React from 'react';
import Link from 'next/link';
import { CheckCircle, Users, Gavel } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Juris Source
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Juris Source is a specialized dispute resolution firm providing comprehensive 
              alternative dispute resolution services. Our commitment to efficient conflict 
              resolution and client satisfaction has made us a trusted name in Delhi and 
              Greater Noida region.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Specialized Expertise</h3>
                  <p className="text-gray-600">Our attorneys specialize in alternative dispute resolution methods including mediation and arbitration.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Efficient Resolution</h3>
                  <p className="text-gray-600">We focus on resolving disputes quickly and cost-effectively while maintaining quality outcomes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Track Record</h3>
                  <p className="text-gray-600">Our success rate of 98% in dispute resolution speaks to our expertise and dedication.</p>
                </div>
              </div>
            </div>
            <Link href="/about" className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block">
              Learn More About Us
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-accent-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">15+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Gavel className="h-12 w-12 text-gold-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Disputes Resolved</p>
            </div>
            <div className="bg-accent-600 p-6 rounded-lg text-center text-white col-span-2">
              <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
              <p className="text-accent-100">
                To provide efficient and effective dispute resolution services while building 
                lasting relationships based on trust, expertise, and successful outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
