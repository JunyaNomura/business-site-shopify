import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import sampleLogo from '../../public/sampleLogo.jpg'
import links from './links'

const DesktopNav: FC = () => {
  return (
    <>
       {/*Desktop screen */}
       <ul className="hidden lg:block lg:max-w-6xl lg:mx-auto">
       <div className="py-3 px-6 flex items-center justify-between">
         {/* left block */}
         <Link href="/">
           <Image src={sampleLogo} alt="campany logo" className="w-24 h-10 object-cover"/>
         </Link>
         {/* center block */}
         <div className="flex w-1/3 justify-between">
           {links.map((link) => (
             <li key={link.id}>
               <Link href={link.url} className="p-2 rounded-lg hover:bg-white duration-300">
                 {link.name}
               </Link>
             </li>
           ))}
   
         </div>
         {/* right block */}
           <li>
             <Link href="../../contact" className="inline-block p-3 w-32 text-center bg-blue-600 text-white hover:bg-blue-400 duration-200 rounded-3xl">
              お問い合わせ
             </Link>
           </li>
             
        </div>
      </ul>
    </>
  )
}

export default DesktopNav