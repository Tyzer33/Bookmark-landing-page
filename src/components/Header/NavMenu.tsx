import closeIcon from '../../assets/icon-close.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import facebookIcon from '../../assets/icon-facebook.svg'
import BookmarkLogo from '../../common/BookmarkLogo'

function NavMenu({ setIsMenuOpen }: Props) {
  const navLinks = ['features', 'pricing', 'contact']

  return (
    <section className="text absolute inset-0 flex flex-col items-stretch bg-nav-menu/95 px-8 tracking-widest text-alternative">
      <header className="my-10 flex justify-between">
        <BookmarkLogo theme="full-light" />
        <button type="button" onClick={() => setIsMenuOpen(false)}>
          <img className="w-4" src={closeIcon} alt="Icon to close the menu" />
        </button>
      </header>
      <div className="flex-1">
        <nav>
          <ul className="border-t-1 border-alternative/25">
            {navLinks.map((link) => (
              <li
                key={link}
                className="border-b-1 border-alternative/25 py-4 text-center text-xl"
              >
                <a href={`#${link}`}>{link.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="mt-6 w-full rounded-md border-2 border-alternative py-2 text-xl font-medium"
          type="button"
          onClick={() => console.log('login')}
        >
          LOGIN
        </button>
      </div>
      <footer className="center flex items-center justify-center gap-10 py-12 ">
        <a href="#">
          <img className="w-6" src={facebookIcon} alt="facebook icon" />
        </a>
        <a href="#">
          <img className="w-6" src={twitterIcon} alt="twitter icon" />
        </a>
      </footer>
    </section>
  )
}
export default NavMenu

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
