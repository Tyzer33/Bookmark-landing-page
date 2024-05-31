import illustration from '../../../assets/illustration-hero.svg'
import DefaultButton from '../../../common/DefaultButton'
import TitleAndDescription from '../../../common/TitleAndDescription'
import BackgroundShape from '../../../common/BackgroundShape'

function Presentation() {
  return (
    <section
      className="mt-10 flex flex-col items-center justify-center gap-12 lg:mt-14 lg:flex-row-reverse"
      aria-labelledby="presentationTitle"
    >
      <BackgroundShape image={illustration} variant="right" />
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
