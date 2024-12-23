import React from "react";
import EventCard from "./Eventcard";
export default function Featured() {
  return (
    <div className="font-semibold text-center text-white text-5xl sm:text-5xl md:text-5xl lg:text-5xl w-11/12 sm:w-3/4 mx-auto my-10 mb-34 bg-slate-50 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-lg p-6">
      Featured
      <div className="hidden sm:hidden md:hidden lg:flex justify-end mr-6 sm:mr-12 md:mr-24zz">
        <p className="font-light text-xs mt-3 underline">Browse more</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly align-middle gap-6 m-6 sm:m-12 md:m-24zz items-center">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
