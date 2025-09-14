import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Header from '@components/layout/Header'
import Navigation from '@components/layout/Navigation'
import Footer from '@components/layout/Footer'
import LoadingSpinner from '@components/ui/LoadingSpinner'
import ErrorBoundary from '@components/ui/ErrorBoundary'
import { useAppStore } from '@stores/appStore'

// Lazy load components for better performance
const Home = lazy(() => import('@components/pages/Home'))
const QuizView = lazy(() => import('@components/pages/QuizView'))
const MaterialsView = lazy(() => import('@components/pages/MaterialsView'))
const QuestionBankView = lazy(() => import('@components/pages/QuestionBankView'))
const SimulationsView = lazy(() => import('@components/pages/SimulationsView'))
const ProfileView = lazy(() => import('@components/pages/ProfileView'))
const SettingsView = lazy(() => import('@components/pages/SettingsView'))

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3
}

function App() {
  const location = useLocation()
  const { isMenuOpen, setIsMenuOpen } = useAppStore()

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <ErrorBoundary>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Suspense fallback={<LoadingSpinner />}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/quizzes/*" element={<QuizView />} />
                  <Route path="/materials/*" element={<MaterialsView />} />
                  <Route path="/question-bank/*" element={<QuestionBankView />} />
                  <Route path="/simulations/*" element={<SimulationsView />} />
                  <Route path="/profile" element={<ProfileView />} />
                  <Route path="/settings" element={<SettingsView />} />
                </Routes>
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>
        
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

export default App