import Link from "next/link"
import {BsFillTelephoneFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"

const Contact = () => {
  return (
    <section className="bg-neutral-200 pt-16 pb-24 text-center tracking-widest leading-relaxed font-sans font-light text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="uppercase relative w-60 mx-auto font-bold text-3xl before:absolute before:inline-block before:h-8 before:left-0 before:border-l-[3px] before:border-emerald-500 before:rotate-[-35deg] after:absolute after:inline-block after:h-8 after:right-0 after:border-r-[3px] after:border-emerald-500 after:rotate-[35deg]">
          contact us
        </h3>
        <p className="mb-12">お問い合わせはこちら</p>
        <p className="mb-12">
        お見積もりは無料です。
        <br/>
        EC・コーポレートサイト等Web制作、
        Webアプリ開発や動画撮影などお気軽にお問い合わせください。
        </p>

        <div className="mb-8">
          <p className="mb-2">お電話からのお問い合わせ</p>
            <a href="tel:09012345678" className="sm:pointer-events-none">
            <div className="py-4 bg-blue-50 hover:bg-blue-500 hover:text-white duration-300">
              <div className="flex justify-center items-center gap-4">
                <BsFillTelephoneFill className="w-8 h-8"/>
                <span className="text-2xl sm:text-3xl font-semibold">
                  090-1234-5678
                </span> 
              </div>
                <small>
                  対応時間/ 10：30〜19：00（土日祝休）
                </small>
            </div>
            </a>
        </div>
        <div>
          <p className="mb-2">フォームからのお問い合わせ</p>
          <Link href="/contact">
            <div className="py-4 bg-blue-50 hover:bg-blue-500 hover:text-white duration-300">
              <div className="flex justify-center items-center gap-4">
                <GrMail className="w-8 h-8"/>
                <span className="text-xl sm:text-2xl font-bold">
                  Webフォームはこちら
                </span>
              </div>
              <small>
                24時間受付・通常翌営業日までにご連絡
              </small>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact
