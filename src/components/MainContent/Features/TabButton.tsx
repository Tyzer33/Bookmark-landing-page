function TabButton({ handleClick, name, selected }: Props) {
  return (
    <button
      className={`relative h-14 text-[1.0625rem] ${name === selected ? 'text-secondary after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-36 after:-translate-x-1/2 after:bg-accent after:content-[""]' : 'text-primary'}`}
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
  selected: string
}
