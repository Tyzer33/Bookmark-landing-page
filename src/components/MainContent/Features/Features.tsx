import { useState } from 'react'
import illustrationFeaturesTab1 from '../../../assets/illustration-features-tab-1.svg'
import illustrationFeaturesTab2 from '../../../assets/illustration-features-tab-2.svg'
import illustrationFeaturesTab3 from '../../../assets/illustration-features-tab-3.svg'
import TabContent from './TabContent'
import TitleAndDescription from '../../../common/TitleAndDescription'
import TabButton from './TabButton'

const tabs = [
  {
    button: 'Simple Bookmarking',
    image: illustrationFeaturesTab1,
    title: 'Bookmark in one click',
    desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    button: 'Speedy Searching',
    image: illustrationFeaturesTab2,
    title: 'Intelligent search',
    desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    button: 'Easy Sharing',
    image: illustrationFeaturesTab3,
    title: 'Share your bookmarks',
    desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
]

function Features() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const { image, title, desc } = selectedTab

  return (
    <section className="space-y-10">
      <TitleAndDescription title="Features">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </TitleAndDescription>
      <div className="space-y-[4.5rem]">
        <div className="mx-mobile flex flex-col divide-y-1 divide-primary border-y-1 border-primary">
          {tabs.map((tab) => (
            <TabButton
              key={tab.button}
              name={tab.button}
              selected={selectedTab.button}
              handleClick={() => setSelectedTab(tab)}
            />
          ))}
        </div>
        <TabContent key={title} image={image} title={title} desc={desc} />
      </div>
    </section>
  )
}
export default Features
