import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import hamburgerIcon from '../../assets/icon-hamburger.svg'
import NavMenu from './NavMenu'
import BookmarkLogo from '../../common/BookmarkLogo'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen)
  }, [isMenuOpen])

  return (
    <header className="mx-mobile my-10 flex items-center justify-between">
      <BookmarkLogo />
      <button type="button" onClick={() => setIsMenuOpen(true)}>
        <img src={hamburgerIcon} alt="Icon to access the menu" />
      </button>
      {isMenuOpen &&
        createPortal(<NavMenu setIsMenuOpen={setIsMenuOpen} />, document.body)}
    </header>
  )
}
export default Header
