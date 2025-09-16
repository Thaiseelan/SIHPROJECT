import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold text-white">MindCare</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-white hover:text-purple-300 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-purple-300 transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-purple-300 transition-colors">
              Testimonials
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20 mt-1">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('features')} className="block px-3 py-2 text-white hover:text-purple-300 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block px-3 py-2 text-white hover:text-purple-300 transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-white hover:text-purple-300 transition-colors">
                Testimonials
              </button>
              <button className="w-full text-left bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-2 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;