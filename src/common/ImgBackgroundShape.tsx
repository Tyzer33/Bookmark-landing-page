import { twJoin } from 'tailwind-merge'

function ImgBackgroundShape({ image, variant }: Props) {
  return (
    <div
      className={twJoin(
        'relative flex-[1_1_auto] lg:pb-[1.8125rem]',
        'after:absolute after:bottom-0 after:-z-10 after:rounded-full after:bg-secondary',
        variant === 'right' &&
          'max-w-[41.0625rem] pb-[.625rem] after:left-[16.71%] after:h-[78.46%] after:w-[62rem] max-lg:-mx-[1.3125rem] lg:-mr-[7.0625rem] after:lg:left-[29.53%] after:lg:h-[71.8%]',
        variant === 'left' &&
          'max-w-[35.625rem] pb-[.125rem] after:right-[12.73%] after:h-[85.71%] after:w-[70rem] max-lg:-mx-[.625rem] after:lg:right-[14.39%] after:lg:h-[80.92%]',
      )}
    >
      <img className="w-full" src={image} alt="Bookmarking" />
    </div>
  )
}
export default ImgBackgroundShape

type Props = {
  image: string
  variant: 'left' | 'right'
}
