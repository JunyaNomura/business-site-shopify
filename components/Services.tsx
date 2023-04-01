import ServiceButton from './subcomponents/ServiceButton'
const Services = () => {


  return (
    <section className="relative my-12 mx-auto px-4 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
      <h3 className="uppercase relative w-60 mx-auto font-bold text-3xl before:absolute before:inline-block before:h-8 before:left-4 before:border-l-[3px] before:border-emerald-500 before:rotate-[-35deg] after:absolute after:inline-block after:h-8 after:right-4 after:border-r-[3px] after:border-emerald-500 after:rotate-[35deg]">
        Services
      </h3>
      <p className="mb-6">私たちにできること</p>
      <p>
        私たちのクリエイティブな強みを活かしたWebソリューションの提供により、
        <br />
        お客様の良き理解者としてビジネスを支援していきます。
      </p>
      <ServiceButton />
    </section>

  )
}

export default Services
