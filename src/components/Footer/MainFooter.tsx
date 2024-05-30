import BookmarkLogo from '../../common/BookmarkLogo'
import NavLinks from '../../common/NavLinks'
import SocialLinks from '../../common/SocialLinks'

function MainFooter() {
  return (
    <section className="flex flex-col items-center bg-tertiary text-center text-tertiary lg:flex-row lg:items-center lg:px-[10.25rem] lg:py-8">
      <BookmarkLogo
        className="max-lg:mb-[2.125rem] max-lg:mt-10"
        theme="text-light"
      />
      <NavLinks
        navClassName="lg:ml-16 lg:mr-auto"
        ulClassName="max-lg:space-y-8 text-[.9375rem] lg:flex"
      />
      <SocialLinks className="max-lg:py-11" />
    </section>
  )
}
export default MainFooter
