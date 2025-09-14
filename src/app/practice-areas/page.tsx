import Link from 'next/link';
import { ArrowRight, Scale, Users, Award, CheckCircle, Gavel, Building, FileText, TrendingUp, Shield, Briefcase } from 'lucide-react';

const practiceAreas = [
  {
    title: "Debt Recovery",
    description: "Comprehensive debt recovery services including civil disputes arbitration and legal procedures with proven track record of successful case resolutions.",
    href: "/practice-areas/debt-recovery",
    icon: Scale,
    features: ["Civil Disputes", "Arbitration", "Legal Procedures", "Recovery Solutions"]
  },
  {
    title: "Arbitration",
    description: "Expert arbitration services for dispute resolution with legally enforceable decisions and alternative dispute resolution mechanisms.",
    href: "/practice-areas/arbitration",
    icon: Gavel,
    features: ["Commercial Arbitration", "International Arbitration", "Ad-hoc Arbitration", "Institutional Arbitration"]
  },
  {
    title: "Taxation",
    description: "Comprehensive taxation advisory services for domestic and cross-border tax matters with specialized expertise in tax planning and compliance.",
    href: "/practice-areas/taxation",
    icon: TrendingUp,
    features: ["Tax Planning", "Tax Compliance", "Tax Disputes", "Cross-border Taxation"]
  },
  {
    title: "Commercial Dispute",
    description: "Resolution of commercial disputes arising from specific trade or transactions with focus on business-oriented legal solutions.",
    href: "/practice-areas/commercial-dispute",
    icon: Building,
    features: ["Trade Disputes", "Contract Disputes", "Business Litigation", "Commercial Arbitration"]
  },
  {
    title: "Civil Litigation",
    description: "Comprehensive civil litigation services for all types of civil disputes and matters with experienced legal representation.",
    href: "/practice-areas/civil-litigation",
    icon: Shield,
    features: ["Property Disputes", "Contract Litigation", "Tort Claims", "Civil Appeals"]
  },
  {
    title: "Armed Force Tribunal",
    description: "Specialized representation before Armed Forces Tribunal for military personnel and veterans with expertise in military law.",
    href: "/practice-areas/armed-force-tribunal",
    icon: Award,
    features: ["Court Martial", "Service Matters", "Pension Disputes", "Military Appeals"]
  },
  {
    title: "Contract Management",
    description: "Professional contract drafting, review, and management services with focus on risk mitigation and legal compliance.",
    href: "/practice-areas/contract-management",
    icon: FileText,
    features: ["Contract Drafting", "Contract Review", "Risk Assessment", "Compliance Management"]
  },
  {
    title: "Real Estate",
    description: "Comprehensive real estate legal services including property transactions, disputes, and regulatory compliance.",
    href: "/practice-areas/real-estate",
    icon: Building,
    features: ["Property Transactions", "Title Verification", "Real Estate Disputes", "RERA Compliance"]
  },
  {
    title: "Insolvency and Bankruptcy",
    description: "Expert legal services in insolvency and bankruptcy matters under the Insolvency and Bankruptcy Code.",
    href: "/practice-areas/insolvency-and-bankruptcy",
    icon: Scale,
    features: ["Corporate Insolvency", "Individual Bankruptcy", "Resolution Plans", "NCLT Proceedings"]
  },
  {
    title: "Banking and Finance",
    description: "Specialized legal services in banking and financial matters including regulatory compliance and dispute resolution.",
    href: "/practice-areas/banking-and-finance",
    icon: Briefcase,
    features: ["Banking Disputes", "Financial Regulations", "Loan Recovery", "SARFAESI Actions"]
  },
  {
    title: "Intellectual Property",
    description: "Comprehensive intellectual property services including trademark, patent, and copyright protection and enforcement.",
    href: "/practice-areas/intellectual-property",
    icon: Shield,
    features: ["Trademark Registration", "Patent Filing", "Copyright Protection", "IP Litigation"]
  }
];

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Practice Areas</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive legal services across multiple practice areas with proven expertise 
              and client-focused approach
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-green-900 mb-4">
              Legal Expertise You Can Trust
            </h2>
            <p className="text-xl text-dark-green-600 max-w-3xl mx-auto">
              Juris Source provides specialized legal services across diverse practice areas with 
              professional excellence and dedicated client service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Link key={index} href={area.href} className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-green-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4">
                      <area.icon className="text-primary-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-dark-green-900 group-hover:text-primary-600 transition-colors">
                      {area.title}
                    </h3>
                  </div>
                  
                  <p className="text-dark-green-600 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-dark-green-600">
                        <CheckCircle className="text-primary-500 mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-primary-600 font-medium flex items-center">
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
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-green-900 mb-4">
              Why Choose Juris Source
            </h2>
            <p className="text-xl text-dark-green-600 max-w-3xl mx-auto">
              Professional legal services with proven expertise and client satisfaction
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
                <Users className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-green-900 mb-2">Client-Centric</h3>
              <p className="text-dark-green-600">Personalized approach with dedicated attention to each client's needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scale className="text-gold-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-green-900 mb-2">Professional Ethics</h3>
              <p className="text-dark-green-600">Ethical practice with transparency and professional integrity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for professional legal consultation and let our experts help you 
            resolve your legal matters efficiently.
          </p>
          
          <Link 
            href="/contact" 
            className="bg-gold-500 hover:bg-gold-600 text-dark-green-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            Get Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}