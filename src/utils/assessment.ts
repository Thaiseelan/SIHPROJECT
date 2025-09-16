import { questions, getMoodLevel } from '../data/questions';
import { ProgressData } from '../types/assessment';

export const calculateAssessmentResults = (answers: { questionId: number; points: number }[]): ProgressData => {
  const totalScore = answers.reduce((sum, answer) => sum + answer.points, 0);
  const level = getMoodLevel(totalScore);
  
  // Calculate category breakdown
  const categoryBreakdown = {
    easy: 0,
    medium: 0,
    critical: 0,
  };
  
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      categoryBreakdown[question.category] += answer.points;
    }
  });
  
  const completionPercentage = (answers.length / questions.length) * 100;
  
  return {
    currentScore: totalScore,
    level,
    categoryBreakdown,
    completionPercentage,
  };
};