import HeadSeo from '../components/HeadSeo'
import Services from '@/components/Services'
import Contact from '../components/Contact'
import ServiceDescription from '@/components/ServiceDescription'
import photoImage from "../public/serviceImages/photoImage.jpg"
import photoIcon from "../public/serviceIcons/photo.svg"
import { PriceInfo } from "../types/types"

const businessTrip: PriceInfo = {
  id: 1,
  title: '出張撮影',
  color: 'emerald-500',
  price: 30000,
  attention: '遠方の場合の出張費別途',
  description: '当社在籍のフォトグラファーがお客様の指定の場所へ出張撮影に伺います',
  points: [
    'プロ撮影の写真でHPの品質を上げたい', 
    '会社の代表・社員のプロフィール写真を依頼したい', 
    'イベントの撮影を頼みたい'
  ],
};

const studio: PriceInfo = {
  id: 2,
  title: 'スタジオ撮影',
  color: 'emerald-500',
  price: 100000,
  attention: 'スタジオ探しのご相談無料',
  description: '当社在籍のフォトグラファーがレンタルフォトスタジオにお伺いし写真撮影を行います',
  points: [
    '撮影に適した場所がなく困っている', 
    '持参が難しい機材や設備が整ったスタジオで広告やモデルの撮影をお願いしたい' 
  ],
};

const menus: PriceInfo[] = [businessTrip, studio];


export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's Photo Page"}
        description={"Photo page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
          <ServiceDescription 
            title={"写真撮影 / 編集"}
            subTitle={"Photography"}
            themeImage={photoImage}
            themeIconImage={photoIcon}
            salesPoint={"プロのフォトグラファーによる写真撮影とハイクオリティなレタッチ技術"}
            salesDescription={"当社在籍のフォトグラファーが広告等事業用の撮影、商品撮影、タレント・モデル様の宣材写真等を行います。これらをWeb制作と合わせて行うことで、一貫したユーザー体験を提供することが可能です。遠方への出張撮影も可能ですのでお気軽にお問い合わせ下さい。"}
            pricePlan={"料金プラン(レタッチ費用込み)"}
            menus={menus}
          />
          <Services />
        </div>
        <Contact />
      </main>


    </>
  )
}
