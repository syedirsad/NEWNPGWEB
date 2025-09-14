import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Brain,
  BookOpen,
  Archive,
  FlaskConical,
  User,
  Settings,
} from 'lucide-react'

interface NavigationProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

const navItems = [
  { label: 'Home', icon: Home, path: '/' },
  { label: 'Quizzes', icon: Brain, path: '/quizzes' },
  { label: 'Materials', icon: BookOpen, path: '/materials' },
  { label: 'Question Bank', icon: Archive, path: '/question-bank' },
  { label: 'Simulations', icon: FlaskConical, path: '/simulations' },
]

const mobileOnlyItems = [
  { label: 'Profile', icon: User, path: '/profile' },
  { label: 'Settings', icon: Settings, path: '/settings' },
]

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-[84px] z-40 shadow-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden sm:flex justify-center py-3 space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    active
                      ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {active && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full -z-10"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleNavClick}
          >
            <motion.div
              className="absolute top-0 right-0 w-80 max-w-[90vw] h-full bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                  <button
                    onClick={handleNavClick}
                    className="p-2 text-gray-500 hover:text-gray-700 rounded-lg"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-2">
                  {[...navItems, ...mobileOnlyItems].map((item) => {
                    const Icon = item.icon
                    const active = isActive(item.path)
                    
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={handleNavClick}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                          active
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="space-y-2">
                    <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                      Sign In
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation