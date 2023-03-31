import heroSvg from "../public/hero.svg"
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="mx-auto px-4 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
      {/* hero title */}
        <h2 className="w-auto my-8 uppercase text-3xl">
          create our future
          <br/>
            with technology
          <br/>
          <span className="text-base">
          創造的な未来をテクノロジーと共に。
          </span>
        </h2>   
      {/* hero image */}
      <Image src={heroSvg} alt="hero image" className="mx-auto lg:max-w-3xl"/> 
      {/* about */}
      <section className="my-12">
        <p className="text-xl mb-6">
          Companyは最先端技術を駆使して
          <br/>リッチなWeb体験をプロデュースします。
        </p>
        <p className="mb-8">
          Web。そこは、顧客と商品が出会い、関係を構築していく場所。
          <br/>Webテクノロジーとビジネスの専門家集団である私たちが、総合的なユーザー体験をプロデュースします。
        </p>
        <Link href="../about">
          <button className="w-56 p-3 bg-emerald-500 hover:bg-emerald-300 text-white rounded-3xl duration-300">
            私たちについて
          </button>
        </Link>
      </section>
    </div>
  )
}

export default Hero
