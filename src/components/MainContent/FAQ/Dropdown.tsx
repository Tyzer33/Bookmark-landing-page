import { useState } from 'react'
import { twJoin } from 'tailwind-merge'
import ArrowIcon from './ArrowIcon'

function Dropdown({ children, title }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex max-w-[33.875rem] flex-col border-b-1 border-primary text-left">
      <button
        className="relative flex items-center justify-between pb-[1.125rem] pt-[1.625rem] text-secondary transition-colors hover:text-accent lg:pb-4 lg:pt-5 lg:text-lg"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{title}</p>
        <ArrowIcon isActive={isOpen} />
      </button>
      <div
        className={twJoin(
          'grid overflow-hidden',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p className="mb-7 mr-6 mt-4 whitespace-break-spaces leading-[1.875rem] tracking-[0.015em] lg:mb-[1.875rem] lg:mr-0 lg:text-[1.0625rem]/[2.25rem] lg:-tracking-[0.02em]">
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dropdown

type Props = {
  children: React.ReactNode
  title: string
}
