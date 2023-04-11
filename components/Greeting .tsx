import Image from "next/image"
import Link from "next/link"
import profile from "../public/profile.jpg"
import { SiTwitter, SiInstagram } from "react-icons/si"
const Greeting  = () => {
  return (
    <div>
      <section className="relative mt-24 mb-16 mx-auto px-4 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
        <h3 className="uppercase relative w-60 mx-auto font-bold text-3xl before:absolute before:inline-block before:h-8 before:left-4 before:border-l-[3px] before:border-emerald-500 before:rotate-[-35deg] after:absolute after:inline-block after:h-8 after:right-4 after:border-r-[3px] after:border-emerald-500 after:rotate-[35deg]">
          Greeting
        </h3>
        <p className="mb-12">代表挨拶</p>
        <p className="mb-12">
        私たちはテクノロジーとエンターテインメントを組み合わせることで、
        <br/>
        ユーザーに全く新しい体験をもたらすことを目指すクリエイターが集まった会社です。
        <br/>
        Webを中心にしながらも、3D・Web3・ドローン撮影・VFX合成といった新しい技術に、
        <br/>
        積極的にチャレンジしていきます。
        </p>

        {/* card */}
        <div className="bg-emerald-50 w-80 sm:w-[560px] mx-auto py-6">
          <Image src={profile} alt="Company's representative photo" width={500} height={500} className="object-cover w-52 h-52 mx-auto rounded-full brightness-[1.1] saturate-[1.30]"/>
          {/* name */}
          <p className="capitalize py-3">
            asuka seki
            <small className="block text-neutral-500">代表</small>
          </p>
          {/* description */}
          <div className="w-60 sm:w-96 mx-auto">
            <p>
              フロントエンドエンジニア / 
              <br/>
              フォトグラファー。
            </p>
            <p className="mt-3">
              エンジニアとしてはWebアプリケーションやWebサイトなどの個人開発をしつつ、
              <br/>
              フォトグラファーとしてもアーティスト写真やライブ写真など人物・商業撮影を中心に活動。
            </p>
            <p className="mt-3">
              写真を通して培ったクリエイティブな発想と、
              <br/>
              最新のトレンドを押さえたWeb開発技術を組み合わせ、
              <br/>
              お客様の希望に沿う洗練されたサービスを提供する。 
            </p>
            {/* sns */}
            <div className="mt-6 flex gap-4">
              <Link href="#">
                <SiTwitter className="w-6 h-6 hover:text-gray-400 duration-300"/>
              </Link>
              <Link href="#">
                <SiInstagram className="w-6 h-6 hover:text-gray-400 duration-300"/>                    
              </Link>
            </div>
          </div>
        </div>
    </section>
    </div>
  )
}

export default Greeting 
