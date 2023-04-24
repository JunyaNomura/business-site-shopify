import Image from 'next/image'
import contactSvg from '../public/contact.svg'

const ContactHero = () => {
  return (
    <div className="mx-auto px-4 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
      {/* hero title */}
        <h2 className="w-auto mt-8 uppercase text-3xl">
          contact us
        </h2>   
          <p className="text-base mb-8">
         お問い合わせはこちら
          </p>
      {/* hero image */}
      <Image src={contactSvg} alt="contact image" className="mx-auto lg:max-w-3xl"/> 
      {/* about */}
      <section className="mt-24">
        <p className="mb-12">
          お見積もりは無料です。
          <br/>EC・コーポレートサイト等Web制作、Webアプリ開発や動画撮影など
          <br/>お気軽にお問い合わせください。
        </p>
      </section>
    </div>
  )
}

export default ContactHero
