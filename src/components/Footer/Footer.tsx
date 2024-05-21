import facebookIcon from '../../assets/icon-facebook.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import BookmarkLogo from '../../common/BookmarkLogo'

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
      <footer className="center mt-1 flex items-center justify-center gap-10 py-[42px]">
        <a href="#">
          <img className="w-6" src={facebookIcon} alt="facebook icon" />
        </a>
        <a href="#">
          <img className="w-6" src={twitterIcon} alt="twitter icon" />
        </a>
      </footer>
    </footer>
  )
}
export default Footer
