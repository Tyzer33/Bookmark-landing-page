import { twMerge } from 'tailwind-merge'

const themes = {
  primary: 'bg-secondary text-tertiary',
  secondary: 'bg-tertiary/5 text-secondary',
  accent: 'bg-accent text-tertiary',
}

function DefaultButton({ children, className = '', theme = 'primary' }: Props) {
  return (
    <div
      className={twMerge(
        'rounded-md px-4 py-3 shadow-lg shadow-default',
        className,
        themes[theme],
      )}
    >
      {children}
    </div>
  )
}
export default DefaultButton

type Props = {
  children: React.ReactNode
  className?: string
  theme?: 'primary' | 'secondary' | 'accent'
}
