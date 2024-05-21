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
        alternative: 'rgba(var(--color-text-alternative))',
        button: {
          primary: 'rgba(var(--color-text-button-primary))',
          secondary: 'rgba(var(--color-text-button-secondary))',
        },
      },
      borderColor: {
        default: 'rgba(var(--color-border))',
        alternative: 'rgba(var(--color-border-alternative))',
      },
      backgroundColor: {
        root: 'rgba(var(--color-bg-root))',
        primary: 'rgba(var(--color-bg-primary))',
        button: {
          primary: 'rgba(var(--color-bg-button-primary))',
          secondary: 'rgba(var(--color-bg-button-secondary))',
        },
        accent: 'rgba(var(--color-bg-accent))',
        'nav-menu': 'rgba(var(--color-bg-nav-menu))',
        footer: 'rgba(var(--color-bg-footer))',
      },
      fontFamily: {
        default: ['Rubik', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
      boxShadowColor: {
        default: 'rgba(var(--color-shadow))',
      },
    },
  },
  plugins: [],
}
