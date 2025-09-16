import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  BarChart3, 
  Video, 
  ClipboardList, 
  Users, 
  Trophy, 
  Music, 
  BookOpen, 
  TrendingUp 
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>(new Array(9).fill(false));

  const features = [
    {
      icon: Bot,
      title: 'AI Chatbot with Voice Recognition',
      description: 'Advanced AI companion that understands your emotions and provides instant support through text and voice interactions.',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Mood Tracking & Analytics',
      description: 'Comprehensive mood tracking with detailed analytics to help you understand patterns and triggers.',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Video,
      title: 'Professional Counseling Sessions',
      description: 'Connect with licensed therapists for one-on-one video sessions in a secure, private environment.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: ClipboardList,
      title: 'Personalized Assessment Tests',
      description: 'Evidence-based psychological assessments to better understand your mental health needs.',
      gradient: 'from-cyan-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'Peer Support Community',
      description: 'Connect with others on similar journeys in moderated, safe community spaces.',
      gradient: 'from-teal-500 to-green-600'
    },
    {
      icon: Trophy,
      title: 'Gamified Wellness Journey',
      description: 'Earn achievements and track progress through engaging wellness challenges and milestones.',
      gradient: 'from-green-500 to-lime-600'
    },
    {
      icon: Music,
      title: 'Music & Audio Therapy',
      description: 'Curated playlists and guided audio sessions designed to support your emotional wellbeing.',
      gradient: 'from-lime-500 to-yellow-600'
    },
    {
      icon: BookOpen,
      title: 'Educational Content Library',
      description: 'Access extensive resources, articles, and educational materials about mental health topics.',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking & Insights',
      description: 'Detailed insights and progress reports to celebrate your growth and identify areas for improvement.',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleFeatures(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Mental Health
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Support System
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with evidence-based therapeutic approaches 
            to provide you with the most effective mental health support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                visibleFeatures[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10">
                <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center space-x-2 group">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;