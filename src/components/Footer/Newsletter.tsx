import { twMerge } from 'tailwind-merge'
import { useRef, useState } from 'react'
import DefaultButton from '../../common/DefaultButton'
import errorIcon from '../../assets/icon-error.svg'

function Newsletter() {
  const [IsValid, setIsValid] = useState(true)
  const emailRef = useRef<HTMLInputElement>(
    null,
  ) as React.MutableRefObject<HTMLInputElement>

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const emailInput = emailRef.current
    const valid = emailInput.validity.valid && emailInput.value !== ''
    setIsValid(valid)

    if (!valid) return

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    console.log('Email:', email)
  }

  return (
    <section className="bg-secondary px-mobile pb-[3.75rem] pt-[4.5rem] text-center text-tertiary lg:pb-[4.375rem] lg:pt-[4.625rem]">
      <div className="mx-auto max-w-[27.625rem] space-y-8 lg:space-y-9">
        <div className="space-y-3 lg:space-y-9">
          <p className="text-[.8125rem] font-medium tracking-[0.3em] lg:tracking-[0.4em]">
            35.000+ ALREADY JOINED
          </p>
          <h4 className="text-2xl/7 text-tertiary lg:text-[2rem]/10">
            Stay up-to-date with what we&apos;re doing
          </h4>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col justify-center gap-4 lg:flex-row"
          noValidate
        >
          <div
            className={twMerge(
              'flex-1 rounded-md text-secondary',
              !IsValid && 'bg-error',
            )}
          >
            <div
              className={twMerge(
                'relative w-full overflow-hidden rounded-md',
                !IsValid && 'border-2 border-b-0 border-error',
              )}
            >
              <input
                className={twMerge(
                  'w-full truncate px-5 py-3',
                  !IsValid && 'pr-10',
                )}
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter your email address"
                onChange={() => setIsValid(true)}
              />
              {!IsValid && (
                <div
                  className="absolute right-[.875rem] top-1/2 z-30 aspect-square h-5 -translate-y-1/2 bg-cover"
                  style={{ backgroundImage: `url(${errorIcon})` }}
                />
              )}
            </div>
            {!IsValid && (
              <p className="px-3 py-[.375rem] text-left text-[.625rem] font-medium italic leading-3 tracking-wide text-tertiary">
                Whoops, make sure it’s an email
              </p>
            )}
          </div>
          <DefaultButton type="submit" theme="accent">
            Contact Us
          </DefaultButton>
        </form>
      </div>
    </section>
  )
}
export default Newsletter
