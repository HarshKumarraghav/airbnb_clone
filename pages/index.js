import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import SmallCard from '../Components/SmallCard'
import MediumCard from '../Components/MediumCard'
import LargeCard from '../Components/LargeCard'
import LargeBanner from '../assets/LargeBanner.jpeg'
import Footer from '../Components/Footer'
const Home =({ exploreData, cardData }) => {
  return (
    <div>
      <Head>
        <title>AirBnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header placeholder={undefined} />
      {/* banner */}
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          {/* Pull some data form server or api call in easy word */}
          <div className="xl:grid-flow-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {exploreData.map((item) => (
              <SmallCard
                img={item.img}
                key={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll p-3 scrollbar-hide">
            {cardData.map((item) => (
              <MediumCard img={item.img} title={item.title} key={item.img} />
            ))}
          </div>
        </section>
        <LargeCard
          img={LargeBanner}
          title="The Greatest Outdoor"
          discription="wishlists curated by airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  )
}

export default Home
export const getStaticProps = async () => {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )
  const cardData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )
  return {
    props: {
      exploreData,
      cardData,
    },
  }
}
