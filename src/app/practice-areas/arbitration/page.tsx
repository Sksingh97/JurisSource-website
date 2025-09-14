'use client';

export default function ArbitrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Arbitration Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert alternative dispute resolution through arbitration proceedings
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Arbitration?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  In order to resolve a dispute, two parties must agree to the appointment of an arbitrator, 
                  who will then provide a legally enforceable decision. It is a method of resolving conflicts 
                  outside of the courts, which simultaneously saves time and resources.
                </p>
                <p className="text-lg text-gray-700">
                  A legal procedure known as arbitration encourages the mutual resolution of conflicts between 
                  two or more parties by the selection of a neutral third party, the judgment of whom is binding 
                  on the parties to the dispute. In today's fast-paced society, arbitration is a very useful 
                  method for hastening the resolution of conflicts between two parties.
                </p>
              </div>

              {/* Why Arbitration is Necessary */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Arbitration is Necessary</h2>
                <p className="text-lg text-gray-700">
                  The development of a flexible, reasonable, advantageous, and speedy method of resolving 
                  disputes without subjecting the parties to the rigorous, resource-intensive, and 
                  time-consuming process of the traditional justice delivery system was required by the 
                  advancement, liberalization, and globalization of international business relations.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Arbitration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Lessening of Court Involvement</h4>
                      <p className="text-sm text-gray-700">Reduced dependency on traditional court systems</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Lower Costs</h4>
                      <p className="text-sm text-gray-700">Cost-effective dispute resolution and redress</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Quick and Timely Resolution</h4>
                      <p className="text-sm text-gray-700">Faster resolution compared to traditional litigation</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Enforcement of Awards</h4>
                      <p className="text-sm text-gray-700">Neutrality of arbitrator ensures fair enforcement</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Non-Arbitrable Disputes */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Non-Arbitrable Disputes</h2>
                <p className="text-lg text-gray-700 mb-6">
                  All disputes however are not arbitrable and there are certain disputes which fall outside 
                  the categories of arbitrable disputes as held by the Hon'ble Apex Court in the matter of 
                  Booz Allen and Hamilton Inc V. SBI Home Finance Ltd. These are:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      <span>Criminal offenses</span>
                    </div>
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      <span>Guardianship matters</span>
                    </div>
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      <span>Insolvency and winding up proceedings</span>
                    </div>
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      <span>Probate-related issues, letters of administration</span>
                    </div>
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      <span>Eviction proceedings</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      <span>Patents, trademarks, copyright</span>
                    </div>
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      <span>Anti Trust/ competition laws</span>
                    </div>
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      <span>Bribery/Corruption Laws</span>
                    </div>
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      <span>Fraud</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Legal Assistance</h3>
                <p className="text-gray-600 mb-6">
                  Need help with arbitration proceedings? Our experienced legal team is here to assist you.
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