import BookmarkLogo from '../../common/BookmarkLogo'
import NavLinks from '../../common/NavLinks'
import SocialLinks from '../../common/SocialLinks'

function MainFooter() {
  return (
    <section className="flex justify-center bg-tertiary text-center text-tertiary lg:px-[10.25rem] lg:py-8">
      <div className="max-w-container flex w-full flex-col items-center lg:flex-row lg:items-center">
        <BookmarkLogo
          className="max-lg:mb-[2.125rem] max-lg:mt-10"
          theme="text-light"
        />
        <NavLinks
          navClassName="lg:ml-16 lg:mr-auto"
          ulClassName="max-lg:space-y-8 text-[.9375rem] lg:flex"
        />
        <SocialLinks className="max-lg:py-11" />
      </div>
    </section>
  )
}
export default MainFooter
