import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../Components/InfoCard'
import Map from '../Components/Map'
const Search = ({ searchResults }) => {
  const router = useRouter()
  // es6 destructuring
  const { location, endDate, startDate, noOfGuests } = router.query
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formattedStartDate} - ${formattedEndDate}`
  return (
    <div>
      <Header placeholder={`${location}| ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ stay {range} for {noOfGuests} number of guest
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stay in {location}
          </h1>
          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="transfrom cursor-pointer rounded-full border px-4 py-2 transition duration-100 ease-out hover:shadow-lg active:scale-95 active:bg-gray-100">
              Cancellation Flexibility
            </p>
            <p className="transfrom cursor-pointer rounded-full border px-4 py-2 transition duration-100 ease-out hover:shadow-lg active:scale-95 active:bg-gray-100">
              Type of place
            </p>
            <p className="transfrom cursor-pointer rounded-full border px-4 py-2 transition duration-100 ease-out hover:shadow-lg active:scale-95 active:bg-gray-100">
              Price
            </p>
            <p className="transfrom cursor-pointer rounded-full border px-4 py-2 transition duration-100 ease-out hover:shadow-lg active:scale-95 active:bg-gray-100">
              Rooms and Beds
            </p>
            <p className="transfrom cursor-pointer rounded-full border px-4 py-2 transition duration-100 ease-out hover:shadow-lg active:scale-95 active:bg-gray-100">
              More Filters
            </p>
          </div>
          {searchResults.map((item) => (
            <InfoCard
            key={item.img}
              img={item.img}
              location={item.location}
              title={item.title}
              discription={item.discription}
              price={item.price}
              total={item.total}
              star={item.star}
            />
          ))}
        </section>
        <section className='hidden lg:inline-flex lg:min-w-[600px]'>
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('http://links.papareact.com/isz').then(
    (res) => res.json()
  )
  return {
    props: {
      searchResults: searchResults,
    },
  }
}
