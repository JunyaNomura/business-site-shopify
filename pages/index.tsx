import Head from 'next/head'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Faq from '../components/Faq'
import Flow from '../components/Flow'
import Improvement from '../components/Improvement'
import Reason from '../components/Reason'
import Support from '../components/Support'
import Voice from '../components/Voice'

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className="max-w-5xl mx-auto px-2 pt-24">
        <Hero />
        <Services />
        <Reason />
        <Support />
        <Improvement />
        <Voice />
        <Faq />
        <Flow />
      </main>

    </>
  )
}
