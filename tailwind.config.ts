import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class', '[data-kb-theme="dark"]'],
  content: ['./src/**/*.{ts,tsx}'],

  theme: {

    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {},
      // borderRadius: {},
      // keyframes: {},
      // animation: {},
    },
  },
  plugins: [
    // require('tailwindcss-animate'),
  ],
} satisfies Config
