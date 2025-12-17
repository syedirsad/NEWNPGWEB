/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          deep: '#050511', // Deep space black
          surface: '#0f1123', // Dark blue-black for cards
          highlight: '#1a1d3d', // Lighter surface
        },
        primary: {
          neon: '#00f2ff', // Electric Cyan
          glow: 'rgba(0, 242, 255, 0.5)',
        },
        secondary: {
          purple: '#bc13fe', // Neon Purple
          glow: 'rgba(188, 19, 254, 0.5)',
        },
        accent: {
          pink: '#f472b6',
          yellow: '#facc15',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(0, 242, 255, 0.6)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 242, 255, 0.3), 0 0 10px rgba(0, 242, 255, 0.1) inset',
        'purple-glow': '0 0 20px rgba(188, 19, 254, 0.3), 0 0 10px rgba(188, 19, 254, 0.1) inset',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'mesh': 'radial-gradient(circle at 50% 50%, rgba(18, 24, 66, 1) 0%, rgba(5, 5, 17, 1) 100%)',
      }
    },
  },
  plugins: [],
}
