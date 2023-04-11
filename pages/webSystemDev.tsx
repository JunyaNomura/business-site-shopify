import HeadSeo from '../components/HeadSeo'
import Services from '@/components/Services'
import Contact from '../components/Contact'

export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's WebsystemDev Page"}
        description={"WebsystemDev page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
          This is WebsystemDev page
          <Services />
        </div>
        <Contact />
      </main>


    </>
  )
}
