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
        error: 'hsla(var(--error))',
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
        error: 'hsla(var(--error))',
      },
      boxShadowColor: {
        default: 'hsla(var(--shadow))',
      },
      margin: {
        mobile: '2rem',
        desktop: '7.5rem',
      },
      padding: {
        mobile: '2rem',
        desktop: '7.5rem',
      },
      maxWidth: {
        container: '69.375rem',
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
