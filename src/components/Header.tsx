'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Top Bar - Hidden on scroll */}
      <div className={`bg-gray-100 text-gray-700 py-3 transition-all duration-300 ${
        isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      } hidden lg:block`}>
        <div className="container">
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-gold-600" />
              <a href="tel:+918368980930" className="hover:text-gold-600 transition-colors">
                +91- 8368980930
              </a>
            </div>
            <div className="text-gray-400">•</div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-gold-600" />
              <a href="mailto:jurissource@gmail.com" className="hover:text-gold-600 transition-colors">
                jurissource@gmail.com
              </a>
            </div>
            <div className="text-gray-400">•</div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-gold-600" />
              <span>Mon - Sat 09:00-18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src="/images/js-logo.png" 
                  alt="Juris Source Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-dark-green-900">Juris Source</h1>
                <p className="text-sm text-gold-600 font-medium">The Dispute Resolution Firm</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-dark-green-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact" className="btn btn-primary">
                Get Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200">
            <div className="container py-4">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-dark-green-700 hover:text-primary-600 font-medium py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-200">
                  <Link 
                    href="/contact" 
                    className="btn btn-primary w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Consultation
                  </Link>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <Phone size={16} />
                    <a href="tel:+918368980930" className="hover:text-primary-600">
                      +91 83689 80930
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} />
                    <a href="mailto:jurissource@gmail.com" className="hover:text-primary-600">
                      jurissource@gmail.com
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header