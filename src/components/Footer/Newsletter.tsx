import DefaultButton from '../../common/DefaultButton'

function Newsletter() {
  return (
    <section className="bg-secondary px-8 pb-[3.75rem] pt-[4.5rem] text-center text-tertiary lg:pb-[4.375rem] lg:pt-[4.625rem]">
      <div className="mx-auto max-w-[27.625rem] space-y-8 lg:space-y-9">
        <div className="space-y-3 lg:space-y-9">
          <p className="text-[.8125rem] font-medium tracking-[0.3em] lg:tracking-[0.4em]">
            35.000+ ALREADY JOINED
          </p>
          <h4 className="text-2xl leading-7 text-tertiary lg:text-[2rem] lg:leading-10">
            Stay up-to-date with what we&apos;re doing
          </h4>
        </div>
        <div className="flex w-full flex-col justify-center gap-4 lg:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-md px-5 py-3 text-secondary lg:py-4 lg:text-[.875rem] lg:leading-6"
          />
          <DefaultButton theme="accent">Contact Us</DefaultButton>
        </div>
      </div>
    </section>
  )
}
export default Newsletter
