import illustration from '../../../assets/illustration-hero.svg'
import DefaultButton from '../../../common/DefaultButton'
import TitleAndDescription from '../../../common/TitleAndDescription'
import ImgBackgroundShape from '../../../common/ImgBackgroundShape'

function Hero() {
  return (
    <section
      className="mt-10 flex flex-col justify-center gap-12 lg:mt-14 lg:flex-row-reverse lg:items-start lg:gap-20"
      aria-labelledby="presentationTitle"
    >
      <ImgBackgroundShape image={illustration} variant="right" />
      <div className="m-auto max-w-[30rem] space-y-8 lg:mt-[clamp(0rem,-15.7055rem+24.5399vi,5rem)] lg:text-left">
        <TitleAndDescription
          id="presentationTitle"
          type="h1"
          title="A Simple Bookmark Manager"
        >
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </TitleAndDescription>
        <div className="m-auto flex max-lg:max-w-96 max-lg:justify-between lg:gap-4">
          <DefaultButton>Get it on Chrome</DefaultButton>
          <DefaultButton theme="secondary">Get it on Firefox</DefaultButton>
        </div>
      </div>
    </section>
  )
}
export default Hero
