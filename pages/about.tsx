import HeadSeo from '../components/HeadSeo'
import AboutHero from '../components/AboutHero'
import Contact from '../components/Contact'

export default function Home() {

  return (
    <>
      <HeadSeo 
        title={"Company's About Page"}
        description={"About page's description"}
        url={""}
        ogImageUrl={""}
        ogTwitterImage={"image src"}
        ogType={"article"}
      />   
      <main>
        <div className="max-w-5xl mx-auto px-2 pt-24">
          <AboutHero />
          This is about page
        </div>
        <Contact />
      </main>

      

    </>
  )
}
