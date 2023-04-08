import { useState, FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import sampleLogo from '../../public/sampleLogo.jpg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'
import links from './links';

const HiddenMenu: FC = () => {
  return (
    <div className="absolute w-full bg-gray-300/80">
      <div className="flex flex-col justify-center mb-2">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url} className="flex justify-end px-8 py-2 hover:bg-gray-50 duration-200">
              {link.name}
            </Link>
          </li>
        ))}
      </div>
    </div> 
  )
}

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* mobile screen  */}
      <ul className="lg:hidden">
        <div className="py-3 px-6 flex items-center justify-between">
          {/* left block */}
          <Link href="/">
            <Image src={sampleLogo} alt="campany logo" className="w-24 h-10 object-cover"/>
          </Link>

          {/* right block */}
            <div className="flex items-center justify-between">
              <li>
                <Link href="../../contact" className="inline-block mr-6 p-3 w-32 text-center bg-blue-600 text-white hover:bg-blue-400 duration-200 rounded-3xl">
                  お問い合わせ
                </Link>
              </li>

              <button type="button" className='text-gray-600 hover:bg-gray-100 border border-transparent hover:border-gray-400 duration-200 rounded-lg'>
              {isOpen ?
                <VscClose onClick={() => setIsOpen(!isOpen)} className="h-10 w-10 p-2"/> :
                <RxHamburgerMenu onClick={() => setIsOpen(!isOpen)} className="h-10 w-10 p-2"/>
              }
              </button>
            </div>
        </div>

        {/* hidden menu will be opened only when isOpen is true */}
        {isOpen && <HiddenMenu />}
      </ul>
    </>
  )
}

export default MobileNav