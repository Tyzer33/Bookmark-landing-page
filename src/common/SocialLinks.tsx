import { twMerge } from 'tailwind-merge'
import { FacebookLogo, TwitterLogo } from './SocialLogos'

function SocialLinks({ className = '', tag: Tag = 'div' }: Props) {
  return (
    <Tag
      className={twMerge(
        'center flex items-center justify-center gap-10',
        className,
      )}
    >
      <a href="http://facebook.com">
        <FacebookLogo />
      </a>
      <a href="http://twitter.com">
        <TwitterLogo />
      </a>
    </Tag>
  )
}
export default SocialLinks

type Props = {
  className?: string
  tag?: 'div' | 'footer'
}
