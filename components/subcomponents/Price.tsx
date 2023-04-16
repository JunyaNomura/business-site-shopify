

const Price = () => {
  const planTitle = "LIGHT"
  
  return (

    <div className="w-full">
    {/* props:cardColor, planTitle, subTitle, */}
      <div className="bg-blue-500 py-3">
        <p className={`${planTitle.length <= 9 ? 'text-3xl' : 'text-2xl'} text-center text-white tracking-widest font-semibold`} >
          {planTitle}
          <span className="block text-base font-normal">
            ライトプラン
          </span>
        </p>  
      </div>
      <div className="w-full bg-neutral-100 py-4 px-3 flex">
        <p className="w-1/3 text-center">
         こんな方におすすめ
        </p>
        <p className="w-2/3 break-words">
          <span className="text-xl block">¥100000〜</span>
          <span className="text-sm block"></span>
          <span className="text-sm block"></span>
          <span className="text-xs block"></span>
        </p>
      </div>
    </div>
  )
}

export default Price
