

export interface CardInfo {
  id: number
  title: string
  text: string

  imgUrl?: string
  price?: string
  subItems?: string[]
  bgColor?: string
}


export interface SectionHeadline {
  engTitle: string
  title: string
  text?: string
}


export interface CollapseInfo {
  id: number
  question:  string
  answer: string
}

export interface ServiceBtnInfo {
  id: number
  title: string
  engtitle: string
  iconSrc: string
  url: string
}

export interface HeadSeoInfo {
  title: string
  description: string
  url: string
  ogImageUrl: string
  ogTwitterImage: string
  ogType: string
  children?: any
}
