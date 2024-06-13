import Download from './Download/Download'
import Faq from './Faq/Faq'
import Features from './Features/Features'
import Presentation from './Presentation/Presentation'

function MainContent() {
  return (
    <main className="lg:px-desktop flex flex-col items-center self-stretch overflow-x-hidden px-mobile pb-[7.75rem] text-center lg:pb-[9.375rem]">
      <Presentation />
      <Features />
      <Download />
      <Faq />
    </main>
  )
}
export default MainContent
