import { FC } from 'react'
import MobileNav from './subcomponents/MobileNav'
import DesktopNav from './subcomponents/DesktopNav'
import useScrollDirection from './animateFuncs/useScrollDirection'


const Header: FC = () => {

  return (
    <header className={`fixed w-full z-50 bg-neutral-300/80 ${ useScrollDirection() === 'down' ? "animate-upAnime" : "animate-downAnime"}`}>
      <nav>
        <MobileNav />
        <DesktopNav />
      </nav>
    </header>
  )
}

export default Header

