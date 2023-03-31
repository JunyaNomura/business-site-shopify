import Image from "next/image"
import Link from "next/link"
import ec from '../../public/ec.svg'
import { RiArrowRightSLine } from 'react-icons/ri'
const ServiceButton = () => {
  return (
    <div className="bg-neutral-100">
     <Link href="#">
       <div className="flex items-center">
        <div>
          <p className="font-bold text-xl">ECサイト構築</p>
          <p className="text-sm">E-commerce</p>
        </div>
        <Image src={ec} alt="ec icon"/>
        <RiArrowRightSLine className="w-16 h-16"/>
       </div>
    </Link>
    </div>
  )
}

export default ServiceButton
