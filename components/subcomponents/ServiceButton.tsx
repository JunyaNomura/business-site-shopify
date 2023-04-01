import Image from "next/image"
import Link from "next/link"
import ec from '../../public/ec.svg'
import { RiArrowRightSLine } from 'react-icons/ri'
const ServiceButton = () => {
  return (
    <div className="relative bg-neutral-100 hover:bg-neutral-500 hover:text-white duration-300 md:w-1/3">
     <Link href="#">
       <div className="h-20 flex justify-between items-center">
        <div className="z-10">
          <p className="font-bold text-xl before:relative before:inline-block before:align-middle before:w-6  before:mx-2 before:border-b-[3px] before:border-emerald-500">業務効率化ツール開発</p>
          <p className="text-sm">E-commerce</p>
        </div>
        <div className="relative">
          <Image src={ec} alt="ec icon" className="w-14 h-14 absolute right-12"/>
          <RiArrowRightSLine className="w-14 h-14"/>
        </div>
       </div>
    </Link>
    </div>
  )
}

export default ServiceButton
