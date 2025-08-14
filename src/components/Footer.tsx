import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    'Mediation Services',
    'Arbitration',
    'Commercial Disputes',
    'Family Dispute Resolution',
    'Employment Disputes',
    'Legal Consultation',
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/images/jurice-source-LOGO.png"
                alt="Juris Source"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Professional dispute resolution and legal services with experienced attorneys 
              dedicated to achieving favorable outcomes for our clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Our Services</h3>
            <ul className="space-y-2">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <address className="text-gray-300 not-italic mb-2">
                    <strong>Delhi Office:</strong><br />
                    37, Ground Floor, Site - 2<br />
                    Block C, Vikaspuri<br />
                    Delhi, 110018
                  </address>
                  <address className="text-gray-300 not-italic">
                    <strong>Greater Noida Office:</strong><br />
                    Plot No 7, E-Block<br />
                    Sector 2, Greater Noida West<br />
                    201207
                  </address>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-gold-400" />
                <a href="tel:+918368980930" className="text-gray-300 hover:text-white">
                  +91 83689 80930
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-gold-400" />
                <a href="mailto:jurissource@gmail.com" className="text-gray-300 hover:text-white">
                  jurissource@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Juris Source - The Dispute Resolution Firm. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Professional dispute resolution you can trust.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
