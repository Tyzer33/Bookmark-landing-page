import { twJoin } from 'tailwind-merge'
import illustration from '../../../assets/illustration-hero.svg'
import DefaultButton from '../../../common/DefaultButton'
import TitleAndDescription from '../../../common/TitleAndDescription'

function Presentation() {
  return (
    <section
      className="mt-10 flex flex-col items-center gap-12 lg:mt-14 lg:flex-row-reverse"
      aria-labelledby="presentationTitle"
    >
      <div
        className={twJoin(
          'relative -mx-[1.3125rem] pb-[.625rem] lg:flex-[1_auto] lg:pb-7 lg:pr-[3.25rem]',
          'after:absolute after:bottom-0 after:left-[16.71%] after:-z-10 after:h-[78.46%] after:w-screen after:rounded-l-full after:bg-secondary after:lg:h-[22rem]',
        )}
      >
        <img
          className="w-full"
          src={illustration}
          alt="Illustration of a computer screen with a browser window open"
        />
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
        <div className="flex max-lg:justify-between lg:gap-4">
          <DefaultButton>Get it on Chrome</DefaultButton>
          <DefaultButton theme="secondary">Get it on Firefox</DefaultButton>
        </div>
      </div>
    </section>
  )
}
export default Presentation
