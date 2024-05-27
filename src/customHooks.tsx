import { useLayoutEffect, useRef, useState } from 'react'

/* eslint-disable import/prefer-default-export */
export function useNumOfLines() {
  const [lineCount, setLineCount] = useState(1)
  const lineRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    function handleResize() {
      if (!lineRef.current) return
      const { lineHeight, height } = getComputedStyle(lineRef.current)
      setLineCount(parseInt(height, 10) / parseInt(lineHeight, 10))
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { lineCount, lineRef }
}
