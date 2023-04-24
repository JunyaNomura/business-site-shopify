import { BsFillTelephoneFill } from "react-icons/bs" 

const HowToContact = () => {
  return (
    <section className="pt-8 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
      {/* Tellphone */}
      <div className="mb-20 max-w-2xl mx-auto px-4">
        {/* green circle */}
        <div className="mb-4 flex">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500"></div>
          <p className="text-xl sm:text-2xl">お電話からのお問い合わせ</p>
        </div>
        <a href="tel:09012345678" className="sm:pointer-events-none">
          <div className="text-center py-4 bg-blue-50 border-2 border-blue-500 hover:bg-blue-500 hover:text-white duration-300">
            <div className="flex justify-center items-center gap-4">
              <BsFillTelephoneFill className="w-8 h-8"/>
              <span className="text-2xl sm:text-3xl font-semibold">
                090-1234-5678
              </span> 
            </div>
              <small>
                対応時間/ 10：30〜19：00（土日祝休）
              </small>
          </div>
        </a>
      </div>
      {/* google form (web form) */}
      <div className=" max-w-2xl mx-auto">
        {/* green circle */}
        <div className="mb-4 flex px-4">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500"></div>
          <p className="text-xl sm:text-2xl">フォームからのお問い合わせ</p>
        </div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSehOC4SiU52Nee8PpMizpufkoyMN00qvN-I4kg4Df34rpBhbw/viewform?embedded=true" className="w-full h-[1200px]">読み込んでいます…</iframe>
      </div>
    </section>
  )
}

export default HowToContact
