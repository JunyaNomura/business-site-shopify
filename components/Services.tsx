import Link from 'next/link'
import ServiceButton from './subcomponents/ServiceButton'
import { ServiceBtnInfo } from '@/types/types'
import ecIcon from "../public/ec.svg"
import webIcon from "../public/website.svg"
import cmsIcon from "../public/cms.svg"
import photoIcon from "../public/photo.svg"
import moviesIcon from "../public/movies.svg"
import animationIcon from "../public/animation.svg"
import threeDIcon from "../public/threeD.svg"
import systemDevIcon from "../public/systemDev.svg"
import consultingIcon from "../public/consulting.svg"

const serviceButtons: ServiceBtnInfo[] = [
  { 
    id: 1,
    title: "ECサイト構築",
    engtitle: "E-Commerce",
    iconSrc: ecIcon,
    url: "/ec"
  },
  {
    id: 2,
    title: "Webサイト制作",
    engtitle: "Website Production",
    iconSrc: webIcon,
    url: "/websiteDev"
  },
  { 
    id: 3,
    title: "CMS構築",
    engtitle: "Content Management System",
    iconSrc: cmsIcon,
    url: "/cms"
  },
  {
    id: 4,
    title: "写真撮影 / 編集",
    engtitle: "Photography",
    iconSrc: photoIcon,
    url: "/photo"
  },
  {
    id: 5,
    title: "動画撮影 / 編集",
    engtitle: "Movies",
    iconSrc: moviesIcon,
    url: "/movies"
  },
  {
    id: 6,
    title: "アニメーション動画",
    engtitle: "Animation Movies",
    iconSrc: animationIcon,
    url: "/animation"
  },
  {
    id: 7,
    title: "3D開発",
    engtitle: "3D Products",
    iconSrc: threeDIcon,
    url: "/threeD"
  },
  {
    id: 8,
    title: "業務効率化ツール開発",
    engtitle: "Web System Development",
    iconSrc: systemDevIcon,
    url: "/webSystemDev"
  },
  {
    id: 9,
    title: "ビジネスコンサル",
    engtitle: "Business Consulting",
    iconSrc: consultingIcon,
    url: "/consulting"
  },
]
const Services = () => {


  return (
    <section className="relative mt-24 mb-16 mx-auto px-4 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
      <h3 className="uppercase relative w-60 mx-auto font-bold text-3xl before:absolute before:inline-block before:h-8 before:left-4 before:border-l-[3px] before:border-emerald-500 before:rotate-[-35deg] after:absolute after:inline-block after:h-8 after:right-4 after:border-r-[3px] after:border-emerald-500 after:rotate-[35deg]">
        Services
      </h3>
      <p className="mb-12">私たちにできること</p>
      <p className="mb-12">
        私たちのクリエイティブな強みを活かしたWebソリューションの提供により、
        <br />
        お客様の良き理解者としてビジネスを支援していきます。
      </p>
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceButtons.map((serviceButton) => (
          <div key={serviceButton.id}>
            <ServiceButton {...serviceButton} />
          </div>
        ))}
      </div>
      <Link href="../about" className="inline-block w-56 p-3 bg-emerald-500 hover:bg-emerald-300 text-white rounded-3xl duration-300">
            詳しいサービスへ
      </Link>
    </section>

  )
}

export default Services
