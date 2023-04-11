import ServiceButton from "./subcomponents/ServiceButton"
import ServiceButtons from "./subcomponents/ServiceButtons"

const AllServices = () => {
  return (
    <section className="relative mt-24 mb-16 mx-auto px-4 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
      <h3 className="uppercase relative w-80 mx-auto font-bold text-3xl before:absolute before:inline-block before:h-8 before:left-0 before:border-l-[3px] before:border-emerald-500 before:rotate-[-35deg] after:absolute after:inline-block after:h-8 after:right-0 after:border-r-[3px] after:border-emerald-500 after:rotate-[35deg]">
        Services / Price
      </h3>
      <p className="mb-12">サービス一覧 / 料金</p>
      <p className="mb-12">
      お客様によって作りたいイメージもお悩みも様々です。
      <br/>
      My Companyは、豊富な知識・最新の技術・クリエイターによる独自の創造性を活かし、
      <br/>
      お客様のご希望に真摯に寄り添ったWebソリューションを提案いたします。
      <br/>
      サービス料金はそれぞれ目安として記しています。
      <br/>
      詳細なお見積もりはお電話またはWebフォームでお問い合わせください。
      </p>
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ServiceButtons.map((serviceButton) => (
          <div key={serviceButton.id}>
            <ServiceButton {...serviceButton} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default AllServices
