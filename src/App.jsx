import React from "react";
import Loading from "./components/Home";
import gsap from "gsap";
import react, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from "@gsap/react";
import Home from "./components/Home";
import Blank from "./components/Blank";
import MenuOne from "./components/MenuOne";
import MenuTwo from "./components/MenuTwo";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
      multiplier: 1,
      lerp: 3
    });

    return () => {
      scroll.destroy(); 
    };
  }, []);


  useGSAP(() => {
    gsap.to(".white", {
      delay: 0.3,
      opacity: 0,
      duration: 0.5,
      stagger: { amount: 1, from: "center" },
      ease: "expo.inOut",
    });
  });



  return (
    <div className="h-screen w-screen">
      <div
        className="fixed inset-0 h-full w-full flex z-[9999] pointer-events-none"
      >
        <div className="h-full  w-full ">
          <div className="white h-[10%] w-full bg-[#3E2410]"></div>
          <div className="white h-[10%] w-full bg-[#533116]"></div>
          <div className="white h-[10%] w-full bg-[#663E20]"></div>
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
          <div className="white h-[10%] w-full bg-[#99633B]"></div>
          <div className="white h-[10%] w-full bg-[#99633B]"></div>
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
          <div className="white h-[10%] w-full bg-[#663E20]"></div>
          <div className="white h-[10%] w-full bg-[#533116]"></div>
          <div className="white h-[10%] w-full bg-[#3E2410]"></div>
        </div>
      </div>
      <Home />
      <Blank />
      <MenuOne />
      <MenuTwo/>
      <About/>
      <Footer/>
    </div>
  );
};

export default App;
