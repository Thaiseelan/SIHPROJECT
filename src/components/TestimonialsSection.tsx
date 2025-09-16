import React, { useState, useEffect } from 'react';
import { Star, Shield, Clock, Heart } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState<boolean[]>(new Array(6).fill(false));

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'College Student',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'MindCare has been a lifesaver during my college years. The AI chatbot is incredibly supportive, and having access to professional counselors when needed gives me peace of mind.'
    },
    {
      name: 'Michael Chen',
      role: 'Graduate Student',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The mood tracking feature helped me identify patterns I never noticed before. The community support is amazing - knowing others understand what you\'re going through makes all the difference.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Undergraduate Student',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'I love how the platform gamifies wellness. The achievements and progress tracking keep me motivated to maintain healthy habits. The music therapy feature is my favorite!'
    },
    {
      name: 'David Thompson',
      role: 'PhD Candidate',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'As someone dealing with research stress, the personalized assessment tests helped me understand my anxiety better. The professional counseling sessions are top-notch.'
    },
    {
      name: 'Jessica Kim',
      role: 'Medical Student',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The educational content library is incredibly comprehensive. Having evidence-based resources at my fingertips helps me better understand mental health concepts.'
    },
    {
      name: 'Alex Martinez',
      role: 'College Senior',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The privacy and security features give me confidence to share openly. The progress insights help me see how far I\'ve come in my mental health journey.'
    }
  ];

  const trustIndicators = [
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Your data is protected with enterprise-grade security'
    },
    {
      icon: Heart,
      title: '100% Confidential',
      description: 'Your privacy is our highest priority'
    },
    {
      icon: Clock,
      title: 'Free to Start',
      description: 'Begin your journey with no financial barriers'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleTestimonials(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const testimonialElements = document.querySelectorAll('.testimonial-card');
    testimonialElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Students
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of students who have transformed their mental health journey 
            with MindCare's comprehensive support platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-index={index}
              className={`testimonial-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 ${
                visibleTestimonials[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-purple-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 mb-6">
                <indicator.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{indicator.title}</h3>
              <p className="text-gray-300">{indicator.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Mental Health Journey?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already taking control of their mental wellbeing 
            with MindCare's comprehensive support platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
            <div className="text-center">
              <p className="text-sm text-gray-400">Crisis Support Available 24/7</p>
              <p className="text-purple-300 font-semibold">1-800-273-8255</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;