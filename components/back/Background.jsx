import React, { useState } from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import Body from "./Body";
import Nav from "./Nav";
import {BackgroundBeams} from "../ui/BackgroundBeams";
export function Background() {
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

  // Function to handle scroll and update the state
  const handleScroll = (scrollTop) => {
    setIsScrolled(scrollTop > 0); // Set `isScrolled` based on scrollTop
  };

  return (
    <BackgroundGradientAnimation interactive={false}>
      <div className="w-full h-screen fixed top-0 z-10 left-0  overflow-hidden">
        <Nav isScrolled={isScrolled} /> {/* Pass the `isScrolled` state to Navbar */}
        <Body onScroll={handleScroll} /> {/* Pass the `handleScroll` callback to Body */}
      </div>
      <BackgroundBeams/>
    </BackgroundGradientAnimation>
  );
}
