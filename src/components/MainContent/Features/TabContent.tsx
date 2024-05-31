import { twJoin } from 'tailwind-merge'
import DefaultButton from '../../../common/DefaultButton'
import TitleAndDescription from '../../../common/TitleAndDescription'
import useBreakpoint from '../../../utils/useBreakpoint'

function TabContent({ image, title, desc }: Props) {
  const { isAboveLg } = useBreakpoint('lg')

  return (
    <div className="flex items-center gap-[2.625rem] max-lg:flex-col lg:gap-[7.75rem]">
      <div
        className={twJoin(
          'lg:flex[1_auto] relative -mx-[.625rem] pb-[.125rem] lg:pb-[1.8125rem] lg:pl-[9.5rem]',
          'after:absolute after:bottom-0 after:right-[12.73%] after:-z-10 after:h-[85.71%] after:w-screen after:rounded-r-full after:bg-secondary after:lg:h-[22rem]',
        )}
      >
        <img className="w-full" src={image} alt="Bookmarking" />
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
