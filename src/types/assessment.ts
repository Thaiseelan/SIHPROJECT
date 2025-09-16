export interface Question {
  id: number;
  category: 'easy' | 'medium' | 'critical';
  text: string;
  options: {
    emoji: string;
    label: string;
    points: number;
  }[];
}

export interface Assessment {
  answers: { questionId: number; points: number }[];
  totalScore: number;
  level: MoodLevel;
  completedAt: Date;
}

export interface MoodLevel {
  name: string;
  range: [number, number];
  color: string;
  description: string;
  recommendations: string[];
  resources: string[];
}

export interface ProgressData {
  currentScore: number;
  level: MoodLevel;
  categoryBreakdown: {
    easy: number;
    medium: number;
    critical: number;
  };
  completionPercentage: number;
}