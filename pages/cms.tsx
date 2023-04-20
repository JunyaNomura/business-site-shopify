import HeadSeo from '../components/HeadSeo'
import Services from '../components/Services'
import Contact from '../components/Contact'
import ServiceDescription from '@/components/ServiceDescription'
import { PriceInfo } from "../types/types"
import cmsImage from "../public/serviceImages/cmsImage.jpg"
import cmsIcon from "../public/serviceIcons/cms.svg"


const light: PriceInfo = {
  title: 'LIGHT',
  subTitle: 'ライトプラン',
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
  title: ' STANDARD',
  subTitle: 'スタンダードプラン',
  color: 'emerald-500',
  price: 500000,
  description: 'デザインに拘ったオリジナル性のあるWebサイト',
  points: [
    'ブランディングを図りたい', 
    'サイトに載せる写真を撮影込みでお願いしたい', 
    'デザインにこだわりたい'
  ],
}

const premium: PriceInfo = {
  title: 'PREMIUM',
  subTitle: 'プレミアムプラン',
  color: 'yellow-400',
  price: 1000000,
  description: '完全フルカスタマイズで機能が充実したWebサイト',
  points: [
    'ページ数が膨大な大規模なWebサイトを構築したい', 
    '基幹システムや外部システムとの連携をしたい', 
    '独自の機能を搭載させたい'
  ],
};


const menus: PriceInfo[] = [light, standard, premium];


export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's CMS Page"}
        description={"CMS page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
        <ServiceDescription 
            title={"CMS構築"}
            subTitle={"Content Management System"}
            themeImage={cmsImage}
            themeIconImage={cmsIcon}
            salesPoint={"高機能・コストフリーな管理更新システム"}
            salesDescription={"WordPressやShopifyなどのCMS（コンテンツ管理システム）を使ったWebサイト・ECサイトを構築することで、お客様自身でコンテンツの管理・更新を可能にします。簡単で素早い情報発信を可能にするCMSを使うことで、結果的なコスト削減にもつながります。"}
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
