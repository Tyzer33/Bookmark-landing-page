/* eslint-disable jsx-a11y/anchor-is-valid */
import { twMerge } from 'tailwind-merge'
import { navLinks } from '../data'

function NavLinks({
  navClassName = '',
  ulClassName = '',
  liClassName = '',
  aClassName = '',
  extendClickArea = false,
}: Props) {
  return (
    <nav className={navClassName}>
      <ul
        className={twMerge(
          `text-[.8125rem]/4 tracking-[0.11em] lg:flex lg:gap-12`,
          ulClassName,
        )}
      >
        {navLinks.map(({ id, name }) => (
          <li key={id} className={liClassName}>
            <a
              className={twMerge(
                'cursor-pointer transition-colors hover:text-accent focus-visible:text-accent',
                extendClickArea && 'relative after:absolute after:-inset-[1em]',
                aClassName,
              )}
              href="#"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default NavLinks

type Props = {
  navClassName?: string
  ulClassName?: string
  liClassName?: string
  aClassName?: string
  extendClickArea?: boolean
}
