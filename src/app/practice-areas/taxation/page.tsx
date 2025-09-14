'use client';

export default function TaxationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Taxation Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert legal assistance in domestic and cross-border taxation matters
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Taxation Expertise</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The firm has core expertise in various areas of domestic and cross-border taxation 
                  including tax efficient structuring of inbound & outbound investments, domestic/group 
                  restructuring, tax treaty analysis, advisory, M&A tax, transfer pricing advisory & 
                  transfer pricing disputes resolution, high end tax litigation and representation.
                </p>
                <p className="text-lg text-gray-700">
                  We also handle tax information exchange requests, employee incentives, tax insurance, 
                  and new age issues such as General Anti Avoidance Rules (GAAR), Place of Effective 
                  Management (POEM), interplay of tax treaties with MLI and taxation aspects relating to 
                  online marketplaces and digital transactions, which are evolving globally.
                </p>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Areas</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Domestic Taxation */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">Domestic Taxation</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Income Tax Advisory</span>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Corporate Tax Planning</span>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">GST Compliance & Advisory</span>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Tax Litigation & Appeals</span>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Employee Incentive Plans</span>
                      </div>
                    </div>
                  </div>

                  {/* International Taxation */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">International Taxation</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Cross-border Structuring</span>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Tax Treaty Analysis</span>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Transfer Pricing</span>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">POEM & GAAR Advisory</span>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Digital Economy Taxation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialized Services */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Services</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-3xl mb-4">⚖️</div>
                    <h3 className="font-semibold text-purple-800 mb-2">M&A Tax Advisory</h3>
                    <p className="text-sm text-gray-700">Comprehensive tax planning for mergers and acquisitions</p>
                  </div>
                  
                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <div className="text-3xl mb-4">📊</div>
                    <h3 className="font-semibold text-orange-800 mb-2">Transfer Pricing</h3>
                    <p className="text-sm text-gray-700">Advisory and dispute resolution services</p>
                  </div>
                  
                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <div className="text-3xl mb-4">🌐</div>
                    <h3 className="font-semibold text-red-800 mb-2">Digital Taxation</h3>
                    <p className="text-sm text-gray-700">Online marketplace and digital transaction taxation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Tax Advisory</h3>
                <p className="text-gray-600 mb-6">
                  Need expert assistance with taxation matters? Our experienced team is here to help.
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
                  <a href="/practice-areas/commercial-dispute" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Commercial Dispute Resolution
                  </a>
                  <a href="/practice-areas/arbitration" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Arbitration Services
                  </a>
                  <a href="/practice-areas/banking-and-finance" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Banking & Finance Law
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