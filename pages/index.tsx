import IndexHero from '../components/IndexHero'
import Services from '../components/Services'
import Contact from '../components/Contact'
import HeadSeo from '../components/HeadSeo'


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
          <IndexHero />
          <Services />
        </div>
        <Contact />
      </main>
 
    </>
  )
}
