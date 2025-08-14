'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <a href="tel:+918368980930" className="flex items-center space-x-1 hover:text-gold-400">
                <Phone size={14} />
                <span>+91 83689 80930</span>
              </a>
              <a href="mailto:jurissource@gmail.com" className="flex items-center space-x-1 hover:text-gold-400">
                <Mail size={14} />
                <span>jurissource@gmail.com</span>
              </a>
            </div>
            <div className="hidden sm:block">
              <span>The Dispute Resolution Firm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/jurice-source-LOGO.png"
              alt="Juris Source"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-accent-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Get Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-secondary-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-accent-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 w-fit" onClick={() => setIsMenuOpen(false)}>
                Get Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
