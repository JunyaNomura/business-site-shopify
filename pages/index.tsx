import Hero from '../components/Hero'
import Services from '../components/Services'
import Contact from '../components/Contact'
import HeadSeo from '../components/HeadSeo'
// import Faq from '../components/Faq'
// import Flow from '../components/Flow'
// import Improvement from '../components/Improvement'
// import Reason from '../components/Reason'
// import Support from '../components/Support'
// import Voice from '../components/Voice'



export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's Top Page"}
        description={"Top page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"website"}
      />
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
          <Hero />
          <Services />
          {/* <Reason />
          <Support />
          <Improvement />
          <Voice />
          <Faq />
        <Flow /> */}
        </div>
        <Contact />
      </main>
 
    </>
  )
}
