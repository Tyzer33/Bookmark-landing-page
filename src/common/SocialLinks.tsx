import { twMerge } from 'tailwind-merge'
import twitterIcon from '../assets/icon-twitter.svg'
import facebookIcon from '../assets/icon-facebook.svg'

function SocialLinks({ className = '', tag: Tag = 'div' }: Props) {
  return (
    <Tag
      className={twMerge(
        'center flex items-center justify-center gap-10',
        className,
      )}
    >
      <a href="http://facebook.com">
        <img className="w-6" src={facebookIcon} alt="facebook icon" />
      </a>
      <a href="http://twitter.com">
        <img className="w-6" src={twitterIcon} alt="twitter icon" />
      </a>
    </Tag>
  )
}
export default SocialLinks

type Props = {
  className?: string
  tag?: 'div' | 'footer'
}
