'use client';

import { CheckCircle, Scale, FileText, Users, Phone, Mail, MapPin } from 'lucide-react';

export default function DebtRecoveryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Debt Recovery Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert legal assistance for efficient debt recovery through legal and non-legal methods
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Debt Recovery?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Debt recovery is the process of pursuing payments of money owed by individuals or businesses. 
                  A debt is defined as an amount of money that is owed to a person or institution for funds 
                  borrowed. Debt recovery becomes necessary when the borrower does not repay the loan under 
                  the agreed terms and schedule.
                </p>
                <p className="text-lg text-gray-700">
                  Bad debt refers to money that a creditor must write off because the debtor has failed to 
                  fulfill their repayment obligations. When a creditor gives up on collecting a debt, 
                  they classify it as bad debt.
                </p>
              </div>

              {/* Collection Methods */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Collection Methods</h2>
                
                {/* Non-Legal Methods */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
                    <Users className="mr-2" />
                    Non-Legal Collection Methods
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" size={20} />
                      <span>Professional negotiation and communication</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" size={20} />
                      <span>Structured payment plans and settlements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" size={20} />
                      <span>Out-of-court dispute resolution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" size={20} />
                      <span>Mediation and arbitration services</span>
                    </li>
                  </ul>
                </div>

                {/* Legal Methods */}
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
                    <Scale className="mr-2" />
                    Legal Collection Methods
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">Civil Remedies</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Filing civil suits for debt recovery</li>
                        <li>• Summary suits under Order XXXVII CPC</li>
                        <li>• Money suits and recovery proceedings</li>
                        <li>• Asset attachment and garnishment</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-lg mb-2">Criminal Remedies</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Cases under Section 138 NI Act</li>
                        <li>• Dishonor of cheques proceedings</li>
                        <li>• Criminal breach of trust cases</li>
                        <li>• Fraud and misappropriation cases</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applicable Laws */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="mr-2" />
                  Applicable Laws in India
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Indian Contract Act, 1872</h4>
                      <p className="text-sm text-gray-700">Governs contractual obligations and breach remedies</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Negotiable Instruments Act, 1881</h4>
                      <p className="text-sm text-gray-700">Deals with cheques, promissory notes, and bills of exchange</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800">Code of Civil Procedure, 1908</h4>
                      <p className="text-sm text-gray-700">Procedural law for civil suits and recovery proceedings</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800">Indian Penal Code</h4>
                      <p className="text-sm text-gray-700">Criminal provisions for fraud and breach of trust</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-800">Insolvency & Bankruptcy Code, 2016</h4>
                      <p className="text-sm text-gray-700">Corporate insolvency resolution processes</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800">RDDBFI Act, 1993</h4>
                      <p className="text-sm text-gray-700">Recovery of debts due to banks and financial institutions</p>
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
                  Need help with debt recovery? Our experienced legal team is here to assist you.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Phone className="mr-3 text-blue-600" size={20} />
                    <span>+91-83689 80930</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="mr-3 text-blue-600" size={20} />
                    <span>jurissource@gmail.com</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <MapPin className="mr-3 mt-1 text-blue-600" size={20} />
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
                  <a href="/practice-areas/civil-litigation" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Civil Litigation
                  </a>
                  <a href="/practice-areas/banking-and-finance" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Banking & Finance Law
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