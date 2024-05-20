/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        error: 'rgba(var(--color-error))',
      },
      textColor: {
        heading: 'rgba(var(--color-text-heading))',
        body: 'rgba(var(--color-text-body))',
      },
      borderColor: {
        default: 'rgba(var(--color-border))',
      },
      backgroundColor: {
        root: 'rgba(var(--color-bg-root))',
        primary: 'rgba(var(--color-bg-primary))',
        accent: 'rgba(var(--color-bg-accent))',
        'nav-menu': 'rgba(var(--color-bg-nav-menu))',
      },
      fontFamily: {
        default: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
