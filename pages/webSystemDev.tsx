import HeadSeo from '../components/HeadSeo'
import Services from '@/components/Services'
import Contact from '../components/Contact'
import ServiceDescription from '../components/ServiceDescription'
import systemDevImage from '../public/serviceImages/systemDevImage.jpg'
import systemDevIcon from '../public/serviceIcons/systemDev.svg'

export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's WebsystemDev Page"}
        description={"WebsystemDev page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
          <ServiceDescription 
            title={"業務効率化ツール開発"}
            subTitle={"Web System Development"}
            themeImage={systemDevImage}
            themeIconImage={systemDevIcon}
            salesPoint={"GASやNotionを使ってビジネスを加速化"}
            salesDescription={"Google Apps Script(GAS)を用いて、請求書の自動作成、メール送信、LINEへの自動通知など煩雑な業務を自動化するための簡易的なツールを開発します。また、Notionを用いてドキュメント作成や社内Wiki、タスク管理などのさまざまな機能を備えたツールを作成します。"}
            pricePlan={"料金"}
            price
          />
          <Services />
        </div>
        <Contact />
      </main>


    </>
  )
}
