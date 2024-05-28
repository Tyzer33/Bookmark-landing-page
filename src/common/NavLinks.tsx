/* eslint-disable jsx-a11y/anchor-is-valid */
import { navLinks } from '../data'

function NavLinks({ ulClassName = '', liClassName = '' }: Props) {
  return (
    <nav className="">
      <ul className={ulClassName}>
        {navLinks.map(({ id, name }) => (
          <li key={id} className={liClassName}>
            <a href="#">{name.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default NavLinks

type Props = {
  ulClassName?: string
  liClassName?: string
}
