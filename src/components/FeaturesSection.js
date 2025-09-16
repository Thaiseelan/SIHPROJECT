import React from 'react';
import { Shield, Clock, Users, Heart, Video, MessageCircle, Calendar, Star } from 'lucide-react';

const FeaturesSection = ({ onGetStarted }) => {
  const features = [
    {
      icon: Shield,
      title: "Licensed Professionals",
      description: "All our therapists are licensed and certified mental health professionals with years of experience."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access mental health support whenever you need it, day or night, with our round-the-clock service."
    },
    {
      icon: Video,
      title: "Online Sessions",
      description: "Connect with your therapist from the comfort of your home through secure video sessions."
    },
    {
      icon: Users,
      title: "Diverse Specialties",
      description: "Find therapists specializing in anxiety, depression, trauma, relationships, and more."
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Receive tailored treatment plans designed specifically for your unique needs and goals."
    },
    {
      icon: MessageCircle,
      title: "Safe & Confidential",
      description: "Your privacy is our priority. All sessions are completely confidential and secure."
    }
  ];

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive mental health services designed to support you on your journey to wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:bg-blue-50 transition-all duration-300 group shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-violet-50 backdrop-blur-sm rounded-2xl p-12 border border-blue-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Journey?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of people who have found support and healing through our platform.
            </p>
            <button 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
            >
              Find Your Therapist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
