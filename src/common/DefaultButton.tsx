import { twMerge } from 'tailwind-merge'

const themesClassnames = {
  primary:
    'bg-secondary text-tertiary hover:text-quaternary focus-visible:text-quaternary',
  secondary:
    'bg-tertiary/5 text-secondary hover:text-secondary focus-visible:text-secondary',
  accent: 'bg-accent text-tertiary hover:text-accent focus-visible:text-accent',
}

function DefaultButton({
  children,
  className = '',
  theme = 'primary',
  size = 'normal',
  type = 'button',
}: Props) {
  return (
    <button
      className={twMerge(
        'rounded-md py-3 shadow-lg shadow-default outline outline-2 -outline-offset-2 outline-transparent transition-[outline,color,background-color]',
        'hover:bg-primary hover:outline-current',
        'focus-visible:bg-primary focus-visible:outline-current',
        size === 'small' && 'px-8 text-[.8125rem]/4 tracking-[0.11em]',
        size === 'normal' && 'px-4 text-[.9375rem]/6 lg:px-6',
        themesClassnames[theme],
        className,
      )}
      type={type === 'submit' ? 'submit' : 'button'}
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
  type?: 'button' | 'submit'
}
