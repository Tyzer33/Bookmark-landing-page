function DefaultButton({ children, className = '', theme = 'primary' }: Props) {
  const themes = {
    primary: 'bg-secondary text-tertiary',
    secondary: 'bg-tertiary/5 text-secondary',
    accent: 'bg-accent text-tertiary',
  }

  return (
    <div
      className={`${className} ${themes[theme]} rounded-md px-4 py-3 shadow-lg shadow-default`}
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
