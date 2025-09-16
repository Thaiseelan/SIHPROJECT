import { Question, MoodLevel } from '../types/assessment';

export const questions: Question[] = [
  // Easy Questions (1-5)
  {
    id: 1,
    category: 'easy',
    text: 'How are you feeling right now?',
    options: [
      { emoji: '😊', label: 'Very Happy', points: 5 },
      { emoji: '🙂', label: 'Happy', points: 4 },
      { emoji: '😐', label: 'Neutral', points: 3 },
      { emoji: '😕', label: 'Sad', points: 2 },
      { emoji: '😢', label: 'Very Sad', points: 1 },
    ],
  },
  {
    id: 2,
    category: 'easy',
    text: 'How well did you sleep last night?',
    options: [
      { emoji: '😴', label: 'Excellent', points: 5 },
      { emoji: '😊', label: 'Good', points: 4 },
      { emoji: '😐', label: 'Okay', points: 3 },
      { emoji: '😴', label: 'Poor', points: 2 },
      { emoji: '😵', label: 'Terrible', points: 1 },
    ],
  },
  {
    id: 3,
    category: 'easy',
    text: 'How is your energy level today?',
    options: [
      { emoji: '⚡', label: 'Very High', points: 5 },
      { emoji: '😄', label: 'High', points: 4 },
      { emoji: '😐', label: 'Normal', points: 3 },
      { emoji: '😔', label: 'Low', points: 2 },
      { emoji: '😴', label: 'Very Low', points: 1 },
    ],
  },
  {
    id: 4,
    category: 'easy',
    text: 'How satisfied are you with your social connections?',
    options: [
      { emoji: '🥰', label: 'Very Satisfied', points: 5 },
      { emoji: '😊', label: 'Satisfied', points: 4 },
      { emoji: '😐', label: 'Neutral', points: 3 },
      { emoji: '😞', label: 'Unsatisfied', points: 2 },
      { emoji: '😰', label: 'Very Unsatisfied', points: 1 },
    ],
  },
  {
    id: 5,
    category: 'easy',
    text: 'How would you rate your appetite today?',
    options: [
      { emoji: '😋', label: 'Great', points: 5 },
      { emoji: '🙂', label: 'Good', points: 4 },
      { emoji: '😐', label: 'Normal', points: 3 },
      { emoji: '😕', label: 'Poor', points: 2 },
      { emoji: '😰', label: 'No Appetite', points: 1 },
    ],
  },

  // Medium Questions (6-10)
  {
    id: 6,
    category: 'medium',
    text: 'How often do you feel overwhelmed by daily tasks?',
    options: [
      { emoji: '😌', label: 'Never', points: 5 },
      { emoji: '🙂', label: 'Rarely', points: 4 },
      { emoji: '😐', label: 'Sometimes', points: 3 },
      { emoji: '😰', label: 'Often', points: 2 },
      { emoji: '😫', label: 'Always', points: 1 },
    ],
  },
  {
    id: 7,
    category: 'medium',
    text: 'How well can you concentrate on tasks?',
    options: [
      { emoji: '🎯', label: 'Excellent Focus', points: 5 },
      { emoji: '😊', label: 'Good Focus', points: 4 },
      { emoji: '😐', label: 'Average', points: 3 },
      { emoji: '😕', label: 'Poor Focus', points: 2 },
      { emoji: '😵‍💫', label: 'Can\'t Focus', points: 1 },
    ],
  },
  {
    id: 8,
    category: 'medium',
    text: 'How do you feel about your future?',
    options: [
      { emoji: '🌟', label: 'Very Optimistic', points: 5 },
      { emoji: '😊', label: 'Optimistic', points: 4 },
      { emoji: '😐', label: 'Neutral', points: 3 },
      { emoji: '😟', label: 'Pessimistic', points: 2 },
      { emoji: '😰', label: 'Very Worried', points: 1 },
    ],
  },
  {
    id: 9,
    category: 'medium',
    text: 'How often do you experience mood swings?',
    options: [
      { emoji: '😌', label: 'Never', points: 5 },
      { emoji: '🙂', label: 'Rarely', points: 4 },
      { emoji: '😐', label: 'Sometimes', points: 3 },
      { emoji: '😕', label: 'Often', points: 2 },
      { emoji: '😰', label: 'Very Often', points: 1 },
    ],
  },
  {
    id: 10,
    category: 'medium',
    text: 'How comfortable are you expressing your emotions?',
    options: [
      { emoji: '😊', label: 'Very Comfortable', points: 5 },
      { emoji: '🙂', label: 'Comfortable', points: 4 },
      { emoji: '😐', label: 'Neutral', points: 3 },
      { emoji: '😕', label: 'Uncomfortable', points: 2 },
      { emoji: '😰', label: 'Very Uncomfortable', points: 1 },
    ],
  },

  // Critical Questions (11-15)
  {
    id: 11,
    category: 'critical',
    text: 'How often do you feel hopeless about your situation?',
    options: [
      { emoji: '😊', label: 'Never', points: 5 },
      { emoji: '🙂', label: 'Rarely', points: 4 },
      { emoji: '😐', label: 'Sometimes', points: 3 },
      { emoji: '😞', label: 'Often', points: 2 },
      { emoji: '😰', label: 'Always', points: 1 },
    ],
  },
  {
    id: 12,
    category: 'critical',
    text: 'How often do you have thoughts of self-harm?',
    options: [
      { emoji: '😌', label: 'Never', points: 5 },
      { emoji: '🙂', label: 'Very Rarely', points: 4 },
      { emoji: '😐', label: 'Occasionally', points: 3 },
      { emoji: '😟', label: 'Sometimes', points: 2 },
      { emoji: '🆘', label: 'Often', points: 1 },
    ],
  },
  {
    id: 13,
    category: 'critical',
    text: 'How isolated do you feel from others?',
    options: [
      { emoji: '🤗', label: 'Not at All', points: 5 },
      { emoji: '😊', label: 'Slightly', points: 4 },
      { emoji: '😐', label: 'Somewhat', points: 3 },
      { emoji: '😞', label: 'Very Isolated', points: 2 },
      { emoji: '😰', label: 'Completely Isolated', points: 1 },
    ],
  },
  {
    id: 14,
    category: 'critical',
    text: 'How difficult is it to get through each day?',
    options: [
      { emoji: '😊', label: 'Very Easy', points: 5 },
      { emoji: '🙂', label: 'Easy', points: 4 },
      { emoji: '😐', label: 'Manageable', points: 3 },
      { emoji: '😟', label: 'Difficult', points: 2 },
      { emoji: '😰', label: 'Extremely Difficult', points: 1 },
    ],
  },
  {
    id: 15,
    category: 'critical',
    text: 'How much do you feel like you\'re a burden to others?',
    options: [
      { emoji: '😊', label: 'Not at All', points: 5 },
      { emoji: '🙂', label: 'Rarely', points: 4 },
      { emoji: '😐', label: 'Sometimes', points: 3 },
      { emoji: '😞', label: 'Often', points: 2 },
      { emoji: '😰', label: 'Always', points: 1 },
    ],
  },
];

export const moodLevels: MoodLevel[] = [
  {
    name: 'Excellent',
    range: [65, 75],
    color: '#6FBFAD', // Soft Teal
    description: 'You\'re in a great mental state! Keep up the positive habits.',
    recommendations: [
      'Continue your current wellness routine and self-care practices',
      'Share your positive energy and support others in your community',
      'Consider keeping a gratitude journal to maintain this positive state',
      'Explore mindfulness apps and meditation resources to sustain well-being',
    ],
    resources: [
      'Headspace - Meditation and mindfulness app',
      'Calm - Sleep stories and relaxation techniques',
      'Ten Percent Happier - Practical meditation guidance',
      'Insight Timer - Free meditation community',
    ],
  },
  {
    name: 'Good',
    range: [55, 64],
    color: '#4A90E2', // Muted Blue
    description: 'You\'re doing well overall with some areas for improvement.',
    recommendations: [
      'Maintain consistent sleep schedule (7-9 hours nightly)',
      'Engage in regular physical activity - even 20 minutes daily helps',
      'Practice mindfulness or meditation to manage stress',
      'Connect with supportive friends and family regularly',
    ],
    resources: [
      'Sleep Foundation - Sleep hygiene tips and resources',
      'MyFitnessPal - Track physical activity and nutrition',
      'Headspace - Guided meditation and sleep stories',
      'Crisis Text Line - Text HOME to 741741 for support',
    ],
  },
  {
    name: 'Fair',
    range: [40, 54],
    color: '#F5E9DA', // Warm Beige (with darker text)
    description: 'You might be experiencing some challenges. It\'s okay to seek support.',
    recommendations: [
      'Consider speaking with a trusted friend, family member, or counselor',
      'Establish a daily routine that includes activities you enjoy',
      'Practice deep breathing exercises and grounding techniques',
      'Consider professional counseling if challenges persist',
    ],
    resources: [
      'Psychology Today - Find local therapists and counselors',
      'BetterHelp - Online therapy and counseling services',
      'NAMI - National Alliance on Mental Illness resources',
      '7 Cups - Free emotional support and online therapy',
    ],
  },
  {
    name: 'Concerning',
    range: [25, 39],
    color: '#4A90E2', // Muted Blue (professional tone)
    description: 'You may be going through a difficult time. We strongly recommend visiting a counselor.',
    recommendations: [
      'Schedule an appointment with a mental health professional or counselor',
      'Reach out to trusted friends or family members for support',
      'Consider joining a support group in your area',
      'Contact your healthcare provider for professional guidance',
    ],
    resources: [
      'Psychology Today - Find therapists accepting new patients',
      'SAMHSA Helpline - 1-800-662-4357 (free, confidential, 24/7)',
      'Crisis Text Line - Text HOME to 741741',
      'Your local community mental health center',
    ],
  },
  {
    name: 'Critical',
    range: [15, 24],
    color: '#6FBFAD', // Soft Teal (calming but urgent)
    description: 'Please seek immediate professional help. You must visit a counselor or mental health professional right away.',
    recommendations: [
      'Contact a mental health crisis hotline or emergency services immediately',
      'Visit the nearest emergency room or call 911 if you\'re in immediate danger',
      'Reach out to a trusted person and tell them how you\'re feeling right now',
      'Schedule an urgent appointment with a mental health professional today',
    ],
    resources: [
      'National Suicide Prevention Lifeline - 988 (24/7 crisis support)',
      'Crisis Text Line - Text HOME to 741741',
      'Emergency Services - 911',
      'SAMHSA National Helpline - 1-800-662-4357',
    ],
  },
];

export const getMoodLevel = (score: number): MoodLevel => {
  return moodLevels.find(level => score >= level.range[0] && score <= level.range[1]) || moodLevels[4];
};