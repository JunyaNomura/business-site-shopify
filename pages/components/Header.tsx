import { Navbar, Button, Dropdown } from "flowbite-react";
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'

//navbar's scrolling animation
const useScrollDirection = () =>  {
  const [scrollDirection, setScrollDirection]= useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};


const Header = () => {

  const scrollDirection = useScrollDirection();

  const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
      setOpenMenu(!openMenu);
  }

  return (
    <header className='fixed'>
      <Navbar
        className={`${ scrollDirection === 'down' ? "animate-upAnime" : "animate-downAnime"} bg-green-200 w-full z-50 transition-all duration-500 fixed`}
        fluid={true}
        rounded={true}
      >
      <Navbar.Brand href="https://flowbite.com/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold">
        Flowbite
      </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          Get started
        </Button>
        <Navbar.Toggle />
      </div>
        <Navbar.Collapse >
          <Navbar.Link
            href="/navbars"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Services
          </Navbar.Link>
          
          <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="flex justify-between">
      <Link href="#">
        <img src="/sampleLogo.jpg" className="h-12 w-32 object-cover rounded-lg"/>
      </Link>

      {/* <div className="flex">
        <button className="text-white bg-blue-500 h-12 px-3 rounded-lg hover:text-red-400 hover:bg-gray-400 ">
          お問い合わせ
        </button>

        <nav>

          <section className="lg:hidden">

            <div 
              className={`${ openMenu? "hidden" : "block" } p-2`}
              onClick={() => setOpenMenu(true)}
            >
              <button className='animate-pulse hover:text-red-400 hover:bg-gray-400 border border-transparent hover:border-red-400 rounded-lg'>
                <RxHamburgerMenu className="h-10 w-10"/>
              </button>
            </div>

            <div 
              className={`${ openMenu? "block" : "hidden" } p-2`}
              onClick={() => setOpenMenu(false)}
            >
              <div className="bg-gray-200 ">
                <button className='animate-pulse hover:text-red-400 border border-transparent hover:bg-gray-400  hover:border-red-400 rounded-lg'>
                  <VscClose className="h-10 w-10"/>
                </button>
                <ul className="absolute bg-gray-200">
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Strength</li>
                  <li>Creators</li>
                </ul>
              </div>
            </div>

  

          </section>

        </nav>

      </div> */}
      </div>
    </header>
  )
}

export default Header
