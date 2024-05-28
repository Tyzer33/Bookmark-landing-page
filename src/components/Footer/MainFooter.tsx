import BookmarkLogo from '../../common/BookmarkLogo'
import NavLinks from '../../common/NavLinks'
import SocialLinks from '../../common/SocialLinks'

function MainFooter() {
  return (
    <section className="flex flex-col items-center bg-tertiary text-center text-tertiary">
      <BookmarkLogo className="mb-[2.125rem] mt-10" theme="text-light" />
      <NavLinks ulClassName="space-y-8 text-[.9375rem]" />
      <SocialLinks className="py-11" />
    </section>
  )
}
export default MainFooter
