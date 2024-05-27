import illustration from '../../../assets/illustration-hero.svg'
import DefaultButton from '../../../common/DefaultButton'
import TitleAndDescription from '../../../common/TitleAndDescription'

function Presentation() {
  return (
    <section className="mt-10 space-y-12">
      <div className="relative pb-[.625rem]">
        <img
          className="m-auto h-[15.625rem]"
          src={illustration}
          alt="Illustration of a computer screen with a browser window open"
        />
        <div className="absolute bottom-0 right-0 -z-10 h-[12.75rem] w-[19rem] rounded-l-full bg-secondary" />
      </div>
      <div className="space-y-8">
        <TitleAndDescription type="h1" title="A Simple Bookmark Manager">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </TitleAndDescription>
        <div className="mx-mobile flex justify-between">
          <DefaultButton>Get it on Chrome</DefaultButton>
          <DefaultButton theme="secondary">Get it on Firefox</DefaultButton>
        </div>
      </div>
    </section>
  )
}
export default Presentation
