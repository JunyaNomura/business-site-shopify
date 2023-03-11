import React from 'react'
import Collapse from '../subcomponents/Collapse'
import SectionBasic from '../subcomponents/SectionBasic'
import { CollapseInfo } from '@/types/types'

const faqs: CollapseInfo[] = [
  {
    id: 1,
    question: 'ECサイトは今持っていないので一からということになります。また弊社も運営ノウハウがほとんどなく心配です。制作以外の運用のご相談もできますか？',
    answer: 'はい。一からということでご提案はもちろん行えます。また、商品を売るためにはECサイト公開後の確実な運用が必要不可欠ですので、運用サポートのプランもご用意しております。',
  },
  {
    id: 2,
    question: '海外販売を視野に入れている',
    answer: 'Shopifyは多言語対応のためのアプリが用意されており自動翻訳で瞬時に海外向けのサイトを作ることができます。100以上の言語から選択でき、表面上の翻訳だけでなくSEOも最適化されます。決済方法も世界で販売するのに十分な種類があります。海外向けにも非常に強いショッピングカートです。',
  },
  {
    id: 3,
    question: '料金プラン以外の料金でのご相談は可能ですか？',
    answer: 'Shopifyで実施する内容によって料金は異なりますので、まずはショップサイトで行いたいことや事業展望などお聞かせください。正しいお見積もりを作成致します。',
  },
  {
    id: 4,
    question: 'Shopifyは初めてです。スタッフに使い方の講習を行っていただくことはできますか？',
    answer: 'はい。ECサイト運営に慣れている方はShopifyの管理画面ですぐに操作を始めていただけることが多いですが、ご不安な方にはレクチャーサービス（※別途料金）をご用意しています。商品や注文などの管理方法を丁寧にご説明いたします。また貴社が慣れるまで（30日間）操作のご質問をお受けいたします。',
  },
  {
    id: 5,
    question: 'ECサイトをできるだけ素早く立ち上げたい',
    answer: 'Shopifyは基本機能が充実しておりテンプレートも豊富です。商品写真や商品リストといった販売に必要な情報さえ揃えば、スピード重視で素早くオープンすることが可能です。',
  },
  {
    id: 6,
    question: 'Shopifyサイト構築にどのくらい時間がかかりますか？',
    answer: 'サイトの規模やカスタマイズの程度によるものの、1ヶ月〜3ヶ月程度かかります。',
  },
  {
    id: 7,
    question: '販路拡大のためネットショップ以外でも商品を販売したい',
    answer: 'ShopifyはブログやSNSに購入ボタンを付ける機能（Buy Button）があります。ショッピングサイト以外の既存のサイトやSNS、メルマガ等で商品を紹介してそのまま購入につなげることができます。受注や在庫はそれぞれShopifyと同期するため運用の手間が二重にかかることはありません。',
  },
  {
    id: 8,
    question: '構築サイト作成サイトのSEOを相談することは可能ですか？',
    answer: 'はい、可能です。ECサイトに留まらず、多数のサイトのSEO集客実績がございます。',
  },
]
const Faq = () => {
  return (
    <>
      <SectionBasic engTitle="faq" title="よくあるご質問" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {faqs.map((faq) => (
          <Collapse key={faq.id} {...faq} />
        ))}
      </div>
    </>
  )
}

export default Faq
