import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Question } from '../types/assessment';
import { questions } from '../data/questions';

interface AssessmentProps {
  onComplete: (answers: { questionId: number; points: number }[]) => void;
}

export const Assessment: React.FC<AssessmentProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; points: number }[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  const handleAnswer = (questionId: number, points: number) => {
    const newAnswers = answers.filter(a => a.questionId !== questionId);
    newAnswers.push({ questionId, points });
    setAnswers(newAnswers);
    setSelectedOption(points);
    
    // Auto-advance after a short delay for better UX
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      } else {
        onComplete(newAnswers);
      }
    }, 800);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const prevAnswer = answers.find(a => a.questionId === questions[currentQuestionIndex - 1].id);
      setSelectedOption(prevAnswer?.points || null);
    }
  };

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === currentQuestion.id);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'easy': return 'text-white border-transparent';
      case 'medium': return 'text-white border-transparent';
      case 'critical': return 'text-white border-transparent';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryBgColor = (category: string) => {
    switch (category) {
      case 'easy': return '#6FBFAD';
      case 'medium': return '#4A90E2';
      case 'critical': return '#8B7355';
      default: return '#6B7280';
    }
  };
  return (
    <div className="min-h-screen p-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0f9f7 0%, #e8f4f8 100%)' }}>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Progress Header */}
        <div className="p-6 text-white" style={{ backgroundColor: '#6FBFAD' }}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Mental Health Assessment</h2>
            <span className="text-white opacity-90 text-sm">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full rounded-full h-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
            <div 
              className="bg-white h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Content */}
        <div className="p-8">
          <div className="mb-6">
            <span 
              className={`inline-block px-4 py-2 rounded-full text-xs font-medium border ${getCategoryColor(currentQuestion.category)}`}
              style={{ backgroundColor: getCategoryBgColor(currentQuestion.category) }}
            >
              {currentQuestion.category.charAt(0).toUpperCase() + currentQuestion.category.slice(1)} Level
            </span>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            {currentQuestion.text}
          </h3>

          {/* Answer Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  handleAnswer(currentQuestion.id, option.points);
                }}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg transform hover:scale-[1.02] ${
                  selectedOption === option.points || getCurrentAnswer()?.points === option.points
                    ? 'shadow-lg transform scale-[1.02]'
                    : 'border-gray-200 hover:border-opacity-50'
                }`}
                style={{
                  borderColor: selectedOption === option.points || getCurrentAnswer()?.points === option.points 
                    ? '#6FBFAD' 
                    : '#E5E7EB',
                  backgroundColor: selectedOption === option.points || getCurrentAnswer()?.points === option.points 
                    ? '#6FBFAD10' 
                    : 'white',
                  boxShadow: selectedOption === option.points || getCurrentAnswer()?.points === option.points 
                    ? '0 8px 25px rgba(111, 191, 173, 0.2)' 
                    : '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl sm:text-3xl">{option.emoji}</span>
                  <div>
                    <div className="font-medium text-gray-800 text-sm sm:text-base">{option.label}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                currentQuestionIndex === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'hover:shadow-md'
              }`}
              style={{
                color: currentQuestionIndex === 0 ? '#9CA3AF' : '#6FBFAD',
                backgroundColor: currentQuestionIndex === 0 ? 'transparent' : '#6FBFAD10'
              }}
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>

            <div className="text-center text-sm text-gray-500">
              {answers.length} of {questions.length} answered
            </div>

            <button
              onClick={handleNext}
              disabled={!getCurrentAnswer()}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                getCurrentAnswer()
                  ? 'text-white shadow-md hover:shadow-lg'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              style={{
                backgroundColor: getCurrentAnswer() ? '#6FBFAD' : '#F3F4F6'
              }}
            >
              <span>{currentQuestionIndex === questions.length - 1 ? 'Complete' : 'Next'}</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};