import { twMerge } from 'tailwind-merge'
import dots from '../../../assets/bg-dots.svg'
import DefaultButton from '../../../common/DefaultButton'

function Card({ className = '', browser, logo, minVersion }: Props) {
  return (
    <div
      className={twMerge(
        'mx-auto flex flex-col items-center rounded-xl shadow-lg shadow-default',
        className,
      )}
    >
      <img className="mb-[1.875rem] mt-12" src={logo} alt="" />
      <h4 className="text-xl font-medium text-secondary ">Add to {browser}</h4>
      <p className="mb-[2.125rem] mt-1 text-[.9375rem] leading-[1.5625rem]">
        Minimum version {minVersion}
      </p>
      <img src={dots} alt="" />
      <DefaultButton className="m-6 self-stretch">
        Add & Install Extension
      </DefaultButton>
    </div>
  )
}
export default Card

type Props = {
  className?: string
  browser: string
  logo: string
  minVersion: number
}
