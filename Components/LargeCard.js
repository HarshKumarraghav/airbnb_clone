import React from 'react'
import Image from 'next/image'
const LargeCard = ({ img, title, discription, buttonText }) => {
  return (
    <section className="relative cursor-pointer py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12 ">
        <h3 className="mb-3 w-64 text-4xl text-white">{title}</h3>
        <p className="text-white"> {discription} </p>
        <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
      </div>
    </section>
  )
}

export default LargeCard
