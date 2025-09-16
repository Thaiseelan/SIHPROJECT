import React, { useState, useEffect } from 'react';
import { UserPlus, ClipboardList, Heart, TrendingUp } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(4).fill(false));

  const steps = [
    {
      icon: UserPlus,
      number: '01',
      title: 'Sign Up & Create Profile',
      description: 'Create your secure, confidential account and complete a brief assessment to personalize your experience.',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: ClipboardList,
      number: '02',
      title: 'Complete Assessment',
      description: 'Take our comprehensive mental health assessment to understand your current wellbeing and identify areas for growth.',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Heart,
      number: '03',
      title: 'Get Personalized Care',
      description: 'Access AI-powered support, connect with professionals, and engage with community resources tailored to your needs.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Track & Grow',
      description: 'Monitor your progress, celebrate achievements, and continue growing with ongoing support and insights.',
      gradient: 'from-cyan-500 to-teal-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleSteps(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = document.querySelectorAll('.step-card');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start your mental health journey in just a few simple steps. Our platform guides you 
            from initial assessment to ongoing support and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              data-index={index}
              className={`step-card relative transition-all duration-700 ${
                visibleSteps[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Connection line for non-mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0"></div>
              )}
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className={`relative mb-6`}>
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center mb-4`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <span className="text-sm font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;