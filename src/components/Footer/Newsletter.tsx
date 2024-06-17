import ContactForm from './ContactForm'

function Newsletter() {
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
        <ContactForm />
      </div>
    </section>
  )
}
export default Newsletter
