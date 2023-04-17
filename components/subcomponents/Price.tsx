const planTitle = "STANDARD"
const recommendations = ["aaaaa"]

const Price = () => {
         
  return (

    <div className={`w-full border-2 border-blue-500`}>
    {/* props:cardColor, planTitle, subTitle, */}
      <div className={`bg-blue-500 py-3`}>
        <p className={`${planTitle.length <= 9 ? 'text-3xl' : 'text-2xl'} text-center text-white tracking-widest font-semibold`} >
          {planTitle}
          <span className="block text-base font-normal">
            ライトプラン
          </span>
        </p>  
      </div>
      <div className="w-full bg-neutral-100 py-4 px-3 flex gap-2">
        <p className="w-1/3 text-center my-auto">
         
        </p>
        <p className="w-2/3 break-words">
          <span className="text-xl block"></span>
          <span className="text-sm block"></span>
          {recommendations ? recommendations.map((recommendation) => ( 
            <span className="text-sm block">
              <span className="before:content-['・'] indent-[-0.875em] pl-[0.875em]">
                {recommendation}
              </span>
            </span>
            )) : <span></span>
          }
          <span className="text-xs block before:content-['※'] indent-[-0.875em] pl-[0.875em]">
          </span>
        </p>
      </div>
    </div>
  )
}

export default Price
