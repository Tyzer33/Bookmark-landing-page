import { useState } from 'react'
import TabContent from './TabContent'
import TitleAndDescription from '../../../common/TitleAndDescription'
import TabButton from './TabButton'
import { tabs } from '../../../data'

function Features() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const { image, title, desc } = selectedTab

  return (
    <section
      className="mt-[9.375rem] w-full space-y-10 lg:mt-[5.5rem]"
      aria-labelledby="featuresTitle"
    >
      <TitleAndDescription id="featuresTitle" title="Features">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </TitleAndDescription>
      <div className="space-y-[4.5rem]">
        <div className="flex justify-center border-primary max-lg:flex-col max-lg:border-t-1">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              name={tab.button}
              isSelected={tab.id === selectedTab.id}
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
