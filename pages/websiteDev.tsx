import HeadSeo from '../components/HeadSeo'
import Services from '@/components/Services'
import Contact from '../components/Contact'
import ServiceDescription from '../components/ServiceDescription'
import websiteImage from '../public/serviceImages/websiteImage.jpg'
import websiteIcon from '../public/serviceIcons/website.svg'
import { PriceInfo } from "../types/types"

const light: PriceInfo = {
  id: 1,
  title: 'LIGHT',
  subTitle: 'ライトプラン',
  color: 'blue-500',
  price: 100000,
  description: 'ページ数が10ページ前後のテンプレートを使った比較的小規模なWebサイト',
  points: [
    '更新をあまり必要としない', 
    '2週間程度でWebサイトを開設したい', 
    'できるだけ費用を抑えたい'
  ],
};

const standard: PriceInfo = {
  id: 2,
  title: ' STANDARD',
  subTitle: 'スタンダードプラン',
  color: 'emerald-500',
  price: 500000,
  description: 'オリジナルデザインを使ったブランド力のある本格的な中規模Webサイト',
  points: [
    'ブランディングを図りたい', 
    'サイトに載せる写真を撮影込みでお願いしたい', 
    'デザインにこだわりたい'
  ],
}

const premium: PriceInfo = {
  id: 3,
  title: 'PREMIUM',
  subTitle: 'プレミアムプラン',
  color: 'yellow-400',
  price: 1000000,
  description: '更新頻度が高く独自コンテンツが充実した機能性の高い大規模Webサイト',
  points: [
    '集客率の高いオウンドメディアを作りたい', 
    '動画やアニメーション等でプロモーションを図りたい', 
    '独自の機能を搭載させたい'
  ],
};

const menus: PriceInfo[] = [light, standard, premium];


export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's Website development Page"}
        description={"Website devlopment page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
          <ServiceDescription 
            title={"Webサイト制作"}
            subTitle={"Website Production"}
            themeImage={websiteImage}
            themeIconImage={websiteIcon}
            salesPoint={"最新技術を使った総合力の高いwebサイト制作"}
            salesDescription={"コーポレートサイト、キャンペーン・特設サイト、採用サイト、ブランドサイト等、お客様の目的や世界観に沿ったwebサイトを構築します。最新のweb技術に詳しいエンジニア達が開発を担当するため、お客様の予算を踏まえた上で、より洗練されたwebサービスの提供に貢献します。"}
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
