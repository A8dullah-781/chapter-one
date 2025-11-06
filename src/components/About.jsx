import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const About = () => {
    const layerRef = useRef();
      const layerReff = useRef();
      const waveRef = useRef()

      useGSAP(()=>{
        gsap.to("#wavePath", {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      attr: {
        d:  "M0 70 Q 150 20 300 60 T 600 55 T 900 65 T 1200 45 V120 H0 Z",
      },
    });

gsap.fromTo(
  layerRef.current,
  { y: "100%"},
  {
    y: "5%",
    opacity: 1,
ease: "bounce.out",
    scrollTrigger: {
      trigger: layerRef.current,
      start: "top 90%", 
      scrub: true,
    },
  }
);
      })
  return (
    <div>
       <div className='h-auto lg:h-screen relative w-screen  z-10 flex md:flex-row flex-col  mt-25 '>
        <div className='lg:h-full relative flex justify-center items-center   lg:w-1/2'>
        <div className='bg-red-400 lg:h-[70%] overflow-hidden rounded-4xl lg:w-[70%] w-[85%]'>
            <img className='object-contain' src="/images/mainout.jpeg" alt="" />
        </div>
        </div>
        <div className='lg:h-full  gap-10  lg:w-1/2'>
        <div className='items-center font-[one] lg:text-[5vw] text-[8vw] -rotate-6 text-[#533116] px-5 flex'>
         <p className='border-[5px]  px-5 rounded-3xl mt-8'>About</p>
        </div>
        <div className='flex items-start mt-8 lg:mt-15 lg:pl-5 pl-10 pr-15 gap-3 justify-center flex-col'>
        <div className='font-[two] text-[6vw] lg:text-[2vw] text-[#663E20]'>We are more than a Coffe :)</div>
        <div className='font-[two2] pb-8 lg:pb-0  leading-none whitespace-none text-[3.5vw] lg:text-[1.5vw] text-[#533116]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus sequi similique dolorum consectetur ad eligendi pariatur itaque. Quas beatae sunt blanditiis, unde cumque in voluptatibus dolorem laudantium mollitia excepturi officiis quis perferendis non aliquid eveniet architecto incidunt obcaecati officia quod! Quasi repellat harum velit sed blanditiis delectus. Consequuntur doloremque facilis distinctio totam? Beatae magni, sapiente id enim quia voluptatemnam corrupti velit itaque autem numquam illo iusto dolores, ad blanditiis neque ipsum asperiores animi voluptate sunt.r nostrum eum impedit nam corrupti velit itaque autem numquam illo iusto dolores, ad blanditiis neque ipsum asperiores animi voluptate sunt.</div>
     
        </div>
        </div>
       </div>
        <div className="absolute w-full  z-0 rotate-180">
       <svg
          ref={layerRef}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute lehar bottom-0 left-0 w-full sm:h-[37vh] md:h-[25vh] h-[10vh] "
        >
          <path
            id="wavePath"
            ref={waveRef}
            d="M0 60 Q 150 40 300 60 T 600 60 T 900 60 T 1200 60 V120 H0 Z"
            fill="#fff"
          />
        </svg>
       
     </div>
    </div>
  )
}

export default About