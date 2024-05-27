import { useLayoutEffect, useRef, useState } from 'react'

function TitleAndDescription({
  children,
  id = undefined,
  type: Type = 'h2',
  title,
}: Props) {
  const [lineCount, setLineCount] = useState(1)
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    function handleResize() {
      if (!ref.current) return
      const { lineHeight, height } = getComputedStyle(ref.current)
      setLineCount(parseInt(height, 10) / parseInt(lineHeight, 10))
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className={`mx-mobile space-y-4 ${lineCount > 1 ? 'space-y-4' : 'space-y-[.625rem]'}`}
    >
      <Type id={id} ref={ref}>
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
