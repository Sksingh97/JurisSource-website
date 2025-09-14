'use client';

export default function CommercialDisputePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Dispute Resolution
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert resolution of commercial disputes and business conflicts
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Commercial Dispute Resolution?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  A commercial dispute is a process that enables aggrieved parties to resolve their disputes 
                  and typically arises as part of a specific trade or transaction. Commercial disputes entail 
                  resolving any commercial transaction or arrangement and are seen by the courts as "a last resort" 
                  when communication between the parties has broken down completely.
                </p>
                <p className="text-lg text-gray-700">
                  This is a highly formalized process that can take place between businesses, people, 
                  or a combination of the two.
                </p>
              </div>

              {/* Types of Disputes */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Types of Commercial Disputes</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800 mb-2">Business Conflicts</h4>
                      <p className="text-sm text-gray-700">Disputes between shareholders, directors, and other high-ranking individuals</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 mb-2">Contractual Disputes</h4>
                      <p className="text-sm text-gray-700">Including breaches and non-delivery of contractual obligations</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-purple-800 mb-2">Professional Negligence</h4>
                      <p className="text-sm text-gray-700">Commercial and professional negligence claims</p>
                    </div>
                    
                    <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-800 mb-2">Fraud & Bankruptcy</h4>
                      <p className="text-sm text-gray-700">Professional bankruptcy and fraud cases</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Requirements */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Standards Must be Fulfilled?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  There must be a proven foundation for a claim before a commercial dispute may be formalized. 
                  Providing proof that you did everything within your power to settle the matter amicably and 
                  without turning to the legal system or using it as a threat or coercive tool is a crucial 
                  component of the commercial dispute resolution process.
                </p>
                
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Important Note</h3>
                  <p className="text-gray-700">
                    Before proceeding with formal litigation, parties must demonstrate that they have 
                    exhausted all reasonable attempts at amicable resolution.
                  </p>
                </div>
              </div>

              {/* Process & Timeline */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How Are They Carried Out?</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Pre-litigation</h3>
                      <p className="text-gray-700">Initial assessment, documentation, and attempt at settlement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Case Preparation</h3>
                      <p className="text-gray-700">Gathering evidence, preparing legal documents, and building the case</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Enforcement</h3>
                      <p className="text-gray-700">Legal proceedings and enforcement of judgments or settlements</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">What Are the Outcomes?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Small claims:</strong> Typically take 3 to 6 months to be heard</li>
                    <li>• <strong>Fast track claims:</strong> Can take up to 9 months</li>
                    <li>• <strong>Multi-track claims:</strong> Complex cases that can be challenging to refute completely due to their complexity</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Legal Assistance</h3>
                <p className="text-gray-600 mb-6">
                  Need help with commercial dispute resolution? Our experienced team is here to assist you.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <span className="mr-3 text-blue-600">📞</span>
                    <span>+91-83689 80930</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-3 text-blue-600">✉️</span>
                    <span>jurissource@gmail.com</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <span className="mr-3 mt-1 text-blue-600">📍</span>
                    <span>37, Ground Floor, Site II, Vikas Puri, New Delhi- 110018</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                  Schedule Consultation
                </button>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                <div className="space-y-2">
                  <a href="/practice-areas/arbitration" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Arbitration Services
                  </a>
                  <a href="/practice-areas/debt-recovery" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Debt Recovery
                  </a>
                  <a href="/practice-areas/civil-litigation" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Civil Litigation
                  </a>
                  <a href="/practice-areas/contract-management" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Contract Management
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}