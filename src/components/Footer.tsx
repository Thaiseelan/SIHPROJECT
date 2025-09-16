import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-purple-900/20 to-transparent border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">MindCare</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-lg">
              Empowering students with comprehensive mental health support through AI-powered guidance, 
              professional counseling, and community connections.
            </p>
            
            <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 mb-6">
              <h4 className="text-red-300 font-bold mb-2 flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Crisis Support - Available 24/7
              </h4>
              <p className="text-red-200 text-sm mb-2">
                If you're experiencing a mental health emergency, please reach out immediately:
              </p>
              <div className="space-y-1">
                <p className="text-red-100 font-semibold">National Suicide Prevention Lifeline: 988</p>
                <p className="text-red-100 font-semibold">Crisis Text Line: Text HOME to 741741</p>
                <p className="text-red-100 font-semibold">Emergency Services: 911</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-300 hover:text-purple-300 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-purple-300 transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-purple-300 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-purple-400" />
                support@mindcare.com
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-purple-400" />
                1-800-MINDCARE
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-purple-400 mt-1" />
                123 Wellness Avenue<br />San Francisco, CA 94102
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 MindCare. All rights reserved. HIPAA Compliant & Confidential.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;