import Link from "next/link";
import { ArrowRight, Scale, Users, Award, Clock, CheckCircle, Star, Phone, Mail, MapPin } from "lucide-react";

const practiceAreas = [
  {
    title: "Debt Recovery",
    description: "Civil disputes arbitration and debt recovery procedures with comprehensive legal support.",
    href: "/practice-areas/debt-recovery",
    icon: Scale,
  },
  {
    title: "Arbitration",
    description: "Expert arbitration services for dispute resolution with legally enforceable decisions.",
    href: "/practice-areas/arbitration",
    icon: Users,
  },
  {
    title: "Commercial Dispute",
    description: "Resolution of commercial disputes arising from specific trade or transactions.",
    href: "/practice-areas/commercial-dispute",
    icon: Award,
  },
  {
    title: "Civil Litigation",
    description: "Comprehensive civil litigation services for all types of civil disputes and matters.",
    href: "/practice-areas/civil-litigation",
    icon: Scale,
  },
  {
    title: "Taxation",
    description: "Expert taxation advisory services for domestic and cross-border tax matters.",
    href: "/practice-areas/taxation",
    icon: CheckCircle,
  },
  {
    title: "Contract Management",
    description: "Professional contract drafting, review, and management services.",
    href: "/practice-areas/contract-management",
    icon: Users,
  },
];

const testimonials = [
  {
    name: "Corporate Client",
    role: "Business Owner",
    content: "Exceptional legal service with professional expertise in debt recovery. Highly recommended for business legal matters.",
    rating: 5,
  },
  {
    name: "Individual Client",
    role: "Professional",
    content: "Outstanding arbitration services. The team's knowledge and dedication made all the difference in resolving our dispute.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Expert Legal Solutions for 
              <span className="block text-gold-400">Complex Disputes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Comprehensive legal services in debt recovery, arbitration, taxation, and commercial disputes. 
              Founded by Advocate Rashmi Singh with proven expertise in dispute resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gold-500 hover:bg-gold-600 text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                href="/practice-areas" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-green-900 mb-4">
              Our Practice Areas
            </h2>
            <p className="text-xl text-dark-green-600 max-w-3xl mx-auto">
              Specialized legal services across multiple practice areas with proven track record of success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Link key={index} href={area.href} className="group">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full hover:shadow-xl transition-shadow duration-300 group-hover:scale-105 transform transition-transform border border-green-100">
                  <div className="flex items-center mb-4">
                    <area.icon className="text-primary-600 mr-3" size={32} />
                    <h3 className="text-xl font-semibold text-dark-green-900 group-hover:text-primary-600 transition-colors">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-dark-green-600 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="mt-4 text-primary-600 font-medium flex items-center">
                    Learn More
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
            {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-green-900 mb-4">
              Why Choose Juris Source
            </h2>
            <p className="text-xl text-dark-green-600 max-w-3xl mx-auto">
              Your trusted partner for comprehensive legal solutions with proven expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-green-900 mb-2">Expert Legal Team</h3>
              <p className="text-dark-green-600">Experienced advocates with specialized knowledge across multiple practice areas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-gold-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-green-900 mb-2">Proven Results</h3>
              <p className="text-dark-green-600">Track record of successful case resolutions and client satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-green-900 mb-2">Timely Service</h3>
              <p className="text-dark-green-600">Efficient handling of legal matters with attention to deadlines</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-gold-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-green-900 mb-2">Client-Centric</h3>
              <p className="text-dark-green-600">Personalized approach with dedicated attention to each client's needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
            {/* About Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-green-900 mb-6">
                About Juris Source
              </h2>
              <p className="text-lg text-dark-green-600 leading-relaxed mb-6">
                Founded by Advocate Rashmi Singh, Juris Source is a specialized legal practice focused on dispute resolution, 
                debt recovery, arbitration, and commercial legal matters. With years of experience in civil litigation and 
                commercial disputes, we provide comprehensive legal solutions tailored to our clients' needs.
              </p>
              <p className="text-lg text-dark-green-600 leading-relaxed mb-8">
                Our practice is built on the foundation of professional excellence, ethical conduct, and client satisfaction. 
                We handle complex legal matters with precision and dedication, ensuring favorable outcomes for our clients.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-dark-green-900 mb-6">Our Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-dark-green-700">Client-focused approach with personalized attention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-dark-green-700">Transparent communication throughout the legal process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-dark-green-700">Ethical practice with professional integrity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-dark-green-700">Efficient resolution of legal matters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-green-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-dark-green-600">
              Trusted by individuals and businesses for exceptional legal service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-8 border border-green-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-dark-green-700 text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-dark-green-900">{testimonial.name}</div>
                  <div className="text-dark-green-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and let us help you resolve your legal matters efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center">
              <Phone className="mr-2" size={20} />
              <span className="text-lg">+91-83689 80930</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" size={20} />
              <span className="text-lg">jurissource@gmail.com</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="bg-gold-500 hover:bg-gold-600 text-dark-green-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Schedule Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}