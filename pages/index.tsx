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
      <main className="max-w-5xl mx-auto px-2">
        <Header />
        <Reason />
        <Support />
        <Improvement />
        <Voice />
        <Faq />
        <Flow />
        <Footer />
      </main>
    </>
  )
}
