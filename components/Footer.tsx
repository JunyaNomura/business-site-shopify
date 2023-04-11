import Link from 'next/link';
import PageLinks from './subcomponents/PageLinks'
import { SiUdemy, SiTwitter, SiInstagram, SiYoutube, SiFacebook} from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="mt-auto footer footer-center py-10 px-6 bg-neutral-300 text-base-content rounded">
      {/* site menu */}
      <ul className="lg:grid lg:grid-flow-col lg:gap-2">
        <li className="">
          <Link href="/" className="py-2 px-4 hover:bg-white rounded-lg duration-300">
            TOP
          </Link>
        </li>
        {PageLinks.map((pageLink) => (
          <li key={pageLink.id}>
            <Link href={pageLink.url} className="py-2 px-3 hover:bg-white rounded-lg duration-300">
              {pageLink.name}
            </Link> 
          </li>
        ))}
      </ul> 
      {/* sns */}
      <div>
        <ul className="grid grid-flow-col gap-6">
          <li>
            <Link href="#">
              < SiTwitter className="w-6 h-6 hover:text-gray-400 duration-300"/>
            </Link> 
          </li>
          <li>
            <Link href="#">
              < SiInstagram className="w-6 h-6 hover:text-gray-400 duration-300"/>
            </Link> 
          </li>
          <li>
            <Link href="#">
              < SiFacebook className="w-6 h-6 hover:text-gray-400 duration-300"/>
            </Link> 
          </li>
          <li>
            <Link href="#">
              < SiYoutube className="w-6 h-6 hover:text-gray-400 duration-300"/>
            </Link> 
          </li>
          <li>
            <Link href="#">
              < SiUdemy className="w-6 h-6 hover:text-gray-400 duration-300"/>
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