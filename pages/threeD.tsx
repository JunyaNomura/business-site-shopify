import HeadSeo from '../components/HeadSeo'
import Services from '@/components/Services'
import Contact from '../components/Contact'
import { PriceInfo } from "../types/types"
import ServiceDescription from '@/components/ServiceDescription'
import threeDImage from "../public/serviceImages/threeDImage.jpg"
import threeDIcon from "../public/serviceIcons/threeD.svg"

const modeling: PriceInfo = {
  title: '商品の3Dモデリング',
  color: 'emerald-500',
  price: 50000,
  description: '時計やリップ、洋服、スイーツなどWeb上で３D化したい商品のモデリングを担当します',
  points: [
    'ユーザーに実際の質感や色を360°伝えたい', 
    'ECやオンライン販売において他社と差をつけたい', 
    'EC、Webサイトに最新のデザイン・技術を取り入れたい'
  ],
};

const website3D: PriceInfo = {
  title: ' 3DWebサイト制作',
  color: 'emerald-500',
  price: 100000,
  attention: 'サイトの規模により前後します',
  description: '既存のWebサイト、又はこれからサイトを開設する時に３Dを組み込んだデザインを作成',
  points: [
    'クリエイティブなWebサイトでユーザーを惹きつけたい', 
    'Webサイトのリニューアルをしたい', 
    'Webサイトに最新のデザイン・技術を取り入れたい'
  ],
};

const menus: PriceInfo[] = [modeling, website3D];


export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's 3d Page"}
        description={"3d page's description"}
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
            themeImage={threeDImage}
            themeIconImage={threeDIcon}
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
