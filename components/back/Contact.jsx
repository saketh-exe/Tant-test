import React from "react";
import PinDemo from "./PinDemo";
export default function Contact() {
  return (
    <div className="font-semibold text-center text-white text-3xl sm:text-4xl md:text-5xl w-full sm:w-3/4 mx-auto my-10 mb-24 bg-slate-50 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-lg p-6">
      Contact us
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 my-10">
        {/* Address Section */}
        <div className="w-full md:w-1/3 text-left lg:block flex gap-5 justify-center">
          <div className="mb-4">
            <h4 className="text-lg sm:text-xl">Address</h4>
            <p className="text-justify font-normal text-sm sm:text-base">
              337/1 A, Vallal RCK Nagar, SH 50A, <br />
              Vengal, Tamil Nadu 601103
            </p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl">Phone</h4>
            <p className="font-normal text-sm sm:text-base">+91 1234567890</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="lg:w-auto w-full flex flex-col justify-center lg:block">
          <PinDemo />
        </div>
      </div>
    </div>
  );
}
