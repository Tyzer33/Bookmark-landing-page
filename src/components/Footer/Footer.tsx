import BookmarkLogo from '../../common/BookmarkLogo'
import SocialLinks from '../../common/SocialLinks'

function Footer() {
  const navLinks = ['features', 'pricing', 'contact']

  return (
    <footer className="flex flex-col items-center bg-footer text-center text-alternative">
      <BookmarkLogo className="mb-[2.375rem] mt-10" theme="text-light" />
      <nav>
        <ul className="space-y-8">
          {navLinks.map((link) => (
            <li className="text-[.9375rem]" key={link}>
              <a href={`#${link}`}>{link.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>
      <SocialLinks className="mt-1 py-[2.625rem]" />
    </footer>
  )
}
export default Footer
