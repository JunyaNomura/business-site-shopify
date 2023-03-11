

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
