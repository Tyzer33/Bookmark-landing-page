import DefaultButton from '../../common/DefaultButton'

function Newsletter() {
  return (
    <section className="space-y-8 bg-secondary px-8 pb-[3.75rem] pt-[4.5rem] text-center text-tertiary">
      <div className="space-y-3">
        <p className="text-[.8125rem] font-medium tracking-[0.3em]">
          35.000+ ALREADY JOINED
        </p>
        <h4 className="text-2xl leading-7 text-tertiary">
          Stay up-to-date with what we&apos;re doing
        </h4>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email address"
          className="rounded-md px-5 py-3  text-secondary"
        />
        <DefaultButton theme="accent">Contact Us</DefaultButton>
      </div>
    </section>
  )
}
export default Newsletter
