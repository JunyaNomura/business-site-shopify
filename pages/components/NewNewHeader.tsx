import { FC, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'
import Link from 'next/link';

const NewNewHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full bg-gray-300/80">
      <nav className="py-4 px-6 flex items-center justify-between">
        {/* left block */}
        <div>logo</div>

        {/* right block */}
        <div className="flex items-center justify-between">
          <div className="mr-8 py-2 px-2 bg-blue-500 text-white hover:bg-blue-400 duration-200 rounded-xl">Contact</div>
          {isOpen ?
            <VscClose onClick={() => setIsOpen(!isOpen)} /> :
            <RxHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
          }
        </div>
      </nav>

      {/* hidden menu will be rendered only when isOpen is true */}
      {isOpen && <HiddenMenu />}

    </div>
  )
}

export default NewNewHeader

const HiddenMenu: FC = () => {
  return (
    <div className="absolute w-full bg-gray-300/80">
      <div className="flex flex-col items-end justify-center mr-8 mb-2">
        <Link href="#" className="p-2 hover:bg-gray-50 rounded-lg duration-200">About us</Link>
        <Link href="#" className="p-2 hover:bg-gray-50 rounded-lg duration-200">Services</Link>
        <Link href="#" className="p-2 hover:bg-gray-50 rounded-lg duration-200">Strength</Link>
        <Link href="#" className="p-2 hover:bg-gray-50 rounded-lg duration-200">Creators</Link>
      </div>
    </div> 
  )
}