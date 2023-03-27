import { FC } from 'react';
import { CardInfo } from '@/types/types';

import Card from './subcomponents/Card';
import SectionBasic from './subcomponents/SectionBasic';


const reasons: CardInfo[] = [
  {
    id: 1,
    title: '世界シェアNo.1',
    text: 'Shopifyは世界175ヶ国のショップで利用されています。流通総額は数百万以上、4,500億ドルを超えており、利用企業にはレッドブル、Allbirds、テスラといった世界的企業も含まれています。',
    // bgColor: 'bg-purple-300',
  },
  {
    id: 2,
    title: 'デザイン性が高い',
    text: '70種類以上のハイクオリティなデザインテーマからECサイト構築が可能。HTML、CSSのカスタマイズも柔軟にできるためオリジナリティを出すことも可能です。',
    // bgColor: 'bg-purple-300',
  },
  {
    id: 3,
    title: '集客に強い',
    text: 'ShopifyはSEO対策に優れた設計になっており、対策用のアプリも充実しています。また、FacebookやInstagramなどのSNS上での商品販売にも対応しているため、様々なチャネルからの集客が可能です。',
    // bgColor: 'bg-purple-300',
  },
  {
    id: 4,
    title: '機能拡張・カスタマイズ性が高い',
    text: 'Shopifyには8,000種類以上の専用アプリがあるため、機能拡張・カスタマイズを簡単に行なえます。また、会計ソフトやMAツールとのAPI連携も充実しているため、理想のECサイトを簡単に構築できます。',
    // bgColor: 'bg-purple-300',
  },
  {
    id: 5,
    title: 'クラウド型 (SaaS型) サービスなので更新作業が不要',
    text: 'Shopifyはクラウド型サービスのため、ソフトのアップデートが自動で行われます。システムを中断しての都度更新をせずに、いつでも最新のShopifyを利用できます',
    // bgColor: 'bg-purple-300',
  },
  {
    id: 6,
    title: '世界シェアNo.1',
    text: 'Shopifyは世界175ヶ国のショップで利用されています。流通総額は数百万以上、4,500億ドルを超えており、利用企業にはレッドブル、Allbirds、テスラといった世界的企業も含まれています。',
    // bgColor: 'bg-purple-300',
  },
  {
    id: 7,
    title: 'コストが低い',
    text: 'Shopifyは月額29ドル〜の定額で利用可能。初期費用もないため、他社ECサイトと比較して、安価でサイト運営が可能です。',
    // bgColor: 'bg-purple-300',
  },
  {
    id: 8,
    title: '分岐機能が豊富',
    text: 'サイト上で売れている商品、売れていない商品をレポートで簡単に分析。Googleアナリティクスと連携できるため、サイト内の様々な行動データも取得できます。',
    // bgColor: 'bg-purple-300',
  },
  {
    id: 9,
    title: '在庫管理・配送面の対応にも優れている',
    text: '在庫管理をPCだけでなくスマホからも行えるため、スピーディな対応が可能。また、日本郵便、ヤマト運輸、佐川急便と提携。配送面も安心です。',
    // bgColor: 'bg-purple-300',
  },
];

const Reason: FC = () => {

  return (
    <>
      <SectionBasic engTitle="Reasons" title="ECサイトをShopifyで構築すべき理由" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {reasons.map((reason) => (
          <Card key={reason.id} {...reason} bgColor="bg-yellow-100" /> 
        ))}
      </div>
    </>
  )
}

export default Reason;
