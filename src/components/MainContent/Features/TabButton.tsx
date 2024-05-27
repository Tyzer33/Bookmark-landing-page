import { twJoin } from 'tailwind-merge'
import { twAfter } from '../../../utils/tailwind'

function TabButton({ handleClick, name, isSelected }: Props) {
  return (
    <button
      className={twJoin(
        'relative h-14 text-[1.0625rem]',
        isSelected ? 'text-secondary' : 'text-primary',
        isSelected &&
          twAfter(
            'absolute bottom-0 left-1/2 h-1 w-36 -translate-x-1/2 bg-accent content-[""]',
          ),
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
