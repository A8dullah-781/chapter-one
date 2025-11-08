import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/all'
import { useEffect, useState } from "react";
import axios from "axios";
import { coldBrew } from "../../constants/constants";


 

const MenuOne = () => {


  //  const [coffees, setCoffees] = useState([]);


  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1337/api/chapter-ones")
  //     .then(res => {
  //       console.log("Full API response:", res);
  //       console.log("Response data only:", res.data);
  //       console.log("Actual products array:", res.data.data);
  //       setCoffees(res.data.data);
  //     })
  //     .catch(err => console.error("Error:", err));
  // }, []);



  const boldoneRef = useRef();
  const sectionRef = useRef();
  const imagesRef = useRef([]);

   const layerRef = useRef();
    const layerReff = useRef();
    const waveRef = useRef()
  

gsap.registerPlugin(ScrollTrigger);



useGSAP(() => {

  const titleSplit = new SplitText('.title', {
            type:'chars, words'
        })

gsap.from(titleSplit.chars, {
  yPercent: 15, // thoda niche se aayein, jyada jump nahi
  opacity: 0,   // halka fade-in effect
  duration: 0.8,
  ease: "power2.out", // smooth aur natural ease
  stagger: {
    amount: 0.3, // thoda spread feel
    from: "start" // left to right reveal
  },
  scrollTrigger: {
    trigger: ".start",
    start: "top 85%",
    toggleActions: "restart none none restart"
,
    invalidateOnRefresh: true,
  },
});





   gsap.to("#wavePath1", {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      attr: {
        d:  "M0 70 Q 150 20 300 60 T 600 55 T 900 65 T 1200 45 V120 H0 Z",
      },
    });
   gsap.to("#wavePath2", {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      attr: {
        d:  "M0 70 Q 150 20 300 60 T 600 55 T 900 65 T 1200 45 V120 H0 Z",
      },
    });


  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 10%",
      end: "+=2000",
      scrub: 2,
      pin: true,
       anticipatePin: 1,
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
  gsap.set(imagesRef.current[1], { scale: 1.5, opacity: 1, zIndex: 2 });
  gsap.set(imagesRef.current[2], { scale: 1.8, opacity: 1, zIndex: 1});

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
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
    },
    "<"
  );

  tl.to(imagesRef.current[2], {
    scale: 1,
    opacity: 1,
    duration: 2,
    ease: "power2.out",
  }).to(
    imagesRef.current[1],
    {
      y: "-150%", // second image bhi slide out
      scale: 1.2,
      duration: 1,
      ease: "power2.inOut",
    },
    "<"
  );

});



  
  
  return ( <div>
    <div className="relative  w-full lg:hidden">
            <svg
          ref={layerRef}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute lehar bottom-0 left-0 w-full sm:h-[37vh] md:h-[25vh] h-[10vh] "
        >
          <path
            id="wavePath1"
            ref={waveRef}
            d="M0 60 Q 150 40 300 60 T 600 60 T 900 60 T 1200 60 V120 H0 Z"
            fill="#533116c0"
          />
        </svg>
        <svg
          ref={layerReff}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute lehar bottom-0 left-0 w-full sm:h-[32vh] md:h-[20vh] h-[7vh] "
        >
          <path
            id="wavePath2"
            ref={waveRef}
            d="M0 60 Q 150 40 300 60 T 600 60 T 900 60 T 1200 60 V120 H0 Z"
            fill="#533116"
          />
        </svg>
    </div>
    <div className=" h-auto py-5 start justify-center flex items-center bg-[#533116]">
      <div className=" bg-[#9b663a] mb-5 h-auto md:mt-15 lg:mt-0 flex  rounded-4xl w-[90%]">
        <div className="lg:w-1/2 w-full h-auto rounded-4xl  text-[#f2e5bc] ">

        <div className=" items-center flex flex-col">
          <div className="font-[one] text-[12vw] sm:text-[5.5vw] title pt-5">COLD BREWS</div>
        <div className="font-[two2] text-[3vw] mb-2 sm:mb-0 sm:text-[1.5vw] border-b-1 pb-1 sm:pb-5 ">Served hot, on ice, and blended -- Just let your barista know</div>
        </div>
      
        {/* <div className="menuitem  px-10 md:px-auto md:pl-8 ">
            <div className=" flex flex-col items-start text-[6vw] lg:text-[3vw] font-[two] py-2">Espresso </div>
          <div className="flex items-center justify-between pb-5 ">
            <div className="sm:text-[1.2vw] text-[2.5vw] font-[two2]  text-left w-[60%]">Lorem ipsum dolor, sit amet consectetur .</div>
            <div className="lg:text-[2.5vw] text-[5vw] font-[one]">RS - 450/-</div>
          </div>
        </div> */}

        {/* <div className="allitems">
  {coffees.map((item) => (
    <div key={item.id} className="menuitem px-10 md:px-auto md:pl-8">
      <div className="flex flex-col items-start text-[6vw] lg:text-[3vw] font-[two] py-2">
        {item.title}
      </div>
      <div className="flex items-center justify-between border-b-1 pb-5">
        <div className="sm:text-[1.2vw] text-[2.5vw] font-[two2] text-left w-[60%]">
          {item.description}
        </div>
        <div className="lg:text-[2.5vw] text-[5vw] font-[one]">
          RS - {item.price}/-
        </div>
      </div>
    </div>
  ))}
</div> */}


<div className="allitems">
  {coldBrew.map((item) => (
    <div key={item.id} className="menuitem px-10 md:px-auto md:pl-8">
      <div className="flex flex-col items-start text-[6vw] lg:text-[3vw] font-[two] py-2">
        {item.name}
      </div>
      <div className="flex items-center justify-between border-b-1 pb-5">
        <div className="sm:text-[1.2vw] text-[2.5vw] font-[two2] text-left w-[60%]">
          {item.description}
        </div>
        <div className="lg:text-[2.5vw] text-[5vw] font-[one]">
          RS - {item.price}/-
        </div>
      </div>
    </div>
  ))}
</div>



        </div>
       
           <div className="w-1/2 hidden lg:block h-full rounded-4xl relative">
      <div
        ref={sectionRef} 
        className="rounded-4xl w-[90%] m-8 overflow-hidden  relative h-[80vh]"
      >
        {["/images/boldone.jpeg", "/images/boldtwo.jpeg", "/images/boldthree.jpeg"].map(
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
    </div>
  );
};

export default MenuOne;
