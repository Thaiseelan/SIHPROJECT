import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = ({ onGetStarted }) => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "This platform changed my life. I found an amazing therapist who truly understood my struggles with anxiety. The convenience of online sessions made it so much easier to prioritize my mental health."
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The quality of therapists here is exceptional. My counselor helped me work through relationship issues I'd been struggling with for years. I'm so grateful for this service."
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a busy teacher, finding time for therapy was always a challenge. This platform made it possible with flexible scheduling and excellent therapists. Highly recommend!"
    }
  ];

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from real people who have transformed their lives through our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:bg-blue-50 transition-all duration-300 group shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                />
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-400/50 absolute -top-2 -left-2" />
                <p className="text-gray-600 leading-relaxed pl-6 italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-violet-50 backdrop-blur-sm rounded-2xl p-12 border border-blue-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Join Our Community</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Over 10,000 people have found healing and support through our platform. You could be next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </button>
              <div className="text-blue-600">
                <span className="font-semibold">4.9/5</span> average rating from 2,000+ reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
