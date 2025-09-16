import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">We Are Here</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your trusted partner in mental health and wellness. We're committed to providing accessible, 
              professional mental health services to help you thrive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Facebook className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Twitter className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Instagram className="w-5 h-5 text-blue-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Find Therapists</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Book Session</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">My Sessions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Resources</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Individual Therapy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Couples Counseling</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Group Therapy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Crisis Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Online Sessions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">support@wearehere.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">1-800-HELP-NOW</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Available Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} We Are Here. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm flex items-center justify-center">
              Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> for mental health awareness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
