import React from 'react'
import Image from 'next/image'
import BannerImage from '../assets/BannerImage.jpeg'
const Banner = () => {
  return (
    <div className="2xl:[700px] relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image src={BannerImage} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">
          Settle in somewhere new. Discover live, work or just relax.
        </p>
        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md hover:shadow-xl active:scale-90 ">
          I'm Flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
