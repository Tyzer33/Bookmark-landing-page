import BookmarkLogo from '../../common/BookmarkLogo'
import NavMenuButton from './NavMenuButton'

function Header() {
  return (
    <header className="mx-mobile my-10 flex items-center justify-between">
      <BookmarkLogo />
      <NavMenuButton />
    </header>
  )
}
export default Header
