import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Brain,
  BookOpen,
  Archive,
  FlaskConical,
  TrendingUp,
  Download,
  Users,
  Award,
  Clock,
  Target
} from 'lucide-react'

const features = [
  {
    title: 'Interactive Quizzes',
    description: 'Chapter-wise quizzes with instant feedback and detailed explanations',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    link: '/quizzes',
    stats: '50+ Quizzes'
  },
  {
    title: 'Study Materials',
    description: 'Comprehensive NEET and NCERT materials in English & Gujarati',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    link: '/materials',
    stats: '100+ PDFs'
  },
  {
    title: 'Question Banks',
    description: 'GSEB question bank solutions with step-by-step explanations',
    icon: Archive,
    color: 'from-green-500 to-emerald-500',
    link: '/question-bank',
    stats: 'Latest Papers'
  },
  {
    title: 'Physics Simulations',
    description: 'Interactive PhET simulations for better concept understanding',
    icon: FlaskConical,
    color: 'from-orange-500 to-red-500',
    link: '/simulations',
    stats: '30+ Simulations'
  }
]

const stats = [
  { label: 'Active Students', value: '10,000+', icon: Users },
  { label: 'Study Materials', value: '100+', icon: BookOpen },
  { label: 'Success Rate', value: '95%', icon: Award },
  { label: 'Years Experience', value: '10+', icon: Clock }
]

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="text-center py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8 }}
          animate={heroInView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-poppins text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-white text-shadow-lg">
            Master NEET Physics
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              with Confidence
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed text-shadow">
            Your complete companion for NEET Physics preparation with interactive quizzes, 
            comprehensive study materials, and expert guidance in English & Gujarati.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/quizzes"
            className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
          >
            <Brain className="w-5 h-5" />
            Start Learning
          </Link>
          <Link
            to="/materials"
            className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
          >
            <Download className="w-5 h-5" />
            Download Materials
          </Link>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-16"
        initial={{ opacity: 0 }}
        animate={statsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0 }}
        animate={featuresInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white text-shadow-lg">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg sm:text-xl text-white/90 font-medium max-w-3xl mx-auto text-shadow">
            Comprehensive tools and resources designed specifically for NEET Physics preparation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={feature.link} className="block group">
                  <div className="glass rounded-2xl p-8 card-hover h-full">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-poppins text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {feature.title}
                          </h3>
                          <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            {feature.stats}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                          <span>Explore</span>
                          <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="text-center py-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
          <Target className="w-16 h-16 mx-auto mb-6 text-blue-600" />
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Ready to Ace NEET Physics?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their NEET dreams 
            with our comprehensive preparation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quizzes"
              className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
            >
              <Brain className="w-5 h-5" />
              Start Your Journey
            </Link>
            <a
              href="https://syedirsad.github.io/march2026tips/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
            >
              <TrendingUp className="w-5 h-5" />
              Strategy 2026
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home