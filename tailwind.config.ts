import type { Config } from 'tailwindcss'

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
        quaternary: 'hsla(var(--text-quaternary))',
        accent: 'hsla(var(--text-accent))',
      },
      borderColor: {
        primary: 'hsla(var(--border-primary))',
        secondary: 'hsla(var(--border-secondary))',
        error: 'hsla(var(--error))',
      },
      boxShadowColor: {
        default: 'hsla(var(--shadow))',
      },
      outlineColor: {
        error: 'hsla(var(--error))',
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
      animation: {
        slidein: 'slidein 300ms ease-in-out',
        error: 'error 500ms ease-in-out',
      },
      keyframes: {
        slidein: {
          '0%': {
            transform: 'translateX(-75%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        error: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
            transformOrigin: '50% 50%',
          },
          '10%': {
            transform: 'rotate(3deg)',
          },
          '20%, 40%, 60%': {
            transform: 'rotate(-5deg)',
          },
          '30%, 50%, 70%': {
            transform: 'rotate(5deg)',
          },
          '80%': {
            transform: 'rotate(-3deg)',
          },
          '90%': {
            transform: 'rotate(3deg)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
