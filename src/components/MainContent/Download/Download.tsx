import TitleAndDescription from '../../../common/TitleAndDescription'
import { download } from '../../../data'
import Card from './Card'

function Download() {
  return (
    <section
      className="mt-[9.375rem] space-y-10"
      aria-labelledby="downloadTitle"
    >
      <TitleAndDescription id="downloadTitle" title="Download the extension">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </TitleAndDescription>
      <div className="mx-12 space-y-10">
        {download.map(({ id, logo, browser, minVersion }) => (
          <Card
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
