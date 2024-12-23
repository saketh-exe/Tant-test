import React from "react";
import EventCard from "./Eventcard";
export default function Featured() {
  return (
    <div className="font-semibold text-center text-white text-5xl sm:text-5xl md:text-5xl lg:text-5xl w-11/12 sm:w-3/4 mx-auto my-10 mb-34 bg-slate-50 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-lg p-6">
      Featured
      <div className="flex flex-col sm:flex-row justify-evenly align-middle gap-4 m-6 sm:m-12 md:m-24zz">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
