import Head from 'next/head'
import Header from './components/Header'
import Faq from './components/Faq'
import Flow from './components/Flow'
import Footer from './components/Footer'
import Improvement from './components/Improvement'
import Reason from './components/Reason'
import Support from './components/Support'
import Voice from './components/Voice'
import SectionBasic from './subcomponents/SectionBasic'

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-5xl mx-auto px-2">
        <a href="https://n-works.link/shopify" className="flex items-center pl-2 text-2xl font-bold hover:underline" target="_blank">
          参考のウェブサイト 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
        <Reason />
        <Support />
        <Improvement />
        <Voice />
        <Faq />
        <Flow />
      </main>
      <Footer />
    </>
  )
}
