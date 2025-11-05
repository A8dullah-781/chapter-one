import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const MenuOne = () => {
  const boldoneRef = useRef();
  const sectionRef = useRef();
  const imagesRef = useRef([]);

gsap.registerPlugin(ScrollTrigger);



useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 10%",
      end: "+=2000",
      scrub: 2,
      pin: true,
       anticipatePin: 1,
      markers: true,
    },
  });

  gsap.set(imagesRef.current, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "1.5rem",
  });

  // first image visible static
  gsap.set(imagesRef.current[0], { scale: 1, opacity: 1, zIndex: 3 });

  // baki pre-scaled and hidden
  gsap.set(imagesRef.current.slice(1), { scale: 1.5, opacity: 0, zIndex: 2 });

  // second image transition
  tl.to(imagesRef.current[1], {
    scale: 1,
    opacity: 1,
    duration: 2,
    ease: "power2.out",
  }).to(
    imagesRef.current[0],
    {
      y: "-150%",
      scale: 1.2,
      duration: 1,
      ease: "power2.inOut",
    },
    "<"
  );


});



  
  
  return (
    <div className=" h-auto justify-center flex items-center bg-[#533116]">
      <div className="bg-[#9b663a] pb-5 h-auto flex mt-10 sm:mt-0 rounded-4xl w-[90%]">
        <div className="lg:w-1/2 w-full h-auto rounded-4xl  text-[#f2e5bc] ">

        <div className="title items-center flex flex-col">
          <div className="font-[one] text-[8vw] sm:text-[5.5vw] px-5 pt-5">COLD BREWS</div>
        <div className="font-[two2] text-[2.5vw] mb-2 sm:mb-0 sm:text-[1.5vw] border-b-1 pb-1 sm:pb-5 ">Served hot, on ice, and blended -- Just let your barista know</div>
        </div>
        <div className="allitems">

        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
        <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between border-b-1 pb-5 ">
            <div className="sm:text-[1.2vw] text-[1.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="text-[2.5vw] font-[one]">RS - 450/-</div>
          </div>
        </div>
  

        </div>
        </div>
       
           <div className="w-1/2 hidden lg:block h-full rounded-4xl relative">
      <div
        ref={sectionRef} 
        className="rounded-4xl w-[90%] m-8 overflow-hidden  relative h-[80vh]"
      >
        {["/images/boldone.jpeg", "/images/boldtwo.jpeg"].map(
          (src, i) => (
            <img
              key={i}
              ref={(el) => (imagesRef.current[i] = el)}
              src={src}
              className="w-full h-full object-contain absolute top-0 left-0"
            />
          )
        )}
      </div>
    </div>
      </div>
    </div>
  );
};

export default MenuOne;
