import { FC } from 'react'
import Image from 'next/image'
import { CardInfo } from '@/types/types'

const Card: FC<CardInfo> = ({title, imgUrl, text, subItems, bgColor}: CardInfo) => {
  return (
    <div className={`${bgColor} rounded-3xl py-4 px-6`}>

      {imgUrl && 
      
        <div className="w-full aspect-w-1 aspect-h-1 hover:brightness-110 duration-300 overflow-hidden">
          <Image src={imgUrl} alt={title} fill className="object-cover hover:scale-[1.02] duration-300 rounded-xl" />
        </div>
      }

      <h3 className="font-bold text-base md:text-xl py-2 md:py-4 text-center">{title}</h3>
      <p className={`text-xs md:text-base leading-relaxed tracking-wide ${subItems && "mb-8"}`}>{text}</p>

      {/* only applicable when subItems exist */}
      {subItems && subItems.map((subItem) => (
        <p className="p-2 text-sm md:text-base bg-white my-2 rounded-xl" key={subItem}>☑️ {subItem}</p>
      ))}
      
    </div>
  )
}

export default Card
