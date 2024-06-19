import BookmarkLogo from '../../common/BookmarkLogo'
import DefaultButton from '../../common/DefaultButton'
import NavLinks from '../../common/NavLinks'
import useBreakpoint from '../../utils/useBreakpoint'
import NavMenuButton from './NavMenuButton'

function Header() {
  const { isAboveLg, isBelowLg } = useBreakpoint('lg')

  return (
    <header className="flex w-full justify-center px-mobile py-10 lg:px-desktop lg:py-12">
      <div className="flex w-full max-w-container items-center justify-between">
        <BookmarkLogo className="lg:ml-[.375rem]" />
        {isBelowLg && <NavMenuButton />}
        {isAboveLg && (
          <>
            <NavLinks
              navClassName="flex-1 mr-12"
              ulClassName="justify-end text-secondary"
              extendClickArea
            />
            <DefaultButton theme="accent" size="small">
              LOGIN
            </DefaultButton>
          </>
        )}
      </div>
    </header>
  )
}
export default Header
