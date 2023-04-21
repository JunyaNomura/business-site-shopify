import HeadSeo from '../components/HeadSeo'
import Services from '../components/Services'
import Contact from '../components/Contact'
import ServiceDescription from '../components/ServiceDescription'
import consultingImage from '../public/serviceImages/consultingImage.jpg'
import consultingIcon from '../public/serviceIcons/consulting.svg'
import { PriceInfo } from "../types/types"

const spot: PriceInfo = {
  title: 'スポット契約',
  subTitle: '(時間契約)',
  color: 'blue-500',
  price: 15000,
  attention: '1時間あたりの料金',
  description: 'ビジネスにおいて意思決定に迷いが生じた時等に一回又は一時的に個別相談ができる契約',
  points: [
    '低コストでコンサルタントに相談したい', 
    'お試しとして活用したい', 
    'セカンドオピニオンとして活用したい'
  ],
};

const adviser: PriceInfo = {
  title: ' 顧問契約',
  subTitle: '(アドバイザー契約)',
  color: 'emerald-500',
  price: 150000,
  attention: '月額あたりの料金',
  description: 'ビジネス・IT・クリエイティブ等どんなことでも時間・回数制限無しで相談できる契約',
  points: [
    '専門スキルや知見を定期的に取り入れたい', 
    '第三者の意見や考えを大事にしたい', 
    '事業の改善を図りたい'
  ],
}

const project: PriceInfo = {
  title: 'プロジェクト契約',
  color: 'yellow-400',
  price: 150000,
  attention: 'プロジェクト内容により異なる',
  description: '決まったテーマごとに課題解決や目標達成を共に目指す契約',
  points: [
    '既に解決すべきテーマは見えているがそのための専門の知識や経験を有するエキスパートがいない', 
    '専門家と共に効率的にプロジェクトを進めたい', 
  ],
};

const menus: PriceInfo[] = [spot, adviser, project];

export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's Consulting Page"}
        description={"Consulting page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
          <ServiceDescription 
            title={"ビジネスコンサル"}
            subTitle={"Business Consulting"}
            themeImage={consultingImage}
            themeIconImage={consultingIcon}
            salesPoint={"海外MBA取得のプロによるビジネスコンサル"}
            salesDescription={"元大手出版社の漫画編集者で、海外トップクラスのビジネススクールにMBA留学した経験を持つエキスパートが、クリエイティブ・ビジネス両方の視点からコンサルティングを行います。"}
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
