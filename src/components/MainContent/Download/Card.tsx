import dots from '../../../assets/bg-dots.svg'
import DefaultButton from '../../../common/DefaultButton'

function Card({ browser, logo, minVersion }: Props) {
  return (
    <div className="flex flex-col items-center rounded-xl shadow-lg shadow-default">
      <img className="mb-[1.875rem] mt-12" src={logo} alt="" />
      <h3 className="text-xl font-medium text-secondary ">Add to {browser}</h3>
      <p className="mb-[2.125rem] mt-1">Minimum version {minVersion}</p>
      <img src={dots} alt="" />
      <DefaultButton className="m-6 self-stretch">
        Add & Install Extension
      </DefaultButton>
    </div>
  )
}
export default Card

type Props = {
  browser: string
  logo: string
  minVersion: number
}
