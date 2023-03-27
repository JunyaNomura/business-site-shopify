import Link from 'next/link';
import links from './subcomponents/links'
import { SiUdemy, SiTwitter, SiInstagram, SiYoutube, SiFacebook} from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="footer footer-center py-10 px-6 bg-gray-300 text-base-content rounded">
      {/* site menu */}
      <ul className="lg:grid lg:grid-flow-col lg:gap-2">
        <li className="">
          <Link href="#" className="py-2 px-4 hover:bg-white rounded-lg duration-300">
            TOP
          </Link>
        </li>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url} className="py-2 px-3 hover:bg-white rounded-lg duration-300">
              {link.name}
            </Link> 
          </li>
        ))}
      </ul> 
      {/* sns */}
      <div>
        <ul className="grid grid-flow-col gap-6">
          <li>
            <Link href="#">
              < SiTwitter className="w-6 h-6 hover:text-gray-400"/>
            </Link> 
          </li>
          <li>
            <Link href="#">
              < SiInstagram className="w-6 h-6 hover:text-gray-400"/>
            </Link> 
          </li>
          <li>
            <Link href="#">
              < SiFacebook className="w-6 h-6 hover:text-gray-400"/>
            </Link> 
          </li>
          <li>
            <Link href="#">
              < SiYoutube className="w-6 h-6 hover:text-gray-400"/>
            </Link> 
          </li>
          <li>
            <Link href="#">
              < SiUdemy className="w-6 h-6 hover:text-gray-400"/>
            </Link> 
          </li>
        </ul>
      </div>
      <p>
        <small>
          Copyright © 2023 - All right reserved Company name
        </small>
      </p>
    </footer>
  )
}

export default Footer