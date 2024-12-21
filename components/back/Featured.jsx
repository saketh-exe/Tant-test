import React from 'react'
import EventCard from './Eventcard'
export default function Featured() {
  return (
    <div className="text-center text-white text-7xl w-3/4 mx-auto my-10 mb-48 bg-slate-50 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-lg p-6">
        Featured 
        <div className='flex justify-evenly align-middle gap-4 m-24'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        </div>
      </div>
  )
}
