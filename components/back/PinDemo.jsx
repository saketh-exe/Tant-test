import React from "react";
import { PinContainer } from "../ui/Pin";
import im from "./image.png";
export default function PinDemo() {
  return (
    <div className="h-auto w-full flex items-center justify-center">
      <PinContainer
        title="Amrita Chennai"
        href="https://maps.app.goo.gl/KSXseiWPrpSjqXRVA"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
            Amrita Vishwa Vidyapeetham
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">Chennai Campus</span>
          </div>

          <img src={im} alt="image"></img>
        </div>
      </PinContainer>
    </div>
  );
}
