import Image from "next/image"
import { FC } from 'react'
import Link from "next/link"
import { RiArrowRightSLine } from 'react-icons/ri'
import { ServiceBtnInfo } from '@/types/types' 


const ServiceButton: FC<ServiceBtnInfo> = ({title, engtitle, iconSrc, url} :ServiceBtnInfo) => {
  return (
    <div className="bg-neutral-100 hover:bg-neutral-500 hover:text-white duration-300">
      <Link href={url}>
        <div className="h-20 flex justify-between items-center">
          <div className="z-10 text-left">
            <p className="font-bold text-lg sm:text-xl before:relative before:inline-block before:align-middle before:w-6  before:mx-2 before:border-b-[3px] before:border-emerald-500">{title}</p>
            <p className="text-sm pl-10">{engtitle}</p>
          </div>
          <div className="relative">
            <Image src={iconSrc} width={56} height={56} alt={engtitle} className="absolute right-12 "/>
            <RiArrowRightSLine className="w-14 h-14"/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ServiceButton
