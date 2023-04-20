import Contact from '@/components/Contact'
import ServiceDescription from '@/components/ServiceDescription'
import Services from '@/components/Services'
import HeadSeo from '../components/HeadSeo'
import ecImage from "../public/serviceImages/ecImage.jpg"
import ecIcon from "../public/serviceIcons/ec.svg"
import { PriceInfo } from "../types/types"

  
const light: PriceInfo = {
    title: 'LIGHT',
    subTitle: 'ライトプラン',
    color: 'blue-500',
    price: 100000,
    description: 'テンプレートを使った基本機能のみのスモールスタート',
    points: [
      'ネットショップ未経験', 
      'なるべく早く基本的な機能を備えたECサイトが欲しい', 
      'できるだけ費用を抑えたい'
    ],
  };

const standard: PriceInfo = {
    title: ' STANDARD',
    subTitle: 'スタンダードプラン',
    color: 'emerald-500',
    price: 500000,
    description: '他社と差別化できるオリジナルデザインのECサイト',
    points: [
      'ブランディングを図りたい', 
      'マーケティング機能を搭載したい', 
      'デザインにこだわりたい'
    ],
  }

const premium: PriceInfo = {
    title: 'PREMIUM',
    subTitle: 'プレミアムプラン',
    color: 'yellow-400',
    price: 1000000,
    description: '大規模で機能が充実したフルカスタマイズのECサイト',
    points: [
      '大規模なECサイトを構築したい', 
      '基幹システムや外部システムとの連携をしたい', 
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
