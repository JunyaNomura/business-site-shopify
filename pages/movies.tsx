import HeadSeo from '../components/HeadSeo'
import Services from '@/components/Services'
import Contact from '../components/Contact'
import ServiceDescription from '../components/ServiceDescription'
import moviesImage from '../public/serviceImages/moviesImage.jpg'
import moviesIcon from '../public/serviceIcons/movies.svg'
import { MovieMenusInfo } from '../types/types'

const composition: MovieMenusInfo = {
  title: "企画 / 構成",
  prices:[  
    { 
      id: 1,
      priceTitle: "企画/構成費",
      price: 20000,
    },
    { 
      id: 2,
      priceTitle: "ディレクション費用",
      price: 20000,
    },
    {
      id: 3,
      priceTitle: "シナリオ作成費",
      price: 8000,
    },
    
  ],
  description: "動画・映像のコンセプト作りから、スケジューリング、字コンテシナリオ、絵コンテなどを作成する工程です。動画の設計図となる企画は、動画制作において最も重要です。ディレクターを立てない場合、依頼側に相当な負担がかかるばかりか、プロとしての品質管理が出来なくなるので、企画映像においてディレクターは必須であると言えます。",
}

const makingMovie: MovieMenusInfo = {
  title: "撮影",
  prices:[  
    { 
      id: 1,
      priceTitle: "業務用ENGカメラ撮影",
      price: 25000,
    },
    { 
      id: 2,
      priceTitle: "360°アクションカメラ撮影",
      price: 20000,
    },
    {
      id: 3,
      priceTitle: "業務用ハンディカメラ撮影",
      price: 15000,
    },
    {
      id: 4,
      priceTitle: "カメラマン代",
      price: 20000,
    },
    
  ],
  description: "撮影はカメラマン代＋機材代が基本料金でかかります。その他必要な日数・アシスタントの数・録音・照明・メイク等により前後するため、詳細なお見積もりはお問い合わせください。",
}

const editing: MovieMenusInfo = {
  title: "編集",
  prices:[  
    { 
      id: 1,
      priceTitle: "基本編集費",
      price: 20000,
    },
    { 
      id: 2,
      priceTitle: "ナレーション費",
      price: 20000,
    },
    {
      id: 3,
      priceTitle: "音響効果費",
      price: 20000,
    },
    {
      id: 4,
      priceTitle: "静止画/イラスト費",
      content: "必要に応じて",
    },
    
  ],
  description: "編集費にはカット、テロップ・エフェクト・音源・イラスト等(フリー素材)を含みます。動画の尺(10分単位)で料金は変動します。また音響に関しまして、既存の音源を購入する場合とオリジナルで製作する場合とございますので別途お問い合わせください。",
}

const movieMenus: MovieMenusInfo[] = [composition, makingMovie, editing];


export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's Movies Page"}
        description={"Movies page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
          <ServiceDescription 
            title={"動画撮影 / 編集"}
            subTitle={"Movies"}
            themeImage={moviesImage}
            themeIconImage={moviesIcon}
            salesPoint={"映像業界の知識が豊富な動画クリエイターがコンセプト設計から編集まで一括で提供"}
            salesDescription={"映画撮影の経験もある動画クリエイターが持ち前の知識と技術を活かして企画・シナリオ・撮影・音楽・ナレーション・編集まで一括で行うことが可能です。企業のプロモーション・商品撮影等とWebを組み合わせることによってターゲット層への更なるアプローチにも繋がります。"}
            pricePlan={"料金プラン"}
            movieMenus={movieMenus}
          />
          <Services />
        </div>
        <Contact />
      </main>

    </>
  )
}
