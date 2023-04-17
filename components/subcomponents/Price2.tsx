const planTitle = "STANDARD"
const recommendations = ["aaaaa"]
import { PriceInfo } from '../../types/types';

const Price2 = ({enTitle, jaTitle, color, price, description, points}: PriceInfo) => {
         
  return (

    <div className={`w-full border-2 bg-${color}`}>
    {/* props:cardColor, planTitle, subTitle, */}
      <div className={`py-3`}>
        <p className={`${planTitle.length <= 9 ? 'text-3xl' : 'text-2xl'} text-center text-white tracking-widest font-semibold`} >
          {enTitle.toUpperCase()}
          <span className="block text-base font-normal">
            {jaTitle}
          </span>
        </p>  
      </div>
      <div className={`bg-white border border-${color}`}>
        <div className="grid grid-cols-2">
          <div>料金</div>
          <div>¥{price.toLocaleString()}〜</div>
        </div>
        <div className="grid grid-cols-2">
          <div>概要</div>
          <div>{description}</div>
        </div>
        <div className="grid grid-cols-2">
          <div>こんな方におすすめ</div>
          <div>
            <ul>
            {points.map((point) => (
              <li key={point} className="list-disc">{point}</li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price2
