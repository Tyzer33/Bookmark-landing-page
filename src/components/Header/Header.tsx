import logoBookmark from '../../assets/logo-bookmark.svg'
import hamburgerIcon from '../../assets/icon-hamburger.svg'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import NavMenu from './NavMenu'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`mx-8 my-10 flex items-center justify-between`}>
      <img src={logoBookmark} alt="Main site logo for Bookmark" />
      <button type="button" onClick={() => setIsMenuOpen(true)}>
        <img src={hamburgerIcon} alt="Icon to access the menu" />
      </button>
      {isMenuOpen &&
        createPortal(<NavMenu setIsMenuOpen={setIsMenuOpen} />, document.body)}
    </header>
  )
}
export default Header
