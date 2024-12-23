import React from "react";
import PinDemo from "./PinDemo";
export default function Contact() {
  return (
    <div className="font-semibold text-center text-white text-5xl w-3/4 mx-auto my-10 mb-48 bg-slate-50 bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-lg p-6">
      Contact us
      <div className="flex justify-evenly align-middle gap-4 m-24 text-3xl">
        <div>
          <h4 className="text-left">Address</h4>
          <p className="text-left">123, ABC Street, XYZ City</p>
          <PinDemo />
        </div>
        <div>
          <h4 className="text-left">Phone</h4>
          <p className="text-left">+91 1234567890</p>
        </div>
      </div>
    </div>
  );
}
