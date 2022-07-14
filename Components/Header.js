import React, { useState } from 'react'
import Image from 'next/image'
import AirBnbLogo from '../assets/Airbnb_Logo.png'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/router'

const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoofGuest] = useState(1)
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  const resetInput = () => {
    setSearchInput('')
  }
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const router = useRouter()
  const search = () => {
    router.push({
      pathname:"/search",
      query:{
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests:noOfGuests
      }
    })
  }
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-lg md:px-10">
      {/* left div */}
      <div
        onClick={() => router.push("/")}
        className="relative my-auto flex h-10 cursor-pointer items-center"
      >
        <Image
          src={AirBnbLogo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/*  middle div - search*/}
      <div className="flex items-center rounded-full py-2 text-sm text-gray-600 placeholder-gray-400 md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder ||"start your search"}
          className="flex-grow bg-transparent pl-5 outline-none"
        />
        <SearchIcon className=" hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>
      {/* right div */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline">Become a host </p>
        <GlobeAltIcon className="h-6" />
        <div className=" flex items-center rounded-full border-2 p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="col-span-3 mx-auto flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="item-center mb-4 flex border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoofGuest(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-red-400 outline-none"
            />
          </div>
          <div className="flex">
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
