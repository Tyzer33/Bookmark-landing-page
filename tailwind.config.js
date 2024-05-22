/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'hsla(var(--bg-primary))',
        secondary: 'hsla(var(--bg-secondary))',
        tertiary: 'hsla(var(--bg-tertiary))',
        accent: 'hsla(var(--bg-accent))',
        test: 'hsla(var(--test))',
      },
      textColor: {
        primary: 'hsla(var(--text-primary))',
        secondary: 'hsla(var(--text-secondary))',
        tertiary: 'hsla(var(--text-tertiary))',
      },
      borderColor: {
        primary: 'hsla(var(--border-primary))',
        secondary: 'hsla(var(--border-secondary))',
      },
      boxShadowColor: {
        default: 'hsla(var(--shadow))',
      },
      fontFamily: {
        default: ['Rubik', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
}
