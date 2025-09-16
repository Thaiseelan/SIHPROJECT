import React from 'react';
import { Play, Headphones, BookOpen, Download } from 'lucide-react';

interface ResourceCardProps {
  type: 'video' | 'audio' | 'article';
  title: string;
  description: string;
  duration?: string;
  readTime?: string;
  image: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ type, title, description, duration, readTime, image }) => {
  const getIcon = () => {
    switch (type) {
      case 'video': return <Play className="w-6 h-6" />;
      case 'audio': return <Headphones className="w-6 h-6" />;
      case 'article': return <BookOpen className="w-6 h-6" />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'video': return 'text-fuchsia-600 bg-fuchsia-100';
      case 'audio': return 'text-violet-600 bg-violet-100';
      case 'article': return 'text-purple-600 bg-purple-100';
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <div className={`h-48 ${image} bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700`}></div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
        <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor()}`}>
          {getIcon()}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
        <div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 px-2 py-1 rounded-lg backdrop-blur-sm">
          {duration || readTime}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        
        <button className="flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 group-hover:gap-3 transition-all duration-300">
          Access Resource
          <Download className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  const resources = [
    {
      type: 'video' as const,
      title: 'Managing Academic Stress',
      description: 'Learn practical techniques to handle exam pressure and academic deadlines with confidence.',
      duration: '15 min',
      image: 'bg-gradient-to-br from-violet-400 to-fuchsia-500'
    },
    {
      type: 'audio' as const,
      title: 'Guided Meditation for Sleep',
      description: 'A soothing meditation session designed to help students get better sleep and wake up refreshed.',
      duration: '20 min',
      image: 'bg-gradient-to-br from-violet-300 to-purple-500'
    },
    {
      type: 'article' as const,
      title: 'Building Healthy Study Habits',
      description: 'Evidence-based strategies to create sustainable study routines that support both academic success and mental health.',
      readTime: '8 min read',
      image: 'bg-gradient-to-br from-purple-400 to-fuchsia-500'
    },
    {
      type: 'video' as const,
      title: 'Breathing Exercises for Anxiety',
      description: 'Simple yet effective breathing techniques you can use anywhere to manage anxiety and panic.',
      duration: '12 min',
      image: 'bg-gradient-to-br from-violet-500 to-indigo-500'
    },
    {
      type: 'audio' as const,
      title: 'Focus & Productivity Sounds',
      description: 'Ambient sounds and music scientifically designed to improve concentration during study sessions.',
      duration: '45 min',
      image: 'bg-gradient-to-br from-violet-400 to-pink-500'
    },
    {
      type: 'article' as const,
      title: 'Understanding Depression in Students',
      description: 'A comprehensive guide to recognizing signs of depression and finding appropriate help and support.',
      readTime: '12 min read',
      image: 'bg-gradient-to-br from-indigo-400 to-violet-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free Resources for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              Your Mental Health Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our carefully curated collection of videos, audio sessions, and articles 
            created by mental health professionals specifically for students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={resource.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ResourceCard {...resource} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-full hover:from-violet-700 hover:to-fuchsia-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore All Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;