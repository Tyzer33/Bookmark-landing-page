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
      className={`mx-mobile space-y-4 ${lineCount > 1 ? 'space-y-4' : 'space-y-[.625rem]'}`}
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
