import BookmarkLogo from '../../common/BookmarkLogo'
import SocialLinks from '../../common/SocialLinks'

function MainFooter() {
  const navLinks = ['features', 'pricing', 'contact']

  return (
    <section className="flex flex-col items-center bg-tertiary text-center text-tertiary">
      <BookmarkLogo className="mb-[2.125rem] mt-10" theme="text-light" />
      <nav>
        <ul className="space-y-8">
          {navLinks.map((link) => (
            <li className="text-[.9375rem]" key={link}>
              <a href={`#${link}`}>{link.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>
      <SocialLinks className="py-11" />
    </section>
  )
}
export default MainFooter
