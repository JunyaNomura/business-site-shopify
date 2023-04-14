import Contact from '@/components/Contact'
import ServiceDescription from '@/components/ServiceDescription'
import Services from '@/components/Services'
import HeadSeo from '../components/HeadSeo'

export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's EC Page"}
        description={"EC page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
          This is about EC service page
          <ServiceDescription />
          <Services />
        </div>
        <Contact />
      </main>

    </>
  )
}
