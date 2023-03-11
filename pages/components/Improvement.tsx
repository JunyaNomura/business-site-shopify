import { CardInfo } from '@/types/types';
import { FC } from 'react'
import Card from '../subcomponents/Card';
import SectionBasic from '../subcomponents/SectionBasic';


const improvementItems: CardInfo[] = [
  {
    id: 1,
    title: 'ストア流入改善',
    text: 'ストア来訪者の特徴、来訪者数、流入経路・キーワードを分析。ストアのメインターゲットからの来訪を増やす施策を実行します。',
    subItems: ['リスティング広告運用', 'SNS広告運用', 'SEO改善'],
    bgColor: 'bg-blue-300',
  },
  {
    id: 2,
    title: 'ストア回遊改善',
    text: '目当ての商品ページには到達しやすいか、ストアは買い物がしやすいのかをユーザー行動データを元に分析。買い物しやすいサイトに改善していきます。',
    subItems: ['ヒートマップ分析', '商品ページ改善', 'サイト構成変更'],
    bgColor: 'bg-blue-300',
  },
  {
    id: 3,
    title: '決済フロー改善',
    text: '購買者はストアのどこを見ているのか、カゴ落ちはどこで発生しているのかを分析。商品閲覧〜購買までの流れをスムーズにします。',
    subItems: ['サイトアクセス解析', 'サイト速度改善', '新規決済手段の導入'],
    bgColor: 'bg-blue-300',
  },
];

const Improvement: FC = () => {
  return (
    <>
      <SectionBasic engTitle="improvements" title="サイトの売上改善にも貢献" text="大手広告代理店出身者によるサイトコンサルティングプランをご用意。開設ストアの売上改善までご支援します" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {improvementItems.map((improvementItem) => (
          <Card key={improvementItem.id} {...improvementItem} />
        ))}
      </div>
    </>
  )
}

export default Improvement
