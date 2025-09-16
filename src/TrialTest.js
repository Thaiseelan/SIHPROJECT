import React, { useState } from 'react';
// Data and helpers
const questions = [
  { id: 1, category: 'easy', text: 'How are you feeling right now?', options: [
    { emoji: '😊', label: 'Very Happy', points: 5 },
    { emoji: '🙂', label: 'Happy', points: 4 },
    { emoji: '😐', label: 'Neutral', points: 3 },
    { emoji: '😕', label: 'Sad', points: 2 },
    { emoji: '😢', label: 'Very Sad', points: 1 },
  ]},
  { id: 2, category: 'easy', text: 'How well did you sleep last night?', options: [
    { emoji: '😴', label: 'Excellent', points: 5 },
    { emoji: '😊', label: 'Good', points: 4 },
    { emoji: '😐', label: 'Okay', points: 3 },
    { emoji: '😴', label: 'Poor', points: 2 },
    { emoji: '😵', label: 'Terrible', points: 1 },
  ]},
  { id: 3, category: 'easy', text: 'How is your energy level today?', options: [
    { emoji: '⚡', label: 'Very High', points: 5 },
    { emoji: '😄', label: 'High', points: 4 },
    { emoji: '😐', label: 'Normal', points: 3 },
    { emoji: '😔', label: 'Low', points: 2 },
    { emoji: '😴', label: 'Very Low', points: 1 },
  ]},
  { id: 4, category: 'easy', text: 'How satisfied are you with your social connections?', options: [
    { emoji: '🥰', label: 'Very Satisfied', points: 5 },
    { emoji: '😊', label: 'Satisfied', points: 4 },
    { emoji: '😐', label: 'Neutral', points: 3 },
    { emoji: '😞', label: 'Unsatisfied', points: 2 },
    { emoji: '😰', label: 'Very Unsatisfied', points: 1 },
  ]},
  { id: 5, category: 'easy', text: 'How would you rate your appetite today?', options: [
    { emoji: '😋', label: 'Great', points: 5 },
    { emoji: '🙂', label: 'Good', points: 4 },
    { emoji: '😐', label: 'Normal', points: 3 },
    { emoji: '😕', label: 'Poor', points: 2 },
    { emoji: '😰', label: 'No Appetite', points: 1 },
  ]},
  { id: 6, category: 'medium', text: 'How often do you feel overwhelmed by daily tasks?', options: [
    { emoji: '😌', label: 'Never', points: 5 },
    { emoji: '🙂', label: 'Rarely', points: 4 },
    { emoji: '😐', label: 'Sometimes', points: 3 },
    { emoji: '😰', label: 'Often', points: 2 },
    { emoji: '😫', label: 'Always', points: 1 },
  ]},
  { id: 7, category: 'medium', text: 'How well can you concentrate on tasks?', options: [
    { emoji: '🎯', label: 'Excellent Focus', points: 5 },
    { emoji: '😊', label: 'Good Focus', points: 4 },
    { emoji: '😐', label: 'Average', points: 3 },
    { emoji: '😕', label: 'Poor Focus', points: 2 },
    { emoji: '😵‍💫', label: "Can't Focus", points: 1 },
  ]},
  { id: 8, category: 'medium', text: 'How do you feel about your future?', options: [
    { emoji: '🌟', label: 'Very Optimistic', points: 5 },
    { emoji: '😊', label: 'Optimistic', points: 4 },
    { emoji: '😐', label: 'Neutral', points: 3 },
    { emoji: '😟', label: 'Pessimistic', points: 2 },
    { emoji: '😰', label: 'Very Worried', points: 1 },
  ]},
  { id: 9, category: 'medium', text: 'How often do you experience mood swings?', options: [
    { emoji: '😌', label: 'Never', points: 5 },
    { emoji: '🙂', label: 'Rarely', points: 4 },
    { emoji: '😐', label: 'Sometimes', points: 3 },
    { emoji: '😕', label: 'Often', points: 2 },
    { emoji: '😰', label: 'Very Often', points: 1 },
  ]},
  { id: 10, category: 'medium', text: 'How comfortable are you expressing your emotions?', options: [
    { emoji: '😊', label: 'Very Comfortable', points: 5 },
    { emoji: '🙂', label: 'Comfortable', points: 4 },
    { emoji: '😐', label: 'Neutral', points: 3 },
    { emoji: '😕', label: 'Uncomfortable', points: 2 },
    { emoji: '😰', label: 'Very Uncomfortable', points: 1 },
  ]},
  { id: 11, category: 'critical', text: 'How often do you feel hopeless about your situation?', options: [
    { emoji: '😊', label: 'Never', points: 5 },
    { emoji: '🙂', label: 'Rarely', points: 4 },
    { emoji: '😐', label: 'Sometimes', points: 3 },
    { emoji: '😞', label: 'Often', points: 2 },
    { emoji: '😰', label: 'Always', points: 1 },
  ]},
  { id: 12, category: 'critical', text: 'How often do you have thoughts of self-harm?', options: [
    { emoji: '😌', label: 'Never', points: 5 },
    { emoji: '🙂', label: 'Very Rarely', points: 4 },
    { emoji: '😐', label: 'Occasionally', points: 3 },
    { emoji: '😟', label: 'Sometimes', points: 2 },
    { emoji: '🆘', label: 'Often', points: 1 },
  ]},
  { id: 13, category: 'critical', text: 'How isolated do you feel from others?', options: [
    { emoji: '🤗', label: 'Not at All', points: 5 },
    { emoji: '😊', label: 'Slightly', points: 4 },
    { emoji: '😐', label: 'Somewhat', points: 3 },
    { emoji: '😞', label: 'Very Isolated', points: 2 },
    { emoji: '😰', label: 'Completely Isolated', points: 1 },
  ]},
  { id: 14, category: 'critical', text: 'How difficult is it to get through each day?', options: [
    { emoji: '😊', label: 'Very Easy', points: 5 },
    { emoji: '🙂', label: 'Easy', points: 4 },
    { emoji: '😐', label: 'Manageable', points: 3 },
    { emoji: '😟', label: 'Difficult', points: 2 },
    { emoji: '😰', label: 'Extremely Difficult', points: 1 },
  ]},
  { id: 15, category: 'critical', text: "How much do you feel like you're a burden to others?", options: [
    { emoji: '😊', label: 'Not at All', points: 5 },
    { emoji: '🙂', label: 'Rarely', points: 4 },
    { emoji: '😐', label: 'Sometimes', points: 3 },
    { emoji: '😞', label: 'Often', points: 2 },
    { emoji: '😰', label: 'Always', points: 1 },
  ]},
];

const moodLevels = [
  { name: 'Excellent', range: [65, 75], color: '#6FBFAD', description: "You're in a great mental state! Keep up the positive habits." },
  { name: 'Good', range: [55, 64], color: '#4A90E2', description: "You're doing well overall with some areas for improvement." },
  { name: 'Fair', range: [40, 54], color: '#F5E9DA', description: "You might be experiencing some challenges. It's okay to seek support." },
  { name: 'Concerning', range: [25, 39], color: '#4A90E2', description: 'You may be going through a difficult time. We strongly recommend visiting a counselor.' },
  { name: 'Critical', range: [15, 24], color: '#6FBFAD', description: 'Please seek immediate professional help.' },
];

const getMoodLevel = (score) => {
  return moodLevels.find(level => score >= level.range[0] && score <= level.range[1]) || moodLevels[4];
};

const calculateAssessmentResults = (answers) => {
  const totalScore = answers.reduce((sum, answer) => sum + answer.points, 0);
  const level = getMoodLevel(totalScore);
  const categoryBreakdown = { easy: 0, medium: 0, critical: 0 };
  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    if (question) {
      categoryBreakdown[question.category] += answer.points;
    }
  });
  const completionPercentage = (answers.length / questions.length) * 100;
  return { currentScore: totalScore, level, categoryBreakdown, completionPercentage };
};

const Welcome = ({ onStartAssessment }) => (
  <div style={{ minHeight: '100vh', padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f0f9f7 0%, #e8f4f8 100%)' }}>
    <div style={{ maxWidth: 720, width: '100%', background: 'white', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', padding: 24, textAlign: 'center' }}>
      <h1 style={{ fontSize: 28, marginBottom: 8, color: '#1f2937' }}>Mental Health Support System</h1>
      <p style={{ color: '#6b7280', marginBottom: 24 }}>Take our mood assessment to better understand your wellness and receive personalized recommendations.</p>
      <button onClick={onStartAssessment} style={{ backgroundColor: '#6FBFAD', color: 'white', border: 0, borderRadius: 12, padding: '12px 20px', cursor: 'pointer' }}>Start Your Assessment</button>
    </div>
  </div>
);

const Assessment = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (questionId, points) => {
    const newAnswers = answers.filter((a) => a.questionId !== questionId);
    newAnswers.push({ questionId, points });
    setAnswers(newAnswers);
    setSelectedOption(points);
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
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      const prevAnswer = answers.find((a) => a.questionId === questions[prevIndex].id);
      setSelectedOption(prevAnswer ? prevAnswer.points : null);
    }
  };

  const getCurrentAnswer = () => answers.find((a) => a.questionId === currentQuestion.id);

  const getCategoryBgColor = (category) => {
    switch (category) {
      case 'easy': return '#6FBFAD';
      case 'medium': return '#4A90E2';
      case 'critical': return '#8B7355';
      default: return '#6B7280';
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f0f9f7 0%, #e8f4f8 100%)', minHeight: '100vh', padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden" style={{ width: '100%', maxWidth: 720, background: 'white', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <div className="p-6 text-white" style={{ padding: 16, color: 'white', backgroundColor: '#6FBFAD' }}>
          <div className="flex justify-between items-center mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h2 className="text-xl font-semibold" style={{ fontSize: 18, fontWeight: 600 }}>Mental Health Assessment</h2>
            <span className="text-white opacity-90 text-sm" style={{ fontSize: 12, opacity: 0.9 }}>Question {currentQuestionIndex + 1} of {questions.length}</span>
          </div>
          <div className="w-full rounded-full h-3" style={{ width: '100%', height: 10, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.35)' }}>
            <div className="bg-white h-3 rounded-full transition-all duration-500 ease-out" style={{ height: 10, borderRadius: 999, width: `${progress}%`, background: 'white' }} />
          </div>
        </div>

        <div className="p-8" style={{ padding: 24 }}>
          <div className="mb-6" style={{ marginBottom: 16 }}>
            <span className="inline-block px-4 py-2 rounded-full text-xs font-medium border" style={{ display: 'inline-block', padding: '8px 12px', borderRadius: 999, fontSize: 12, color: 'white', backgroundColor: getCategoryBgColor(currentQuestion.category) }}>
              {currentQuestion.category.charAt(0).toUpperCase() + currentQuestion.category.slice(1)} Level
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-8" style={{ fontSize: 20, fontWeight: 600, color: '#1f2937', marginBottom: 20 }}>
            {currentQuestion.text}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === option.points || (getCurrentAnswer() && getCurrentAnswer().points === option.points);
              return (
                <button key={index} onClick={() => setSelectedOption(option.points)} className="w-full p-4 rounded-xl border-2 text-left" style={{ width: '100%', padding: 16, borderRadius: 12, border: '2px solid', borderColor: isSelected ? '#6FBFAD' : '#E5E7EB', backgroundColor: isSelected ? '#6FBFAD10' : 'white', boxShadow: isSelected ? '0 8px 25px rgba(111,191,173,0.2)' : '0 2px 4px rgba(0,0,0,0.1)' }}>
                  <div className="flex items-center justify-center space-x-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    <span className="text-2xl sm:text-3xl" style={{ fontSize: 22 }}>{option.emoji}</span>
                    <div>
                      <div className="font-medium text-gray-800 text-sm sm:text-base" style={{ color: '#1f2937' }}>{option.label}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} style={{ padding: '10px 16px', borderRadius: 8, border: 0, color: currentQuestionIndex === 0 ? '#9CA3AF' : '#6FBFAD', background: currentQuestionIndex === 0 ? 'transparent' : '#6FBFAD10', cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer' }}>Previous</button>
            <div className="text-center text-sm text-gray-500" style={{ color: '#6b7280', fontSize: 12 }}>
              {answers.length} of {questions.length} answered
            </div>
            <button onClick={() => { if (selectedOption != null) { handleAnswer(currentQuestion.id, selectedOption); } handleNext(); }} disabled={selectedOption == null && !getCurrentAnswer()} style={{ padding: '10px 16px', borderRadius: 8, border: 0, color: 'white', background: selectedOption != null || getCurrentAnswer() ? '#6FBFAD' : '#F3F4F6', cursor: selectedOption != null || getCurrentAnswer() ? 'pointer' : 'not-allowed' }}>
              {currentQuestionIndex === questions.length - 1 ? 'Complete' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Progress = ({ data, onRetake }) => {
  return (
    <div style={{ minHeight: '100vh', padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f0f9f7 0%, #e8f4f8 100%)' }}>
      <div style={{ maxWidth: 720, width: '100%', background: 'white', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', padding: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, color: '#1f2937', marginBottom: 8 }}>Your Results</h2>
        <p style={{ marginBottom: 16 }}>Score: <strong>{data.currentScore}</strong></p>
        <p style={{ marginBottom: 16 }}>Mood Level: <strong style={{ color: data.level.color }}>{data.level.name}</strong></p>
        <div style={{ marginBottom: 16 }}>
          <div style={{ height: 10, background: '#E5E7EB', borderRadius: 999 }}>
            <div style={{ width: `${data.completionPercentage}%`, height: 10, background: '#6FBFAD', borderRadius: 999 }} />
          </div>
          <small style={{ color: '#6b7280' }}>Completion: {Math.round(data.completionPercentage)}%</small>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 20 }}>
          <div style={{ background: '#F9FAFB', padding: 12, borderRadius: 8 }}>
            <div style={{ color: '#6b7280', fontSize: 12 }}>Easy</div>
            <div style={{ fontWeight: 600 }}>{data.categoryBreakdown.easy}</div>
          </div>
          <div style={{ background: '#F9FAFB', padding: 12, borderRadius: 8 }}>
            <div style={{ color: '#6b7280', fontSize: 12 }}>Medium</div>
            <div style={{ fontWeight: 600 }}>{data.categoryBreakdown.medium}</div>
          </div>
          <div style={{ background: '#F9FAFB', padding: 12, borderRadius: 8 }}>
            <div style={{ color: '#6b7280', fontSize: 12 }}>Critical</div>
            <div style={{ fontWeight: 600 }}>{data.categoryBreakdown.critical}</div>
          </div>
        </div>
        <p style={{ color: '#6b7280', marginBottom: 20 }}>{data.level.description}</p>
        <button onClick={onRetake} style={{ backgroundColor: '#6FBFAD', color: 'white', border: 0, borderRadius: 12, padding: '10px 16px', cursor: 'pointer' }}>Retake Assessment</button>
      </div>
    </div>
  );
};
// Inlined components and logic to avoid TS imports


function App() {
  const [currentState, setCurrentState] = useState('welcome');
  const [assessmentResults, setAssessmentResults] = useState(null);

  const handleStartAssessment = () => {
    setCurrentState('assessment');
  };

  const handleAssessmentComplete = (answers) => {
    const results = calculateAssessmentResults(answers);
    setAssessmentResults(results);
    setCurrentState('results');
  };

  const handleRetakeAssessment = () => {
    setAssessmentResults(null);
    setCurrentState('welcome');
  };

  return (
    <div className="App">
      {currentState === 'welcome' && (
        <Welcome onStartAssessment={handleStartAssessment} />
      )}
      
      {currentState === 'assessment' && (
        <Assessment onComplete={handleAssessmentComplete} />
      )}
      
      {currentState === 'results' && assessmentResults && (
        <Progress data={assessmentResults} onRetake={handleRetakeAssessment} />
      )}
    </div>
  );
}

export default App;