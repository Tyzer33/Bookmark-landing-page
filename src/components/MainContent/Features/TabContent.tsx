import { twJoin } from 'tailwind-merge'
import DefaultButton from '../../../common/DefaultButton'
import TitleAndDescription from '../../../common/TitleAndDescription'
import useBreakpoint from '../../../utils/useBreakpoint'
import ImgBackgroundShape from '../../../common/ImgBackgroundShape'

function TabContent({ image, title, desc }: Props) {
  const { isAboveLg } = useBreakpoint('lg')

  return (
    <div
      className={twJoin(
        'flex items-start justify-center gap-[2.625rem] max-lg:flex-col lg:gap-[7.75rem]',
        'animate-slidein',
      )}
    >
      <ImgBackgroundShape image={image} variant="left" />
      <div className="lg:mt-[clamp(0rem,-12.5644rem+19.6319vi,4rem)] lg:max-w-[26.9375rem] lg:space-y-8 lg:text-left">
        <TitleAndDescription type="h3" title={title}>
          {desc}
        </TitleAndDescription>
        {isAboveLg && <DefaultButton>More Info</DefaultButton>}
      </div>
    </div>
  )
}
export default TabContent

type Props = {
  image: string
  title: string
  desc: string
}
