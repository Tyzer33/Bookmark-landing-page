import { twJoin } from 'tailwind-merge'
import { useNumOfLines } from '../customHooks'

function TitleAndDescription({
  children,
  id = undefined,
  type: Type = 'h2',
  title,
}: Props) {
  const { lineCount, lineRef } = useNumOfLines()

  return (
    <div
      className={twJoin(
        'max-w-[33.5rem] max-lg:mx-mobile lg:mx-auto lg:space-y-6',
        lineCount > 1 ? 'space-y-4' : 'space-y-[.625rem]',
      )}
    >
      <Type id={id} ref={lineRef}>
        {title}
      </Type>
      <p>{children}</p>
    </div>
  )
}
export default TitleAndDescription

type Props = {
  children: React.ReactNode
  id?: string | undefined
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title: string
}
