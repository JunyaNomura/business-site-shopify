import Image from 'next/image'
import Price2 from './subcomponents/Price2'
import { MoreServiceInfo } from '../types/types'

const ServiceDescription = ({
  title,
  subTitle,
  themeImage,
  themeIconImage,
  salesPoint,
  salesDescription,
  pricePlan,
  price,
  menus,
}: MoreServiceInfo,
  
) => {
    
  return (
    <div className="mx-auto px-4 tracking-widest leading-relaxed font-sans font-light text-gray-800">
      {/* title */}
      <div className="my-8 w-fit mx-auto">
        <h2 className="uppercase text-3xl font-semibold">
          {title}
        </h2>
        <div className="my-1 border-b-[3px] border-b-emerald-500"></div>
        <p className="capitalize text-xl text-center">
          {subTitle}
        </p>
      </div>

      {/* ServiceDescription */}
      <section className="mt-12 mx-auto max-w-[720px]">
        {/* image and icon */}
        <div className="flex justify-center">
          <div className="relative">
            <Image src={themeImage} alt="ec image" className="w-auto h-auto"/>
            <Image src={themeIconImage} alt="ec icon for decoration" className="w-10 h-10 absolute top-0.5 left-0.5 brightness-150"/>
          </div>
        </div>
        {/* strength */}
        <div className="flex gap-2 mt-10">
          {/* green circle */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500"></div>
          <p className="text-xl sm:text-2xl">
            {salesPoint}
          </p>
        </div>
        <p className="mt-8">
          {salesDescription}
        </p>
        {/* price plan */}
        <div className="flex gap-2 items-end mt-10">
          {/* green circle */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500"></div>
          <p className="text-xl sm:text-2xl">
            {pricePlan}
            {/* Only true When WebSystemDevelopment page */}
            {price 
              ? <span className="before:content-[':'] before:px-2 inline-block text-3xl font-semibold tracking-widest">
                  ¥20,000~
                </span>
              : <span></span>
            }
          </p>
        </div>
        {menus.map((menu) => (
          <Price2 {...menu} />
        ))}
       


      </section>

    </div>
  )
}

export default ServiceDescription
