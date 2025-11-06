import gsap from "gsap";
import react, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaInstagram } from "react-icons/fa";


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
    <div className='h-[40vh] md:h-[50vh] lg:h-[80vh] flex flex-col items-center bg-[#784b29]' >
        <div className="maintext text-[#f2e5bc] xl:pt-24 lg:pt-20 md:pt-40 pt-20 font-[one] ">
          <div className="lhr text-[5vw] lg:text-[5vw] lg:-mb-7 pl-0 ">LAHORE</div>
          <div className="flex justify-center gap-2 lg:gap-6 items-center">

          <div className="text-[10vw] lg:text-[10vw] ">CHAPTER</div>


          <div className="flex justify-center items-center">
            <img
              className="md:w-[8vw] w-[10vw] md:h-[11vw] lg:h-[10vw] h-[6vh] bean -mr-1 text-[#fff]"
              src="/images/bean.png"
                
              alt=""
              />
            <div className="text-[10vw] lg:text-[10vw]"> NE</div>
           
              </div>
              
          </div>
           
        </div>
        <div className="flex justify-center items-center border-b-1  border-amber-100 w-[90vw]"></div>
        <div className=" w-[90vw] font-[two] text-[4vw] lg:text-[2vw] ">
          <ul className="flex justify-evenly mt-5 flex-wrap lg:p-0 p-2 text-[#f2e5bc] items-center ">
 <a
          href="https://www.instagram.com/chapterone_lhr/"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase lg:mb-0 mb-2"
          style={{ zIndex: 1, position: "relative", pointerEvents: "auto" }}
        ><div className="flex justify-center items-center gap-1">
          <FaInstagram />
          <div>IG</div> 
        </div>
        </a>
           <a
          href="https://maps.app.goo.gl/Bno2QXkkedsYawqC8?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase lg:mb-0 mb-2"
          style={{ zIndex: 1, position: "relative", pointerEvents: "auto" }}
        >
          Sector A, Phase 5, D.H.A, Lahore
        </a>
             <a
          href="tel:+923290021164"
          className="uppercase"
          style={{ zIndex: 1, position: "relative", pointerEvents: "auto" }}
        >
          +92 329 0021164
        </a>
     <div className="group relative inline-block overflow-hidden h-[1.5em]">
 
  <span
    className="block transform transition-all duration-500 group-hover:-translate-y-full"
  >
    CREDIT
  </span>

  {/* Hover text */}
  <a
    href="https://www.linkedin.com/in/abdullah-farooq1/"
    target="_blank"
    rel="noopener noreferrer"
    className="block absolute left-0 top-full transform transition-all duration-500 group-hover:top-0 text-[#f2e5bc] "
    style={{ zIndex: 1, position: "absolute", pointerEvents: "auto" }}
  >
    A8dullah
  </a>
</div>
          </ul>
        
        </div>
    </div>
  )
}

export default  Footer