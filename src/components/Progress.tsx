import React from 'react';
import { Brain, Heart, Shield, TrendingUp } from 'lucide-react';

interface WelcomeProps {
  onStartAssessment: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onStartAssessment }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 p-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0f9f7 0%, #e8f4f8 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: '#6FBFAD20' }}>
              <Brain style={{ color: '#6FBFAD' }} size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Mental Health Support System
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take our comprehensive mood assessment to better understand your mental wellness and receive personalized recommendations.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#6FBFAD20' }}>
                <Heart style={{ color: '#6FBFAD' }} size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Assessment</h3>
              <p className="text-gray-600">15 carefully crafted questions across different complexity levels</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#4A90E220' }}>
                <TrendingUp style={{ color: '#4A90E2' }} size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Visual progress indicators and mood level categorization</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#F5E9DA' }}>
                <Shield style={{ color: '#8B7355' }} size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Support</h3>
              <p className="text-gray-600">Tailored recommendations based on your assessment results</p>
            </div>
          </div>

          {/* Assessment Info */}
          <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#6FBFAD10' }}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">What to Expect:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#6FBFAD' }}></div>
                <div>
                  <p className="font-medium text-gray-800">15 Questions Total</p>
                  <p className="text-gray-600 text-sm">Categorized into easy, medium, and critical levels</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#6FBFAD' }}></div>
                <div>
                  <p className="font-medium text-gray-800">Emoji-Based Responses</p>
                  <p className="text-gray-600 text-sm">5 intuitive options for each question</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#6FBFAD' }}></div>
                <div>
                  <p className="font-medium text-gray-800">10-15 Minutes</p>
                  <p className="text-gray-600 text-sm">Complete at your own pace</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#6FBFAD' }}></div>
                <div>
                  <p className="font-medium text-gray-800">Instant Results</p>
                  <p className="text-gray-600 text-sm">Get your mood level and recommendations immediately</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onStartAssessment}
            className="text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ 
              backgroundColor: '#6FBFAD',
              boxShadow: '0 4px 15px rgba(111, 191, 173, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#5da394';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#6FBFAD';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Start Your Assessment
          </button>

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 mt-6 max-w-2xl mx-auto">
            This assessment is designed to help you understand your current mental state and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </div>
  );
};