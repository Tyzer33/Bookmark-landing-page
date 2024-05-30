import illustration from '../../../assets/illustration-hero.svg'
import DefaultButton from '../../../common/DefaultButton'
import TitleAndDescription from '../../../common/TitleAndDescription'

function Presentation() {
  return (
    <section
      className="mt-10 flex flex-col gap-12 lg:mt-14 lg:flex-row-reverse"
      aria-labelledby="presentationTitle"
    >
      <div className="relative pb-[.625rem] lg:flex-[1_auto] lg:pb-7 lg:pr-[3.25rem]">
        <img
          className="mx-auto h-[15.625rem] lg:h-[29.125rem]"
          src={illustration}
          alt="Illustration of a computer screen with a browser window open"
        />
        <div className="absolute bottom-0 right-0 -z-10 h-[12.75rem] w-[19rem] rounded-l-full bg-secondary lg:h-[22rem] lg:w-[32.1875rem]" />
      </div>
      <div className="space-y-8 lg:ml-[10.25rem] lg:mt-20 lg:text-left">
        <TitleAndDescription
          id="presentationTitle"
          type="h1"
          title="A Simple Bookmark Manager"
        >
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </TitleAndDescription>
        <div className="flex max-lg:mx-mobile max-lg:justify-between lg:gap-4">
          <DefaultButton>Get it on Chrome</DefaultButton>
          <DefaultButton theme="secondary">Get it on Firefox</DefaultButton>
        </div>
      </div>
    </section>
  )
}
export default Presentation
