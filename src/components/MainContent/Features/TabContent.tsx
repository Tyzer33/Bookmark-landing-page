import DefaultButton from '../../../common/DefaultButton'
import TitleAndDescription from '../../../common/TitleAndDescription'
import useBreakpoint from '../../../utils/useBreakpoint'

function TabContent({ image, title, desc }: Props) {
  const { isAboveLg } = useBreakpoint('lg')

  return (
    <div className="flex gap-[2.625rem] max-lg:flex-col lg:gap-[7.75rem]">
      <div className="lg:flex[1_auto] relative pb-[.125rem] lg:pb-[1.8125rem] lg:pl-[9.5rem]">
        <img
          className="mx-auto h-[14.75rem] lg:h-[25.375rem]"
          src={image}
          alt="Bookmarking"
        />
        <div className="absolute bottom-0 left-0 -z-10 h-[12.75rem] w-[19.375rem] rounded-r-full bg-secondary lg:h-[22rem] lg:w-[40rem]" />
      </div>
      <div className="lg:mt-16 lg:max-w-[26.9375rem] lg:space-y-8 lg:text-left">
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
