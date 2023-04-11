import Link from 'next/link'
import ServiceButton from './subcomponents/ServiceButton'
import ServiceButtons from './subcomponents/ServiceButtons'

const Services = () => {

  return (
    <section className="relative mt-24 mb-16 mx-auto px-4 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
      <h3 className="uppercase relative w-60 mx-auto font-bold text-3xl before:absolute before:inline-block before:h-8 before:left-4 before:border-l-[3px] before:border-emerald-500 before:rotate-[-35deg] after:absolute after:inline-block after:h-8 after:right-4 after:border-r-[3px] after:border-emerald-500 after:rotate-[35deg]">
        Services
      </h3>
      <p className="mb-12">私たちにできること</p>
      <p className="mb-12">
        私たちのクリエイティブな強みを活かしたWebソリューションの提供により、
        <br />
        お客様の良き理解者としてビジネスを支援していきます。
      </p>
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ServiceButtons.map((serviceButton) => (
          <div key={serviceButton.id}>
            <ServiceButton {...serviceButton} />
          </div>
        ))}
      </div>
      <Link href="../services" className="inline-block w-56 p-3 bg-emerald-500 hover:bg-emerald-300 text-white rounded-3xl duration-300">
            詳しいサービスへ
      </Link>
    </section>

  )
}

export default Services
