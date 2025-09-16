import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Users, Star, Clock } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [stats, setStats] = useState({
    users: 0,
    satisfaction: 0,
    sessions: 0
  });

  const features = [
    'AI-Powered Mental Health Support',
    'Professional Counseling Sessions',
    'Mood Tracking & Analytics',
    'Peer Support Community',
    'Personalized Wellness Journey'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    // Animate statistics on mount
    const animateCounter = (target: number, key: keyof typeof stats) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    animateCounter(10000, 'users');
    animateCounter(98, 'satisfaction');
    animateCounter(50000, 'sessions');
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-purple-800/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Mental Health
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Matters
            </span>
          </h1>
          
          <div className="h-8 mb-8 overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentFeatureIndex * 32}px)` }}
            >
              {features.map((feature, index) => (
                <p key={index} className="text-xl md:text-2xl text-purple-200 h-8 leading-8">
                  {feature}
                </p>
              ))}
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Access professional mental health support, AI-powered guidance, and a supportive community 
            - all in one secure, confidential platform designed for your wellbeing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="group bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stats.users.toLocaleString()}+</div>
              <div className="text-purple-200">Active Users</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stats.satisfaction}%</div>
              <div className="text-purple-200">Satisfaction Rate</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stats.sessions.toLocaleString()}+</div>
              <div className="text-purple-200">Sessions Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;