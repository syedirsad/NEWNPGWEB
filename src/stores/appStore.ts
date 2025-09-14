import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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
  }
}

interface AppState {
  // UI State
  isMenuOpen: boolean
  isLoading: boolean
  currentView: string
  
  // User State
  user: User | null
  isAuthenticated: boolean
  
  // Settings
  settings: {
    language: 'en' | 'gu'
    theme: 'light' | 'dark' | 'system'
    notifications: boolean
    autoSave: boolean
  }
  
  // Actions
  setIsMenuOpen: (isOpen: boolean) => void
  setIsLoading: (loading: boolean) => void
  setCurrentView: (view: string) => void
  setUser: (user: User | null) => void
  updateUserProgress: (progress: Partial<User['progress']>) => void
  updateSettings: (settings: Partial<AppState['settings']>) => void
  logout: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      isMenuOpen: false,
      isLoading: false,
      currentView: 'home',
      user: null,
      isAuthenticated: false,
      settings: {
        language: 'en',
        theme: 'system',
        notifications: true,
        autoSave: true,
      },
      
      // Actions
      setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
      
      setIsLoading: (loading) => set({ isLoading: loading }),
      
      setCurrentView: (view) => set({ currentView: view }),
      
      setUser: (user) => set({ 
        user, 
        isAuthenticated: !!user 
      }),
      
      updateUserProgress: (progress) => {
        const { user } = get()
        if (user) {
          set({
            user: {
              ...user,
              progress: { ...user.progress, ...progress }
            }
          })
        }
      },
      
      updateSettings: (newSettings) => {
        const { settings } = get()
        set({
          settings: { ...settings, ...newSettings }
        })
      },
      
      logout: () => set({ 
        user: null, 
        isAuthenticated: false 
      }),
    }),
    {
      name: 'neet-physics-app-store',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        settings: state.settings,
      }),
    }
  )
)