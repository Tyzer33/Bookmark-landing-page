import DefaultButton from '../../../common/DefaultButton'
import TitleAndDescription from '../../../common/TitleAndDescription'
import { questions } from '../../../data'
import Dropdown from './Dropdown'

function Faq() {
  return (
    <section
      className="mt-[8.75rem] lg:mt-[9.75rem]"
      aria-labelledby="faqTitle"
    >
      <TitleAndDescription id="faqTitle" title="Frequently Asked Questions">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </TitleAndDescription>
      <div className="mx-mobile mb-12 mt-11 border-primary lg:mb-[3.375rem] lg:mt-14 lg:border-t-1">
        {questions.map(({ id, question, answer }) => (
          <Dropdown key={id} title={question}>
            {answer}
          </Dropdown>
        ))}
      </div>
      <DefaultButton className="mx-auto w-fit px-6">More Info</DefaultButton>
    </section>
  )
}

export default Faq
