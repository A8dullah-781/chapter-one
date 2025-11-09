import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/all'
import { useEffect, useState } from "react";
import axios from "axios";
import { matcha, frappe, chillers } from "../../constants/constants";

const MenuOne = () => {
  const boldoneRef = useRef();
  const sectionRef = useRef();
  const imagesRef = useRef([]);

gsap.registerPlugin(ScrollTrigger);
 const layerRef = useRef();
  const layerReff = useRef();
  const waveRef = useRef()


  //    const [matcha, setMatcha] = useState([]);


  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1337/api/chapter-one-2s")
  //     .then(res => {
  //       console.log("Full API response:", res);
  //       console.log("Response data only:", res.data);
  //       console.log("Actual products array:", res.data.data);
  //       setMatcha(res.data.data);
  //     })
  //     .catch(err => console.error("Error:", err));
  // }, []);


  //    const [frappe, setFrappe] = useState([]);


  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1337/api/chapter-one-3s")
  //     .then(res => {
  //       console.log("Full API response:", res);
  //       console.log("Response data only:", res.data);
  //       console.log("Actual products array:", res.data.data);
  //       setFrappe(res.data.data);
  //     })
  //     .catch(err => console.error("Error:", err));
  // }, []);

  //    const [chiller, setChiller] = useState([]);


  // useEffect(() => { 
  //   axios
  //     .get("http://localhost:1337/api/chapter-one-4s")
  //     .then(res => {
  //       console.log("Full API response:", res);
  //       console.log("Response data only:", res.data);
  //       console.log("Actual products array:", res.data.data);
  //       setChiller(res.data.data);
  //     })
  //     .catch(err => console.error("Error:", err));
  // }, []);



useGSAP(() => {

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

gsap.fromTo(
  layerReff.current,
  { y: "100%" },
  {
    y: "5%",
    opacity: 1,
   ease: "bounce.out",
    scrollTrigger: {
      trigger: layerReff.current,
      start: "top 90%", 
      scrub: true,
    },
  }
);



// const mm = gsap.matchMedia();

// // Large screens (1000px–1500px)
// mm.add("(min-width: 1000px) and (max-width: 1500px)", () => {
//   gsap.to(layerRef.current, {
//     scrollTrigger: {
//       trigger: layerRef.current,
//       start: "top 75%",
//       end: "+=600",
//       scrub: false,
//       pin: true,
//       pinSpacing:false
//     },
//   });

//   gsap.to(layerReff.current, {
//     scrollTrigger: {
//       trigger: layerReff.current,
//       start: "top 80%",
//       end: "+=600",
//       scrub: false,
//       pin: true,
//       pinSpacing:false
//     },
//   });
// });



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


   // select all title elements
const titles = gsap.utils.toArray(".title");

titles.forEach(title => {
  const split = new SplitText(title, { type: "chars" });

 gsap.from(split.chars, {
  y: -10,             // upar se girna start
  rotation: -10,       // thoda twist girte waqt
  opacity: 0,          // fade-in effect
  duration: 1,         // thoda slow for bounce feel
  ease: "bounce.out",  // girte settle hone ka effect
  stagger: {
    each: 0.05,        // har letter sequentially
    from: "start",     // left to right
  },
  scrollTrigger: {
    trigger: title,
    start: "top 85%",  
    toggleActions: "restart none none restart",
    invalidateOnRefresh: true,
  }
});


});




});



  
  
  return ( <div classname='overflow-x-hidden'>
    
    <div className=" h-auto justify-center  relative flex z-10 items-center bg-[#533116]">
      <div className="bg-[#bed9eb] mb-5 start h-auto flex mt-10 sm:mt-0 rounded-4xl w-[90%]">
        <div className="lg:w-1/2 w-full h-auto rounded-4xl  text-[#9b663a] "> <div></div>

        <div className=" items-center  flex flex-col">
          <div className="font-[one] title text-[9vw]  md:text-[8vw] lg:text-[4.5vw]  sm:text-[4vw] whitespace-none  border-b-1 pb-1 sm:pb-5  pt-5">MATCHA BLENDS</div>
       
        </div>

         <div className="allitems">
  {matcha.map((item) => (
    <div key={item.id} className="menuitem px-4 md:px-auto md:pl-8">
      <div className="flex flex-col items-start text-[6vw] lg:text-[3vw] font-[two] py-2">
        {item.name}
      </div>
      <div className="flex items-center justify-between border-b-1 pb-5">
        <div className="sm:text-[1.2vw] text-[4vw] font-[two2] text-left w-[60%]">
          {item.description}
        </div>
        <div className="lg:text-[2.5vw] text-[5vw] font-[one]">
          RS - {item.price}/-
        </div>
      </div>
    </div>
  ))}
</div>
      
    <div className=" items-center flex flex-col">
          <div className="font-[one]  md:text-[8vw] lg:text-[4.5vw]  title text-[9vw] sm:text-[4vw] whitespace-none  border-b-1 pb-1 sm:pb-5  pt-5">BARISTA'S PICK</div>
       
        </div>

          <div className="allitems">
  {frappe.map((item) => (
    <div key={item.id} className="menuitem px-4 md:px-auto md:pl-8">
      <div className="flex flex-col items-start text-[6vw] lg:text-[3vw] font-[two] py-2">
        {item.name}
      </div>
      <div className="flex items-center justify-between border-b-1 pb-5">
        <div className="sm:text-[1.2vw] text-[4vw] font-[two2] text-left w-[60%]">
          {item.description}
        </div>
        <div className="lg:text-[2.5vw] text-[5vw] font-[one]">
          RS - {item.price}/-
        </div>
      </div>
    </div>
  ))}
</div>

  <div className="title items-center flex flex-col">
          <div className="font-[one] text-[8vw] title  md:text-[8vw] lg:text-[4vw]  sm:text-[4vw] px-5 pt-5">FROSTED BLENDS</div>
        <div className="font-[two2] text-[2.5vw] mb-2 sm:mb-0 sm:text-[1.5vw] ">*These drinks are caffiene-free</div>
        <div className="w-[90%] border-b-1 pb-1 sm:pb-5"></div>
        </div>


<div className="allitems">
  {chillers.map((item, index) => (
    <div key={item.id} className="menuitem px-4 md:px-auto md:pl-8">
      <div className="flex flex-col items-start text-[6vw] lg:text-[3vw] font-[two] py-2">
        {item.name}
      </div>
      <div
        className={`flex items-center justify-between border-b pb-5 ${
          index === chillers.length - 1 ? "border-b-0" : "border-b"
        }`}
      >
        <div className="sm:text-[1.2vw] text-[4vw] font-[two2] text-left w-[60%]">
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
        {["/images/matcha.jpeg", "/images/mid.jpeg", "/images/chiller.jpeg"].map(
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
     <div className="relative w-full -mt-1 z-0 rotate-180">
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
            id="wavePath"
            ref={waveRef}
            d="M0 60 Q 150 40 300 60 T 600 60 T 900 60 T 1200 60 V120 H0 Z"
            fill="#533116"
          />
        </svg>
     </div>
    </div>
  );
};

export default MenuOne;
