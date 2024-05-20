import logoBookmark from '../../assets/logo-bookmark.svg'
import hamburger from '../../assets/icon-hamburger.svg'

function Header() {
  return (
    <header className="mx-[1.625rem] my-8 flex items-center justify-between">
      <img
        className="h-[1.3125rem]"
        src={logoBookmark}
        alt="Main site logo for Bookmark"
      />
      <button className="h-3" type="button" onClick={() => console.log('menu')}>
        <img src={hamburger} alt="Icon to access the menu" />
      </button>
    </header>
  )
}
export default Header
