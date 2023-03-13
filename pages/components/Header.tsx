import Link from 'next/link';
import { useState, useEffect } from 'react'

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
  
return (
  <header>
    <div className={`navbar bg-base-200 px-16 fixed z-50 ${ scrollDirection === 'down' ? "-top-24" : "top-0"} transition-all duration-500`}>

      <div className="flex-1">
        <Link href="#" className="btn btn-ghost normal-case text-xl">Company </Link>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="#">Homepage</Link></li>
            <li><Link href="#">Portfolio</Link></li>
            <li><Link href="#">About</Link></li>
          </ul>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
        <li><Link href="#">Item 1</Link></li>
        <li><Link href="#">Portfolio</Link></li>
        <li><Link href="#">Item 3</Link></li>
      </ul>
        </div>
      </div>

    </div>
  </header>
)
}

export default Header;
