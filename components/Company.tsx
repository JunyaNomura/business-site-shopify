

const Company = () => {
  return (
    <div>
      <section className="relative mt-24 mb-16 mx-auto px-4 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
        <h3 className="uppercase relative w-60 mx-auto font-bold text-3xl before:absolute before:inline-block before:h-8 before:left-4 before:border-l-[3px] before:border-emerald-500 before:rotate-[-35deg] after:absolute after:inline-block after:h-8 after:right-4 after:border-r-[3px] after:border-emerald-500 after:rotate-[35deg]">
          company
        </h3>
        <p className="mb-12">会社概要</p>
        <div className="mb-8">
          <p className="font-semibold mb-2">会社名</p>
          <p> My Company</p>
        </div>
        <div className="mb-8">
          <p className="font-semibold mb-2">設立</p>
          <p> 2023年4月</p>
        </div>
        <div className="mb-8">
          <p className="font-semibold mb-2">代表</p>
          <p>関 愛朱歌</p>
        </div>
        <div className="mb-8">
          <p className="font-semibold mb-2">所在地</p>
          <p>
            〒106-0047
            <br/>
            東京都港区南麻布
          </p>
        </div>
        <div className="mb-8">
          <p className="font-semibold mb-2">連絡先</p>
          <p>
            090-1234-5678
            <br/>
            またはWebフォーム
          </p>
        </div>
        <div className="mb-8">
          <p className="font-semibold mb-2">営業時間</p>
          <p>
            月〜金 / 10:30 ~ 19:30
            <br/>
            (土日祝休、他不定休あり)
          </p>
        </div>
        <div className="mb-8">
          <p className="font-semibold mb-4">事業内容</p>
          <div className="flex flex-col gap-4">
            <p>
              ホームページ・webサイトの企画 / デザイン / 制作 / コーディング / マルチデバイス・スマートフォンサイト制作 / ECサイト制作 / フロントエンド・アニメーション / サーバー設定 / その他Web制作の一切
            </p>
            <p>
              Webプロモーション・ビジネスコンサルティング・マーケティング・メンテナンス
            </p>
            <p>
              CMS（コンテンツマネジメントシステム）構築
            </p>
            <p>
              業務効率化ツール / その他Webプログラムの開発・構築・設置
            </p>
            <p>
              SEO対策 / サイト運営サポート・コンサル
            </p>
            <p>
              写真撮影・レタッチ・画像加工処理
            </p>
            <p>
              動画撮影・ドローン空撮 / VIDEO・音声などのデータ編集・最適化
            </p>
            <p>
              印刷物の企画・デザイン制作
            </p>
            <p>
              商品の３D化 / ３DをつかったWebサイト等の３D開発
            </p>
            <p>
              イラストレーションやロゴのデザイン・制作 / 
              Webサイトや各種デザイン関連業務の一切
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Company
