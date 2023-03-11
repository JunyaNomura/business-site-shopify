import { FC, ReactNode } from 'react'
import { SectionHeadline } from '@/types/types'

const SectionBasic = ({engTitle, title, text}: SectionHeadline) => {
  return (
    <>
      <div className="text-center py-6 md:py-12">
        <h4 className="text-lg font-semibold text-teal-400">{engTitle.toLocaleUpperCase()}</h4>
        <h3 className="pt-2 md:pt-4 text-xl md:text-4xl font-extrabold">{title}</h3>
        {text && <p className="mt-4 md:text-lg">{text}</p>}
      </div>
    </>
  )
}

export default SectionBasic
