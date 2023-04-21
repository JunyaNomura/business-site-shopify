import HeadSeo from '../components/HeadSeo'
import Services from '../components/Services'
import Contact from '../components/Contact'
import { PriceInfo } from "../types/types"
import ServiceDescription from '@/components/ServiceDescription'
import animationImage from "../public/serviceImages/animationImage.jpg"
import animationIcon from "../public/serviceIcons/animation.svg"

const slideShow: PriceInfo = {
  id: 1,
  title: 'スライドショー',
  color: 'emerald-500',
  price: 50000,
  description: '写真やイラスト、ロゴなどの素材を入れ替えていくタイプの動画です(最短2週間程度で納品)',
  points: [
    '費用を安く抑えたい', 
    '既にイラスト等の素材は持っている', 
    '簡単な商品、サービス紹介の動画が欲しい'
  ],
};

const motionGraphics: PriceInfo = {
  id: 2,
  title: 'モーショングラフィックス',
  color: 'emerald-500',
  price: 200000,
  description: '写真やイラスト、ロゴなどの素材自体を動かすタイプのアニメーションです',
  points: [
    'ユーザーにインパクトを与え記憶に残したい', 
    'メッセージをダイレクトに伝えたい', 
    'オリジナルイラストを使って他社と差をつけたい'
  ],
};

const menus: PriceInfo[] = [slideShow, motionGraphics];


export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's Animation Page"}
        description={"Animation page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
          <ServiceDescription 
            title={"アニメーション動画"}
            subTitle={"Animation Movies"}
            themeImage={animationImage}
            themeIconImage={animationIcon}
            salesPoint={"After Effectsを使ったユーザーにダイレクトに伝わるアニメーション動画"}
            salesDescription={"企業のPR動画や広告の一つとしてWebにアニメーション動画を取り入れることは、ユーザーに直感的に情報を伝えるのに効果的です。弊社では主にAfter Effectsを使用した、モーショングラフィックスを中心とするアニメーション動画を得意としております。イラストや文字、図形などに動きや音を効果的に加え、オリジナリティ溢れる動画の制作をいたします。ナレーションやオリジナルイラストの作成等ご希望の場合は別途費用がかかります。詳細はお問い合わせ下さい。"}
            pricePlan={"料金プラン"}
            menus={menus}
          />
          <Services />
        </div>
        <Contact />
      </main>

    </>
  )
}
