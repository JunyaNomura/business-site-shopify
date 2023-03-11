import { FC } from 'react'
import { CollapseInfo } from '@/types/types'

const Collapse: FC<CollapseInfo> = ({id, question, answer}: CollapseInfo) => {
  return (
    <div tabIndex={id} className="collapse group">
      <div className="collapse-title font-semibold group-focus:bg-teal-400 group-focus:text-secondary-content">Q. {question}</div>
      <div className="collapse-content group-focus:bg-teal-400 group-focus:text-secondary-content"> 
        <p>A. {answer}</p>
      </div>
    </div>
  )
}

export default Collapse
