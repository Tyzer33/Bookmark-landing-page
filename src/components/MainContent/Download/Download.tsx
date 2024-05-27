import TitleAndDescription from '../../../common/TitleAndDescription'
import { download } from '../../../data'
import Card from './Card'

function Download() {
  return (
    <section className="space-y-10">
      <TitleAndDescription title="Download the extension">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </TitleAndDescription>
      <div className="mx-12 space-y-10">
        {download.map(({ logo, browser, minVersion }) => (
          <Card
            key={browser}
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
