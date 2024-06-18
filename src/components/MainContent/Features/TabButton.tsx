import { twMerge } from 'tailwind-merge'

function TabButton({ handleClick, name, isSelected }: Props) {
  return (
    <button
      className={twMerge(
        'relative h-14 border-b-1 border-primary text-[1.0625rem] transition-colors lg:h-20 lg:w-[15.125rem]',
        isSelected ? 'text-secondary' : 'text-secondary/75 hover:text-accent',
        'after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-36 after:-translate-x-1/2 after:scale-x-0 after:bg-accent after:opacity-0 after:transition-[transform,opacity] after:content-[""] lg:after:w-full',
        isSelected && 'after:scale-x-100 after:opacity-100',
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
