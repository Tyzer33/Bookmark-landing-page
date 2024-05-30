import { twJoin } from 'tailwind-merge'
import TitleAndDescription from '../../../common/TitleAndDescription'
import { download } from '../../../data'
import Card from './Card'

function Download() {
  return (
    <section
      className="mt-[9.375rem] space-y-10 lg:mt-[9.75rem] lg:space-y-12"
      aria-labelledby="downloadTitle"
    >
      <TitleAndDescription id="downloadTitle" title="Download the extension">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </TitleAndDescription>
      <div className="mx-12 flex items-start gap-10 max-lg:flex-col lg:gap-8">
        {download.map(({ id, logo, browser, minVersion }, index) => (
          <Card
            className={twJoin(
              index === 0 && 'lg:mt-0',
              index === 1 && 'lg:mt-10',
              index === 2 && 'lg:mt-20',
            )}
            key={id}
            logo={logo}
            browser={browser}
            minVersion={minVersion}
          />
        ))}
      </div>
    </section>
  )
}
export default Download
