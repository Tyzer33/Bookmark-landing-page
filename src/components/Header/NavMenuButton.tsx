import { useState } from 'react'
import { createPortal } from 'react-dom'
import hamburgerIcon from '../../assets/icon-hamburger.svg'
import NavMenu from './NavMenu'

function NavMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setIsMenuOpen(true)}>
        <img src={hamburgerIcon} alt="Icon to access the menu" />
      </button>
      {isMenuOpen &&
        createPortal(<NavMenu setIsMenuOpen={setIsMenuOpen} />, document.body)}
    </>
  )
}
export default NavMenuButton
