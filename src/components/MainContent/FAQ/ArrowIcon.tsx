function ArrowIcon({ isActive }: Props) {
  return (
    <svg
      className={isActive ? 'rotate-180' : ''}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
    >
      <path
        fill="none"
        className={isActive ? 'stroke-accent' : 'stroke-secondary'}
        strokeWidth="3"
        d="M1 1l8 8 8-8"
      />
    </svg>
  )
}
export default ArrowIcon

type Props = {
  isActive: boolean
}
