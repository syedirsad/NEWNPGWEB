import React from 'react'
import { motion } from 'framer-motion'
import { 
  Youtube, 
  MessageCircle, 
  Send, 
  Instagram,
  Phone,
  Mail
} from 'lucide-react'

const socialLinks = [
  {
    name: 'YouTube',
    icon: Youtube,
    href: 'https://www.youtube.com/@npgujarati',
    color: 'hover:bg-red-600',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://chat.whatsapp.com/LGeExJ4a5562e13B04uuQm',
    color: 'hover:bg-green-500',
  },
  {
    name: 'Telegram',
    icon: Send,
    href: 'https://t.me/neet_physics_gujarati',
    color: 'hover:bg-sky-500',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/neet_physics.gujarati',
    color: 'hover:bg-pink-600',
  },
]

const contactInfo = [
  {
    icon: Phone,
    text: '+91 96018 27762',
    href: 'tel:+919601827762',
  },
  {
    icon: Send,
    text: '@neet_physics_gujarati',
    href: 'https://t.me/neet_physics_gujarati',
  },
  {
    icon: Instagram,
    text: '@neet_physics.gujarati',
    href: 'https://instagram.com/neet_physics.gujarati',
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/syedirsad/CHAP1/main/logo.png"
                  alt="NPG Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-poppins text-xl font-bold">
                  NEET Physics Gujarati
                </h3>
                <p className="text-gray-300 text-sm">By Irshad Sir</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering NEET aspirants with comprehensive physics preparation 
              materials, interactive quizzes, and expert guidance in both English 
              and Gujarati medium.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white/70 bg-white/10 transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Quizzes', href: '/quizzes' },
                { name: 'Study Materials', href: '/materials' },
                { name: 'Question Banks', href: '/question-bank' },
                { name: 'Simulations', href: '/simulations' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  </li>
                )
              })}
              <li>
                <a
                  href="mailto:syed.irsad@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">syed.irsad@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Syed Irsad. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer