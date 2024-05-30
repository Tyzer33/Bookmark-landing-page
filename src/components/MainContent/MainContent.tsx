import Download from './Download/Download'
import Faq from './Faq/Faq'
import Features from './Features/Features'
import Presentation from './Presentation/Presentation'

function MainContent() {
  return (
    <main className="mb-[7.75rem] flex flex-col items-center text-center lg:mb-[9.375rem]">
      <Presentation />
      <Features />
      <Download />
      <Faq />
    </main>
  )
}
export default MainContent
