import AllServices from '@/components/AllServices'
import ServiceHero from '@/components/ServiceHero'
import Solutions from '@/components/Solutions'
import HeadSeo from '../components/HeadSeo'
export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's Service Page"}
        description={"Service page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main className="max-w-5xl mx-auto px-2 pt-24">
       <ServiceHero />
       <AllServices />
       <Solutions />
      </main>
    </>
  )
}
