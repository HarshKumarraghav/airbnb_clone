import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
const InfoCard = ({
  img,
  location,
  title,
  discription,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex transform cursor-pointer border-b py-7 px-2 pr-4 transition duration-200 ease-out hover:opacity-80 hover:shadow-lg first:border-t ">
      <div className="relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80">
        <Image src={img} layout="fill" objectFit="cover" className='rounded-2xl'/>
      </div>
      <div className="flex flex-grow flex-col pl-5">
        <div className="flex justify-between">
          <p className='text-sm font-extralight'>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="w-10 border-b pt-2" />
        <p className="flex-grow pt-2 text-sm text-gray-500">{discription}</p>
        <div className="">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
