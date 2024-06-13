import Download from './Download/Download'
import Faq from './Faq/Faq'
import Features from './Features/Features'
import Hero from './Hero/Hero'

function MainContent() {
  return (
    <main className="flex flex-col items-center self-stretch overflow-x-hidden px-mobile pb-[7.75rem] text-center lg:px-desktop lg:pb-[9.375rem]">
      <Hero />
      <Features />
      <Download />
      <Faq />
    </main>
  )
}
export default MainContent
