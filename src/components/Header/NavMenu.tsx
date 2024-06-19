import { useEffect } from 'react'
import closeIcon from '../../assets/icon-close.svg'
import BookmarkLogo from '../../common/BookmarkLogo'
import SocialLinks from '../../common/SocialLinks'
import NavLinks from '../../common/NavLinks'

function NavMenu({ setIsMenuOpen }: Props) {
  useEffect(() => {
    const root = document.body.querySelector('div#root')

    root?.setAttribute('inert', 'true')
    document.body.classList.add('overflow-hidden')

    return () => {
      root?.removeAttribute('inert')
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <section className="fixed inset-0 flex flex-col items-stretch bg-tertiary/95 px-mobile tracking-widest text-tertiary">
      <header className="my-10 flex justify-between">
        <BookmarkLogo theme="full-light" />
        <button type="button" onClick={() => setIsMenuOpen(false)}>
          <img className="w-4" src={closeIcon} alt="Icon to close the menu" />
        </button>
      </header>
      <div className="flex-1">
        <NavLinks
          ulClassName="divide-y-1 divide-secondary border-y-1 border-secondary text-center text-xl"
          aClassName="w-full py-4 block"
        />
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
