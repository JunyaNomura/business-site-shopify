import { CardInfo } from '@/types/types'
import { FC } from 'react'
import Card from './subcomponents/Card'

const flowItems: CardInfo[] = [
  {
    id: 1,
    title: 'お問い合わせ・ご相談',
    text: 'WEBサイトのフォームやお電話でお問い合わせください。制作の目的や現状の課題、これからの展望などついてもお持ちでしたらお聞かせください。',
    bgColor: 'bg-lime-50',
  },
  {
    id: 2,
    title: 'ご提案・ご発注',
    text: '御社のビジネスにあったネットショップの展開をご提案します。フロント側のみでなく、ネットショップの業務となる物流のご提案もお任せください。提案内容と見積もり金額で問題がなければ、ご契約となります。※着手金として全体費用の50%を頂戴しております。',
    bgColor: 'bg-lime-100',
  },
  {
    id: 3,
    title: 'コンテンツ設計・デザイン',
    text: '着手金のお振込を確認でき次第、制作を開始します。コンテンツの詳細設計やデザインの制作を、お客さまと確認を行いながら進めます。',
    bgColor: 'bg-lime-50',
  },
  {
    id: 4,
    title: 'Shopify設定・拡張アプリ',
    text: 'Step3と同時にshopifyの設定や必要な機能を持った拡張アプリの導入・設定を行います。ある程度の機能設定が終わればデザインの適用を行いショッピングサイトを完成させていきます。',
    bgColor: 'bg-lime-100',
  },
  {
    id: 5,
    title: '納品・検収',
    text: '完成したネットショップをお客様もしっかりとご確認いただき、問題が無ければ公開します。公開後、ショップ運営がスタートします！検収ののち、残りの金額をお支払いいただきます。', 
    bgColor: 'bg-lime-50',
  },
  {
    id: 6,
    title: '運用サポート',
    text: 'ネットショップは公開がスタートライン。ネットショップ開店後に賢く運用することで、収益増加につながります。弊社では必要に応じて、公開後のサイト保守や、WEBのプロとしての運営アドバイスなども可能です。別途ご相談ください。',
    bgColor: 'bg-lime-100',
  },
]
const Flow: FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-16">
        {flowItems.map((flowItem) => (
          <Card key={flowItem.id} {...flowItem} />
        ))} 
      </div>
    </>
  )
}

export default Flow
