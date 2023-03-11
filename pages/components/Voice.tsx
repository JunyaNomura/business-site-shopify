import { FC } from 'react';

import Image from 'next/image'
import Card from '../subcomponents/Card';
import SectionBasic from '../subcomponents/SectionBasic';
import { CardInfo } from '@/types/types';

const customers: CardInfo[] = [
  {
    id: 1,
    imgUrl: 'https://images.unsplash.com/photo-1676824442274-4acbea1eb191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'グリーライフスタイル株式会社',
    text: '決め手はなんといっても「早いレスポンス」と「高いデザイン力」。コミュニケーションも手厚くとってくださるので安心感が違いました。',
    bgColor: 'bg-red-100',
  },
  {
    id: 2,
    title: '株式会社NOVASTO',
    imgUrl: 'https://images.unsplash.com/photo-1677269938489-f8208c778f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    text: 'ブランドイメージを「丁寧なヒアリング」と「デザインの力」で形に。後はSEOのご提案など集客面でのフォローにも大いに期待しています！',
    bgColor: 'bg-red-100',
  },
  {
    id: 3,
    title: '株式会社やまぼうし',
    imgUrl: 'https://images.unsplash.com/photo-1677193116069-55443e687f77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    text: 'WEBサイトにおけるデザインのクオリティアップからリスティング運用まで、プロフェッショナルの視点で的確なアドバイスとご提案を頂きました。',
    bgColor: 'bg-red-100',
  },
]

const Voice: FC = () => {
  return (
    <>
      <SectionBasic engTitle="customer voice" title="お客様の声" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {customers.map((customer) => (
          <Card key={customer.id} {...customer} />
        ))}
      </div>
    </>
  )
}

export default Voice
