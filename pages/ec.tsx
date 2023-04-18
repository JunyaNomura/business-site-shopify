import Contact from '@/components/Contact'
import ServiceDescription from '@/components/ServiceDescription'
import Services from '@/components/Services'
import HeadSeo from '../components/HeadSeo'
import ecImage from "../public/serviceImages/ecImage.jpg"
import ecIcon from "../public/serviceIcons/ec.svg"
import { PriceInfo } from "../types/types"

  
const light: PriceInfo = {
    enTitle: 'light',
    jaTitle: 'ライト',
    color: 'blue-500',
    price: 100000,
    description: 'テンプレートを使った基本機能のみのスモールスタート',
    points: [
      'Webサイトを開設するのが初めて', 
      '2週間程度で基本的な機能を備えたWebサイトが欲しい', 
      'できるだけ費用を抑えたい'
    ],
  };

const standard: PriceInfo = {
    enTitle: 'standard',
    jaTitle: 'スタンダード',
    color: 'green-500',
    price: 500000,
    description: '他社と差別化できるオリジナルデザインのECサイト',
    points: [
      'ブランディングを図りたい', 
      'サイトに載せる写真を撮影込みでお願いしたい', 
      'デザインにこだわりたい'
    ],
  }

const premium: PriceInfo = {
    enTitle: 'premium',
    jaTitle: 'プレミアム',
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
        title={"Company's EC Page"}
        description={"EC page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
          This is about EC service page
          <ServiceDescription 
            title={"ECサイト構築"}
            subTitle={"E-Commerce"}
            themeImage={ecImage}
            themeIconImage={ecIcon}
            salesPoint={"Shopifyを使った理想のECサイトを構築"}
            salesDescription={"Shopify開発経験が豊富なクリエイターが、あなたの目的に合ったECサイトを構築します。テーマ開発・フルカスタマイズを得意としているため、独自の機能を追加したい方にもおすすめです。また、最短2週間で制作可能なため、スピード重視の依頼にも対応可能です。"}
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
