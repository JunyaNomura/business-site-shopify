import { ServiceBtnInfo } from '@/types/types'
import ecIcon from "../../public/serviceIcons/ec.svg"
import webIcon from "../../public/serviceIcons/website.svg"
import cmsIcon from "../../public/serviceIcons/cms.svg"
import photoIcon from "../../public/serviceIcons/photo.svg"
import moviesIcon from "../../public/serviceIcons/movies.svg"
import animationIcon from "../../public/serviceIcons/animation.svg"
import threeDIcon from "../../public/serviceIcons/threeD.svg"
import systemDevIcon from "../../public/serviceIcons/systemDev.svg"
import consultingIcon from "../../public/serviceIcons/consulting.svg"

const ServiceButtons: ServiceBtnInfo[] = [
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

export default ServiceButtons