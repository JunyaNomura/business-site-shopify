import { FC } from 'react';
import { CardInfo } from '@/types/types';
import Card from '../subcomponents/Card';
import SectionBasic from '../subcomponents/SectionBasic';

const supportItems: CardInfo[] = [
  {
    id: 1,
    title: 'ページ追加・作成',
    text: 'ストアの一般設定、通知設定、請求情報などの情報更新を代行。ストア運営で発生する細かな業務をまるごと代行します。',
    bgColor: 'bg-teal-300',
  },
  {
    id: 2,
    title: 'デザイン修正・調整',
    text: '制作済みページのデザイン修正・調整作業を行います。ストア更新でデザイン崩れが発生しても安心です。',
    bgColor: 'bg-teal-300',
  },
  {
    id: 3,
    title: '商品登録の代行',
    text: '商品追加のたびに発生する、面倒な商品登録業務を代行。商品名の登録からSEO設定までトータルで対応しております。',
    bgColor: 'bg-teal-300',
  },
  {
    id: 4,
    title: 'チャット・Zoomでの運用サポート',
    text: 'ストア運営で発生する疑問点にShopifyに明るいエンジニアがご回答。Zoomでの定期サポートも可能です。',
    bgColor: 'bg-teal-300',
  }
]
const Support: FC = () => {
  return (
    <>
      <SectionBasic engTitle="support" title="ストア開設後も安心のサポート" text="Shopify運用サポートプランをご用意。ストア開設後の運用・保守までトータルでサポートします" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {supportItems.map((supportItem) => (
          <Card key={supportItem.id} {...supportItem} />
        ))}
      </div>
    </>
  )
}

export default Support
