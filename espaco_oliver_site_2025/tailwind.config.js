/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ec4899',
        'primary-dark': '#be185d',
        secondary: '#8b5cf6',
      },
      fontFamily: {
        serif: ['var(--font-old-standard-tt)', 'serif'],
        sans: ['var(--font-funnel-sans)', 'sans-serif'],
        instrument: ['var(--font-instrument-serif)', 'serif'],
      },
    },
  },
  plugins: [],
} 