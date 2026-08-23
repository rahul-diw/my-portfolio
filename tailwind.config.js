// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          card: '#121212',
          border: '#2a2a2a',
          text: {
            primary: '#f5f5f5',
            secondary: '#a0a0a0',
            muted: '#6b6b6b',
          }
        },
        purple: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        gray: {
          800: '#1f1f1f',
          700: '#2d2d2d',
          600: '#4a4a4a',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
          100: '#f5f5f5',
        }
      },
      boxShadow: {
        'glow-purple': '0 0 60px -10px rgba(139, 92, 246, 0.15)',
        'glow-purple-lg': '0 0 80px -10px rgba(139, 92, 246, 0.25)',
        'card-dark': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}