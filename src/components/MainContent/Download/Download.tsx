import googleLogo from '../../../assets/logo-chrome.svg'
import firefoxLogo from '../../../assets/logo-firefox.svg'
import operaLogo from '../../../assets/logo-opera.svg'
import TitleAndDescription from '../../../common/TitleAndDescription'
import Card from './Card'

const downloadData = [
  {
    logo: googleLogo,
    browser: 'Chrome',
    minVersion: 62,
  },
  {
    logo: firefoxLogo,
    browser: 'Firefox',
    minVersion: 55,
  },
  {
    logo: operaLogo,
    browser: 'Opera',
    minVersion: 46,
  },
]

function Download() {
  return (
    <section className="space-y-10">
      <TitleAndDescription title="Download the extension">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </TitleAndDescription>
      <div className="mx-12 space-y-10">
        {downloadData.map(({ logo, browser, minVersion }) => (
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
