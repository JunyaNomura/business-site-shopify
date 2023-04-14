import Image from 'next/image'
import ecIcon from '../public/serviceIcons/ec.svg'
import ecImage from '../public/serviceImages/ecImage.jpg'

const ServiceDescription = () => {
  return (
    <div className="mx-auto px-4 tracking-widest leading-relaxed font-sans font-light text-gray-800">
      {/* title */}
      <div className="my-8 w-fit mx-auto">
        <h2 className="uppercase text-3xl">
          {/* props.title */}
          ECサイト構築
        </h2>
        <div className="my-1 border-b-[3px] border-b-emerald-500"></div>
        <p className="capitalize text-base text-center">
          {/* props.subtitle */}
          E-Commerce
        </p>
      </div>

      {/* ServiceDescription */}
      <section className="mt-24">
        <div>
          {/* props.themeImage */}
          <Image src={ecImage} alt="ec image" className=""/>
          {/* props.themeIconImage */}
          <Image src={ecIcon} alt="ec icon for decoration" className="w-8 h-8 saturate-[50] brightness-100"/>
        </div>
      </section>

    </div>
  )
}

export default ServiceDescription
