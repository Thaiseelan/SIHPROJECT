import React from 'react';
import { Search, Calendar, Video, CheckCircle } from 'lucide-react';

const HowItWorksSection = ({ onGetStarted }) => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Find Your Therapist",
      description: "Browse our directory of licensed therapists and find someone who matches your needs and preferences."
    },
    {
      number: "02",
      icon: Calendar,
      title: "Book a Session",
      description: "Choose a convenient time slot and book your session with just a few clicks."
    },
    {
      number: "03",
      icon: Video,
      title: "Connect & Heal",
      description: "Join your secure video session and start your journey towards better mental health."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Track Progress",
      description: "Monitor your progress and continue your healing journey with ongoing support."
    }
  ];

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with mental health support has never been easier. Follow these simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:bg-blue-50 transition-all duration-300 text-center group shadow-lg">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-violet-50 backdrop-blur-sm rounded-2xl p-12 border border-blue-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Start Your Journey Today</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't wait to prioritize your mental health. Take the first step towards healing and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Now
              </button>
              <button className="bg-white/80 backdrop-blur-sm border border-blue-200 text-gray-700 font-semibold py-4 px-8 rounded-xl text-lg hover:bg-blue-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
