import Image from 'next/image'
import Price from './subcomponents/Price'
import Price2 from './subcomponents/Price2'
import ecIcon from '../public/serviceIcons/ec.svg'
import ecImage from '../public/serviceImages/ecImage.jpg'

import { PriceInfo } from '../types/types';

const ServiceDescription = () => {
  
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

  return (
    <div className="mx-auto px-4 tracking-widest leading-relaxed font-sans font-light text-gray-800">
      {/* title */}
      <div className="my-8 w-fit mx-auto">
        <h2 className="uppercase text-3xl font-semibold">
          {/* props.title */}
          ECサイト構築
        </h2>
        <div className="my-1 border-b-[3px] border-b-emerald-500"></div>
        <p className="capitalize text-xl text-center">
          {/* props.subtitle */}
          E-Commerce
        </p>
      </div>

      {/* ServiceDescription */}
      <section className="mt-12 mx-auto max-w-[720px]">
        {/* image and icon */}
        <div className="flex justify-center">
          <div className="relative">
            {/* props.themeImage */}
            <Image src={ecImage} alt="ec image" className="w-auto h-auto"/>
            {/* props.themeIconImage */}
            <Image src={ecIcon} alt="ec icon for decoration" className="w-10 h-10 absolute top-0.5 left-0.5 brightness-150"/>
          </div>
        </div>
        {/* strength */}
        <div className="flex gap-2 mt-10">
          {/* green circle */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500"></div>
          {/* props.salesPoint */}
          <p className="text-xl sm:text-2xl">
            Shopifyを使った理想のECサイトを構築
          </p>
        </div>
        {/* props.salesDescription */}
        <p className="mt-8">
          Shopify開発経験が豊富なクリエイターが、あなたの目的に合ったECサイトを構築します。テーマ開発・フルカスタマイズを得意としているため、独自の機能を追加したい方にもおすすめです。また、最短2週間で制作可能なため、スピード重視の依頼にも対応可能です。
        </p>
        {/* price plan */}
        <div className="flex gap-2 mt-10">
          {/* green circle */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500"></div>
          {/* props.pricePlan */}
          <p className="text-xl sm:text-2xl">
            料金プラン
          </p>
        </div>
        {/* <Price /> */}

        {menus.map((menu) => (
          <Price2 {...menu} />
        ))}
       


      </section>

    </div>
  )
}

export default ServiceDescription
