import { twJoin } from 'tailwind-merge'

function TabButton({ handleClick, name, isSelected }: Props) {
  return (
    <button
      className={twJoin(
        'relative h-14 text-[1.0625rem]',
        isSelected ? 'text-secondary' : 'text-primary',
        isSelected &&
          'after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-36 after:-translate-x-1/2 after:bg-accent after:content-[""]',
      )}
      key={name}
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  )
}
export default TabButton

type Props = {
  handleClick: () => void
  name: string
  isSelected: boolean
}
