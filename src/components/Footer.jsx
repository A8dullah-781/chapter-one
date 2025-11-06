import gsap from "gsap";
import react, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const  Footer = () => {

    useGSAP(()=>{
        gsap.to(".lhr", {
      rotate: -4,
      duration: 1.5,
      delay: 1.5,
    });
    gsap.to(".one", {
      xPercent: 27,
      duration: 1.5,
      delay: 1.5,
    });
    gsap.to(".bean", {
      rotate: -180,
      duration: 1.5,
      delay: 1.5,
    });
    })
  return (
    <div className='h-[80vh] bg-[#784b29]' >
        <div className="maintext text-[#f2e5bc]  pt-20 font-[one] ">
          <div className="lhr text-[6vw] lg:text-[5vw] -mb-7 pl-40 ">LAHORE</div>
          <div className="flex justify-center  gap-6 items-center">

          <div className="text-[12vw] lg:text-[10vw] ">CHAPTER</div>


          <div className="flex justify-center items-center">
            <img
              className="md:w-[8vw] w-[10vw] md:h-[11vw] lg:h-[10vw] h-[6vh] bean -mr-1 text-[#fff]"
              src="/images/bean.png"
                style={{
    filter: "invert(85%) sepia(18%) saturate(480%) hue-rotate(2deg) brightness(92%) contrast(90%)"
  }}
              alt=""
              />
            <div className="text-[12vw] lg:text-[10vw]"> NE</div>
           
              </div>
              
          </div>
           <div className="flex justify-center items-center border-b-1  border-amber-100 w-[100vw]"></div>
        </div>
    </div>
  )
}

export default  Footer