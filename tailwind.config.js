/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1726',
          DEFAULT: '#10243A', // Deep navy blue
          light: '#1A3654',
          muted: '#244569',
        },
        royal: {
          DEFAULT: '#1769AA', // Royal blue
          hover: '#135890',
          light: '#2E86DE',
          subtle: '#E8F1F9',
        },
        eco: {
          DEFAULT: '#3B8D63', // Eco green
          hover: '#317652',
          light: '#4EAE7C',
          subtle: '#EBF6F0',
        },
        surface: {
          DEFAULT: '#F4F6F8', // Light grey
          card: '#FFFFFF',
          border: '#E2E8F0',
          dark: '#17212B', // Dark text
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(16, 36, 58, 0.08)',
        'premium-hover': '0 25px 50px -12px rgba(16, 36, 58, 0.16)',
        'float': '0 12px 30px -8px rgba(16, 36, 58, 0.12)',
        'card': '0 4px 20px -2px rgba(16, 36, 58, 0.05)',
      }
    },
  },
  plugins: [],
}
