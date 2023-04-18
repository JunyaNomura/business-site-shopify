import ContactHero from '@/components/ContactHero'
import Services from '@/components/Services'
import HeadSeo from '../components/HeadSeo'

export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's Contact Page"}
        description={"Contact page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main className="max-w-5xl mx-auto px-2 pt-24">
       <ContactHero />
       <Services />
      </main>

    </>
  )
}
