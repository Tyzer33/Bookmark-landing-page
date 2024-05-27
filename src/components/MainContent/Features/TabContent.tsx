import TitleAndDescription from '../../../common/TitleAndDescription'

function TabContent({ image, title, desc }: Props) {
  return (
    <div className="space-y-[2.625rem]">
      <div className="relative pt-[2.125rem]">
        <img
          className="absolute left-0 right-0 top-0 mx-auto h-[14.625rem]"
          src={image}
          alt="Bookmarking"
        />
        <div className="-z-10 h-[12.75rem] w-[19.375rem] rounded-r-full bg-secondary" />
      </div>
      <TitleAndDescription type="h3" title={title}>
        {desc}
      </TitleAndDescription>
    </div>
  )
}
export default TabContent

type Props = {
  image: string
  title: string
  desc: string
}
