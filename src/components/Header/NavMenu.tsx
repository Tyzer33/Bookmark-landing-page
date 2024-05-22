import closeIcon from '../../assets/icon-close.svg'

import BookmarkLogo from '../../common/BookmarkLogo'
import SocialLinks from '../../common/SocialLinks'

function NavMenu({ setIsMenuOpen }: Props) {
  const navLinks = ['features', 'pricing', 'contact']

  return (
    <section className="bg-tertiary/95 text-tertiary fixed inset-0 flex flex-col items-stretch px-8 tracking-widest">
      <header className="my-10 flex justify-between">
        <BookmarkLogo theme="full-light" />
        <button type="button" onClick={() => setIsMenuOpen(false)}>
          <img className="w-4" src={closeIcon} alt="Icon to close the menu" />
        </button>
      </header>
      <div className="flex-1">
        <nav>
          <ul className="divide-secondary border-secondary divide-y-1 border-y-1">
            {navLinks.map((link) => (
              <li key={link} className="py-4 text-center text-xl">
                <a href={`#${link}`}>{link.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="mt-6 w-full rounded-md border-2 border-current py-2 text-xl font-medium"
          type="button"
          onClick={() => console.log('login')}
        >
          LOGIN
        </button>
      </div>
      <SocialLinks className="py-12" />
    </section>
  )
}
export default NavMenu

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
