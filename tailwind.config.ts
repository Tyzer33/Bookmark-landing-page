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
      },
      stroke: {
        primary: 'hsla(var(--bg-primary))',
        secondary: 'hsla(var(--bg-secondary))',
        tertiary: 'hsla(var(--bg-tertiary))',
        accent: 'hsla(var(--bg-accent))',
      },
      fill: {
        primary: 'hsla(var(--bg-primary))',
        secondary: 'hsla(var(--bg-secondary))',
        tertiary: 'hsla(var(--bg-tertiary))',
        accent: 'hsla(var(--bg-accent))',
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
      margin: {
        mobile: '2rem',
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
