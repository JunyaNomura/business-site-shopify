import { AiFillCheckCircle } from "react-icons/ai"

const solutionsEx = [
  {
    id: 1,
    example: "ターゲット層にリーチできるWebサイトにリニューアルしたい"
  },
  {
    id: 2,
    example: "新商品の始動へ向け戦略的なECサイトを立ち上げたい"
  },
  {
    id: 3,
    example: "グローバルを意識した海外向けのWebサイトを作りたい"
  },
  {
    id: 4,
    example: "商品を3D化して競合他社に差をつけたWebサイトを作りたい"
  },
  {
    id: 5,
    example: "自社でホームページを更新できるCMSサイトを構築したい"
  },
  {
    id: 6,
    example: "日々の業務をより効率化して時間とコ  ストを削減するツールが欲しい"
  },
  {
    id: 7,
    example: "ビジネスのプロに相談して会社の業績を効果的に改善したい"
  },
  {
    id: 8,
    example: "写真や動画・アニメーションなどを効果的に使ったブランド感あるWebサイトを制作したい"
  },
  {
    id: 9,
    example: "Webサイトに載せる写真や動画などの素材も一括で頼みたい"
  },
]


const Solutions = () => {
  return (
    <div>
      <section className="relative mt-24 mb-16 mx-auto px-4 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
        <h3 className="uppercase relative w-60 mx-auto font-bold text-3xl before:absolute before:inline-block before:h-8 before:left-1 before:border-l-[3px] before:border-emerald-500 before:rotate-[-35deg] after:absolute after:inline-block after:h-8 after:right-1 after:border-r-[3px] after:border-emerald-500 after:rotate-[35deg]">
          Solutions
        </h3>
        <p className="mb-12">私たちが解決すること</p>
        <p className="mb-12">
          どんなご希望やお悩みでもお気軽にご相談ください。
          <br/>
          以下はお客様からいただくご相談の例です。
        </p>
        <div className="max-w-xl mx-auto relative">
          {solutionsEx.map((solutionEx) => (
            <div key={solutionEx.id} className="flex mb-4">
              <AiFillCheckCircle className="w-6 h-6 absolute left-0 text-emerald-500"/>
              <p className="pl-8 text-left">{solutionEx.example}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Solutions
