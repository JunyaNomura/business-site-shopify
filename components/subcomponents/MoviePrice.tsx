import { MovieMenusInfo } from "../../types/types"

const MoviePrice = (
  {
    title,
    prices,
    description
  }
: MovieMenusInfo) => {
         
  return (
    <div className="w-full my-5 border-[3px] border-emerald-500">
      <div className="py-3 bg-emerald-500">
        <p className="text-3xl text-center text-white tracking-widest font-semibold" >
          {title}      
        </p>  
      </div>
      { prices.map((price) =>   
        <div key={price.id} className={`w-full ${price.id % 2 === 1 ? "bg-neutral-100" : "bg-white" } py-4 px-3 flex gap-2`}>            
          <p className="w-1/3 text-center my-auto">{ price.priceTitle }</p>
          <p className="w-2/3 text-2xl text-center my-auto tracking-widest">
            {price.price
              ? <span>¥{ price.price.toLocaleString() }〜</span>
              : <span className="text-base">{ price.content }</span>
            }  
          </p>
        </div>
      )}
      <div className={`w-full ${prices.length % 2 === 1 ? "bg-white" : "bg-neutral-100"} py-4 px-3 flex gap-2`}>
        <p className="w-1/3 text-center my-auto">概要</p>
        <p className="w-2/3 text-sm sm:text-base">
        { description }
        </p>
      </div>
    </div>
  )
}

export default MoviePrice
