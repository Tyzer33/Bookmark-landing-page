import { useState } from 'react'
import TabContent from './TabContent'
import TitleAndDescription from '../../../common/TitleAndDescription'
import TabButton from './TabButton'
import { tabs } from '../../../data'

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
