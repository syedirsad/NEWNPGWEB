import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, User, Settings } from 'lucide-react'
import { useAppStore } from '@stores/appStore'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { user, isAuthenticated } = useAppStore()

  return (
    <motion.header
      className="bg-white/90 backdrop-blur-md py-4 sticky top-0 z-50 shadow-sm border-b border-white/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <motion.div
            className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 border-white/20 overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://raw.githubusercontent.com/syedirsad/CHAP1/main/logo.png"
              alt="NPG Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
          <div className="text-gray-800">
            <h1 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold tracking-wide group-hover:text-blue-600 transition-colors">
              NEET PHYSICS GUJARATI
            </h1>
            <p className="text-xs sm:text-sm opacity-80 font-medium">
              BY IRSHAD SIR
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {/* Strategy 2026 Button */}
          <motion.a
            href="https://syedirsad.github.io/march2026tips/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🚀</span>
            <span>Strategy 2026</span>
          </motion.a>

          {/* User Profile */}
          {isAuthenticated && user ? (
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/profile"
                className="flex items-center gap-2 bg-white/80 hover:bg-white px-4 py-2 rounded-full transition-all duration-300 shadow-sm"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-5 h-5 text-gray-600" />
                )}
                <span className="text-sm font-medium text-gray-700">
                  {user.name}
                </span>
              </Link>
              <Link
                to="/settings"
                className="p-2 bg-white/80 hover:bg-white rounded-full transition-all duration-300 shadow-sm"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </Link>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <button className="text-gray-600 hover:text-gray-800 font-medium px-4 py-2 rounded-lg transition-colors">
                Sign In
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                Sign Up
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <motion.button
            className="sm:hidden p-2 text-gray-600 hover:text-gray-800 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header