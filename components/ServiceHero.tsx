import Image from 'next/image'
import serviceSvg from '../public/service.svg'

const ServiceHero = () => {
  return (
    <div className="mx-auto px-4 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
      {/* hero title */}
        <h2 className="w-auto mt-8 uppercase text-3xl">
          Services
        </h2>   
          <p className="text-base mb-8">
         私たちにできること
          </p>
      {/* hero image */}
      <Image src={serviceSvg} alt="hero image" className="mx-auto lg:max-w-3xl"/> 
      {/* about */}
      <section className="mt-24">
        <p className="mb-12">
          MyCompanyは、
          <br/>
          Webを中心に写真・動画・アニメーション・3Dなどを幅広く担当することで
          <br/>
          お客様のニーズをワンストップで解決します。
        </p>
      </section>
    </div>
  )
}

export default ServiceHero

