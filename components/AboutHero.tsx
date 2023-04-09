import Image from 'next/image'
import aboutSvg from '../public/about.svg'

const AboutHero = () => {
  return (
    <div className="mx-auto px-4 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
      {/* hero title */}
        <h2 className="w-auto mt-8 uppercase text-3xl">
          about us
        </h2>   
          <p className="text-base mb-8">
         私たちについて
          </p>
      {/* hero image */}
      <Image src={aboutSvg} alt="hero image" className="mx-auto lg:max-w-3xl"/> 
      {/* about */}
      <section className="mt-24">
        <p className="mb-12">
          Webサイト・LP・SNS・ECなど、
          <br/>
          Web戦略って何からやって良いのかわからない。
          <br/><br/>
          やりたいイメージはあるけど技術に詳しくないから、
          <br/>
          何をどう発注すれば良いのかわからない。
          <br/>
          そんな風に感じた経験はありませんか？
          <br/><br/>
          企業にとってのWebとは顧客とのタッチポイントであり、
          <br/>
          そこでのユーザー体験がブランディングに直結します。
          <br/><br/>
          そして、その設計のためには、
          <br/>
          マーケティングとエンジニアリング、両方の視点を持つことが不可欠です。
          <br/><br/>
          私たち「My Company」が
          <br/>
          Webを中心にした問題解決に取り組みます。
        </p>
      </section>
    </div>
  )
}

export default AboutHero
