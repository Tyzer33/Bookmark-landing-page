import { useRef, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import DefaultButton from '../../common/DefaultButton'
import errorIcon from '../../assets/icon-error.svg'

function ContactForm() {
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
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col justify-center gap-4 lg:flex-row"
      noValidate
    >
      <div
        className={twJoin(
          'relative flex-1 rounded-md text-secondary lg:rounded-b-none',
          !IsValid && 'bg-error',
        )}
      >
        <div className="relative">
          <input
            className={twJoin(
              'w-full truncate rounded-md px-5 py-3',
              !IsValid &&
                'pr-10 outline outline-2 -outline-offset-2 outline-error',
            )}
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={() => setIsValid(true)}
            autoComplete="email"
          />
          {!IsValid && (
            <div
              className="absolute right-[.875rem] top-1/2 z-30 aspect-square h-5 -translate-y-1/2 bg-cover"
              style={{ backgroundImage: `url(${errorIcon})` }}
            />
          )}
        </div>
        {!IsValid && (
          <p
            className={twJoin(
              'px-3 py-[.375rem] text-left text-[.625rem] font-medium italic leading-3 tracking-wide text-tertiary',
              'w-full rounded-b-md bg-error pb-[.375rem] pt-1 lg:absolute',
            )}
          >
            Whoops, make sure it’s an email
          </p>
        )}
      </div>
      <DefaultButton type="submit" theme="accent">
        Contact Us
      </DefaultButton>
    </form>
  )
}
export default ContactForm
