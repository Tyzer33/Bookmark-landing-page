import BookmarkLogo from '../../common/BookmarkLogo'
import DefaultButton from '../../common/DefaultButton'
import NavLinks from '../../common/NavLinks'
import useBreakpoint from '../../utils/useBreakpoint'
import NavMenuButton from './NavMenuButton'

function Header() {
  const { isAboveLg, isBelowLg } = useBreakpoint('lg')

  return (
    <header className="px-mobile flex items-center justify-between py-10 lg:px-[10.25rem] lg:py-12">
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
