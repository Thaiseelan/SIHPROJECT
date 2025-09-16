import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = ({ onGetStarted }) => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-violet-600 bg-clip-text text-transparent">
          Your Mental Health
          <span className="block text-4xl md:text-5xl mt-2">Matters</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Connect with licensed therapists and counselors. Get the professional support you deserve, when you need it most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onGetStarted}
            className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white/80 backdrop-blur-sm border border-blue-200 text-gray-700 font-semibold py-4 px-8 rounded-xl text-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-2">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200 shadow-lg">
            <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
            <div className="text-blue-600">Licensed Therapists</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200 shadow-lg">
            <div className="text-3xl font-bold text-gray-800 mb-2">10K+</div>
            <div className="text-blue-600">Sessions Completed</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200 shadow-lg">
            <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
            <div className="text-blue-600">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
