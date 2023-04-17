

const Price = () => {
  const planTitle = "LIGHT"
  const recommendations1 = [
    "ブランディングを図りたい",
    "サイトに載せる写真を撮影込みでお願いしたい",
    "デザインにこだわりたい",
  ]
  const recommentation2 = [
    
  ]
  
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
      <div className="w-full bg-neutral-100 py-4 px-3 flex gap-2">
        <p className="w-1/3 text-center">
         こんな方におすすめ
        </p>
        <p className="w-2/3 break-words">
          {/* 料金 */}
          <span className="text-xl block">¥100000〜</span>
          {/* 説明 */}
          <span className="text-sm block"></span>
          {/* 箇条書き */}
          {recommendations1 ? recommendations1.map((recommendation) => 
            <ul className="text-sm block">
              <li className="before:content-['・']">{recommendation}</li>
            </ul>
          ) : <span></span>
          }
          {/* 注釈 */}
          <span className="text-xs block"></span>
        </p>
      </div>
    </div>
  )
}

export default Price
