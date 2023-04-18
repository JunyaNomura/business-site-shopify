import { PriceInfo } from '../../types/types';
import { AiFillCheckCircle } from 'react-icons/ai'

const Price = ({title, subTitle, color, price, description, points}: PriceInfo) => {
         
  return (
    

    <div className={`w-full my-5 border-[3px] border-${color}`}>
      <div className={`py-3 bg-${color}`}>
        <p className={`${title.length <= 9 ? 'text-3xl' : 'text-2xl'} text-center text-white tracking-widest font-semibold`} >
          {title}
          { subTitle 
            ? <span className="block text-base font-normal">
                {subTitle}
              </span>
            :<span></span>
          }        
        </p>  
      </div>
      <div className="w-full bg-neutral-100 py-4 px-3 flex gap-2">
        <p className="w-1/3 text-center my-auto">料金</p>
        <p className="w-2/3 text-2xl tracking-widest">¥{price.toLocaleString()}〜</p>
      </div>
      <div className="w-full bg-white py-4 px-3 flex gap-2">
        <p className="w-1/3 text-center my-auto">概要</p>
        <p className="w-2/3 text-sm sm:text-base">{description}</p>
      </div>
      <div className="w-full bg-neutral-100 py-4 px-3 flex gap-2">
        <p className="w-1/3 text-center my-auto">こんな方におすすめ</p>
        <div className="w-2/3 break-words">
          <ul className="text-sm sm:text-base">
          {points.map((point) => (
            <li key={point} className="flex gap-1">
              <span><AiFillCheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-${color}`}/></span>
              <span>{point}</span>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Price
