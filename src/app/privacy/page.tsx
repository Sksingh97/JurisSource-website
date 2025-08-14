import React from 'react';
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary-900 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-gold-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: August 13, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            
            {/* Information We Collect */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-primary-900">Information We Collect</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Contact us for legal consultation</li>
                  <li>Fill out forms on our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Engage our services</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Types of Information</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Personal identifiers (name, email address, phone number)</li>
                  <li>Professional information relevant to legal services</li>
                  <li>Communication preferences</li>
                  <li>Website usage data and cookies</li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <UserCheck className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-primary-900">How We Use Your Information</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Provide legal services and consultation</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you relevant legal updates and newsletters</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and unauthorized access</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-primary-900">Information Sharing and Disclosure</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described below:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect the rights, property, or safety of Juris Source, our clients, or others</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                  <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-primary-900">Data Security</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Secure data transmission using encryption</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection</li>
                  <li>Secure storage systems and backup procedures</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-primary-900">Your Rights and Choices</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                  <li><strong>Withdrawal of Consent:</strong> Withdraw consent for processing where applicable</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-primary-900">Cookies and Tracking Technologies</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience. These technologies help us:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website performance and functionality</li>
                  <li>Provide relevant content and advertisements</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  You can control cookies through your browser settings and opt-out of certain tracking technologies.
                </p>
              </div>
            </section>

            {/* Updates to Privacy Policy */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-primary-900">Updates to This Privacy Policy</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the "Last updated" date</li>
                  <li>Sending email notifications for significant changes</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <div className="bg-primary-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <Mail className="h-8 w-8 text-primary-600 mr-3" />
                  <h2 className="text-3xl font-bold text-primary-900">Contact Us</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-2">Email</h4>
                      <p className="text-gray-700">jurissource@gmail.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-2">Phone</h4>
                      <p className="text-gray-700">+91 83689 80930</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-2">Delhi Office</h4>
                      <p className="text-gray-700">37, Ground Floor, Site - 2<br />Block C, Vikaspuri<br />Delhi, 110018</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-2">Greater Noida Office</h4>
                      <p className="text-gray-700">Plot No 7, E-Block<br />Sector 2, Greater Noida West<br />201207</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Disclaimer */}
            <section className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-600 text-center">
                This privacy policy is governed by the laws of India and any disputes will be resolved in the courts of Delhi, India.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
