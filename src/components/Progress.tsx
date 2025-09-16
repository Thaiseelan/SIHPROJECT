import React from 'react';
import { ProgressData } from '../types/assessment';
import { BarChart3, TrendingUp, AlertCircle, CheckCircle, ExternalLink, Phone, MessageCircle } from 'lucide-react';

interface ProgressProps {
  data: ProgressData;
  onRetake: () => void;
}

export const Progress: React.FC<ProgressProps> = ({ data, onRetake }) => {
  const { currentScore, level, categoryBreakdown } = data;
  
  const maxScore = 75; // 15 questions × 5 points each
  const progressPercentage = (currentScore / maxScore) * 100;

  const CategoryCard = ({ title, score, maxScore, color }: { 
    title: string; 
    score: number; 
    maxScore: number; 
    color: string; 
  }) => {
    const percentage = (score / maxScore) * 100;
    
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h4 className="font-medium text-gray-700 mb-3 capitalize">{title} Questions</h4>
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-gray-800">{score}</span>
          <span className="text-sm text-gray-500">/ {maxScore}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: `${percentage}%`,
              backgroundColor: color
            }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {percentage.toFixed(0)}% completed
        </div>
      </div>
    );
  };

  const getTextColor = (levelName: string) => {
    return levelName === 'Fair' ? '#8B7355' : 'white';
  };
  return (
    <div className="min-h-screen p-4" style={{ background: 'linear-gradient(135deg, #f0f9f7 0%, #e8f4f8 100%)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Mental Health Assessment Results</h1>
          <p className="text-gray-600">Understanding your current mental wellness status</p>
        </div>

        {/* Main Score Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-4"
                 style={{ backgroundColor: `${level.color}20` }}>
              <div className="text-4xl font-bold" style={{ color: level.name === 'Fair' ? '#8B7355' : level.color }}>
                {currentScore}
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: level.name === 'Fair' ? '#8B7355' : level.color }}>
              {level.name}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {level.description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Overall Score</span>
              <span className="text-sm font-medium text-gray-600">{currentScore}/{maxScore}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="h-4 rounded-full transition-all duration-1000 ease-out relative"
                style={{ 
                  width: `${progressPercentage}%`,
                  backgroundColor: level.name === 'Fair' ? '#8B7355' : level.color
                }}
              >
                <div className="absolute -top-8 right-0 transform translate-x-1/2">
                  <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs">
                    {progressPercentage.toFixed(0)}%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <CategoryCard 
              title="Easy"
              score={categoryBreakdown.easy}
              maxScore={25} // 5 questions × 5 points
              color="#6FBFAD"
            />
            <CategoryCard 
              title="Medium"
              score={categoryBreakdown.medium}
              maxScore={25} // 5 questions × 5 points
              color="#4A90E2"
            />
            <CategoryCard 
              title="Critical"
              score={categoryBreakdown.critical}
              maxScore={25} // 5 questions × 5 points
              color="#8B7355"
            />
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <TrendingUp style={{ color: '#6FBFAD' }} className="mr-3" size={24} />
            <h3 className="text-2xl font-bold text-gray-800">Recommendations</h3>
          </div>
          <div className="space-y-4">
            {level.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg" style={{ backgroundColor: '#6FBFAD10' }}>
                <CheckCircle style={{ color: '#6FBFAD' }} className="mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">{recommendation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <ExternalLink style={{ color: '#4A90E2' }} className="mr-3" size={24} />
            <h3 className="text-2xl font-bold text-gray-800">
              {level.name === 'Excellent' ? 'Helpful Resources' : 
               level.name === 'Good' ? 'Wellness Resources' :
               level.name === 'Fair' ? 'Support Resources' :
               level.name === 'Concerning' ? 'Professional Support' :
               'Immediate Help Resources'}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {level.resources.map((resource, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <ExternalLink style={{ color: '#4A90E2' }} className="mt-1 flex-shrink-0" size={16} />
                <p className="text-gray-700 text-sm">{resource}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Crisis Support */}
        {level.name === 'Critical' && (
          <div className="border rounded-2xl p-8 mb-8" style={{ backgroundColor: '#6FBFAD10', borderColor: '#6FBFAD' }}>
            <div className="flex items-center mb-4">
              <Phone style={{ color: '#6FBFAD' }} className="mr-3" size={24} />
              <h3 className="text-xl font-bold" style={{ color: '#6FBFAD' }}>Immediate Support Available</h3>
            </div>
            <p className="text-gray-700 mb-4">
              If you're in crisis, please reach out for immediate help:
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: 'white' }}>
                <Phone style={{ color: '#6FBFAD' }} size={20} />
                <div>
                  <p className="font-medium text-gray-800">National Suicide Prevention Lifeline</p>
                  <p className="text-lg font-bold" style={{ color: '#6FBFAD' }}>988</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: 'white' }}>
                <MessageCircle style={{ color: '#4A90E2' }} size={20} />
                <div>
                  <p className="font-medium text-gray-800">Crisis Text Line</p>
                  <p className="text-lg font-bold" style={{ color: '#4A90E2' }}>Text HOME to 741741</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: 'white' }}>
                <AlertCircle style={{ color: '#8B7355' }} size={20} />
                <div>
                  <p className="font-medium text-gray-800">Emergency Services</p>
                  <p className="text-lg font-bold" style={{ color: '#8B7355' }}>911</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="text-center">
          <button
            onClick={onRetake}
            className="text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            style={{ 
              backgroundColor: '#6FBFAD',
              boxShadow: '0 4px 15px rgba(111, 191, 173, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#5da394';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#6FBFAD';
            }}
          >
            Take Assessment Again
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-gray-500 bg-white p-6 rounded-lg">
          <p className="mb-2">
            <strong>Disclaimer:</strong> This assessment is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p>
            Always seek the advice of qualified health providers with any questions you may have regarding a medical condition.
          </p>
        </div>
      </div>
    </div>
  );
};