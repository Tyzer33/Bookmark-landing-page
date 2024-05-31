import BookmarkLogo from '../../common/BookmarkLogo'
import DefaultButton from '../../common/DefaultButton'
import NavLinks from '../../common/NavLinks'
import useBreakpoint from '../../utils/useBreakpoint'
import NavMenuButton from './NavMenuButton'

function Header() {
  const { isAboveLg, isBelowLg } = useBreakpoint('lg')

  return (
    <header className="mx-mobile my-10 flex items-center justify-between lg:mx-[10.25rem] lg:my-12">
      <BookmarkLogo className="lg:ml-[.375rem]" />
      {isBelowLg && <NavMenuButton />}
      {isAboveLg && (
        <>
          <NavLinks navClassName="ml-auto mr-12" ulClassName="text-secondary" />
          <DefaultButton theme="accent" size="small">
            LOGIN
          </DefaultButton>
        </>
      )}
    </header>
  )
}
export default Header
