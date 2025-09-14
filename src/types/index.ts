export interface Material {
  id: string
  title: string
  subTitle: string
  description: string
  type: 'neet-material' | 'ncert' | 'notes' | 'smart-booklet'
  size: string
  link: string
  icon: string
  class: '11' | '12'
  medium: 'english' | 'gujarati'
  chapter?: number
  tags: string[]
  downloadCount?: number
  rating?: number
  lastUpdated: string
}

export interface Quiz {
  id: string
  title: string
  description: string
  chapterInfo: string
  link: string
  icon: string
  iconBgClass: string
  isComingSoon?: boolean
  class: '11' | '12'
  chapter: number
  difficulty: 'easy' | 'medium' | 'hard'
  questionCount: number
  timeLimit: number // in minutes
  tags: string[]
  completionRate?: number
}

export interface QuestionBank {
  id: string
  title: string
  description: string
  class: '11' | '12'
  year: string
  solutionLinks: {
    en: string
    gu: string
  }
  chapters: string[]
  totalQuestions: number
  difficulty: 'easy' | 'medium' | 'hard'
  lastUpdated: string
}

export interface Simulation {
  id: string
  topic: string
  link: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: number // in minutes
  tags: string[]
}

export interface SimulationUnit {
  id: string
  unitName: string
  class: '11' | '12'
  simulations: Simulation[]
  description: string
  learningObjectives: string[]
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  preferences: {
    language: 'en' | 'gu'
    theme: 'light' | 'dark' | 'system'
    notifications: boolean
  }
  progress: {
    completedQuizzes: string[]
    bookmarkedMaterials: string[]
    studyStreak: number
    totalPoints: number
    lastActive: string
  }
  subscription?: {
    type: 'free' | 'premium'
    expiresAt?: string
  }
}

export interface QuizResult {
  id: string
  quizId: string
  userId: string
  score: number
  totalQuestions: number
  timeSpent: number
  completedAt: string
  answers: {
    questionId: string
    selectedAnswer: string
    isCorrect: boolean
    timeSpent: number
  }[]
}

export interface StudySession {
  id: string
  userId: string
  type: 'quiz' | 'material' | 'simulation'
  resourceId: string
  startTime: string
  endTime?: string
  duration: number
  progress: number
}

export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  isRead: boolean
  createdAt: string
  actionUrl?: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  hasNext: boolean
  hasPrev: boolean
}

// Form types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface ProfileForm {
  name: string
  email: string
  preferences: {
    language: 'en' | 'gu'
    theme: 'light' | 'dark' | 'system'
    notifications: boolean
  }
}

// Store types
export interface AppState {
  isMenuOpen: boolean
  isLoading: boolean
  currentView: string
  user: User | null
  isAuthenticated: boolean
  settings: {
    language: 'en' | 'gu'
    theme: 'light' | 'dark' | 'system'
    notifications: boolean
    autoSave: boolean
  }
}

// Utility types
export type ViewType = 'home' | 'quizzes' | 'materials' | 'question-bank' | 'simulations' | 'profile' | 'settings'
export type MaterialScreen = 'main' | 'ncert' | 'neet'
export type NeetMaterialSubView = 'main' | 'class11-english' | 'class12-english' | 'class11-gujarati' | 'class12-gujarati'
export type ClassNumber = '11' | '12'
export type Language = 'en' | 'gu'
export type Theme = 'light' | 'dark' | 'system'