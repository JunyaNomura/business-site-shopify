import heroSvg from "../public/hero.svg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="mx-auto text-center">
      {/* hero title */}
      <div>
        <h2 className="uppercase text-3xl">create our future<span className="block">with technology</span></h2>
        <p className="">創造的な未来をテクノロジーと共に。</p>  
      </div>
      {/* hero image */}
      <Image src={heroSvg} alt="hero image" className="mx-auto"/> 
      {/* hero message */}
      <p className="text-2xl">Companyは最先端技術を駆使してリッチなWeb体験をプロデュースします。</p>
      <p>web。そこは、顧客と商品が出会い、関係を構築していく場所。webテクノロジーとビジネスの専門家集団である私たちが、総合的なユーザー体験をプロデュースします。</p>
      <button className="w-60 h-11 bg-emerald-500 text-white rounded-3xl">私たちについて</button>
    </div>

  )
}

export default Hero
