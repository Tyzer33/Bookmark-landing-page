import { twMerge } from 'tailwind-merge'

const themes = {
  primary: 'bg-secondary text-tertiary',
  secondary: 'bg-tertiary/5 text-secondary',
  accent: 'bg-accent text-tertiary',
}

function DefaultButton({
  children,
  className = '',
  theme = 'primary',
  size = 'normal',
}: Props) {
  return (
    <button
      className={twMerge(
        'rounded-md py-3 shadow-lg shadow-default',
        size === 'small' && 'px-8 text-[.8125rem]/4 tracking-[0.11em]',
        size === 'normal' && 'px-4 text-[.9375rem]/6 lg:px-6',
        themes[theme],
        className,
      )}
      type="button"
    >
      {children}
    </button>
  )
}
export default DefaultButton

type Props = {
  children: React.ReactNode
  className?: string
  theme?: 'primary' | 'secondary' | 'accent'
  size?: 'normal' | 'small'
}
