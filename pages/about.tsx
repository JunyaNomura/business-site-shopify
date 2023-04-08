import HeadSeo from '../components/HeadSeo'

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
      <main className="max-w-5xl mx-auto px-2 pt-24">
       This is about page
      </main>

    </>
  )
}
