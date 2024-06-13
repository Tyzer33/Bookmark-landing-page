/* eslint-disable jsx-a11y/anchor-is-valid */
import { twMerge } from 'tailwind-merge'
import { navLinks } from '../data'

function NavLinks({
  navClassName = '',
  ulClassName = '',
  liClassName = '',
}: Props) {
  return (
    <nav className={navClassName}>
      <ul
        className={twMerge(
          `gap-12 text-[.8125rem]/4 tracking-[0.11em] lg:flex`,
          ulClassName,
        )}
      >
        {navLinks.map(({ id, name }) => (
          <li key={id} className={liClassName}>
            <a href="#">{name}</a>
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
}
