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
      <a
        className="relative fill-primary transition-colors after:absolute after:-inset-[0.5em] hover:fill-accent focus-visible:fill-accent"
        href="http://facebook.com"
      >
        <FacebookLogo />
      </a>
      <a
        className="relative fill-primary transition-colors after:absolute after:-inset-[0.5em] hover:fill-accent focus-visible:fill-accent"
        href="http://twitter.com"
      >
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
