import gsap from "gsap";
import react, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const layerRef = useRef();
  const layerReff = useRef();
  const waveRef = useRef()
  useGSAP(() => {
  

    // gsap.to(".white", {
    //   delay: 0.3,
    //   opacity: 0,
    //   duration: 0.5,
    //   stagger: { amount: 1, from: "center" },
    //   ease: "expo.inOut",
    // });

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
    gsap.to("#wavePath", {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      attr: {
        d:  "M0 70 Q 150 20 300 60 T 600 55 T 900 65 T 1200 45 V120 H0 Z",
      },
    });

     const mm = gsap.matchMedia();
    mm.add("(min-width: 1000px) and (max-width: 1500px)", () => {
      gsap.to(layerRef.current, {
      scrollTrigger: {
        trigger: layerRef.current,
        start: "top 75%",
        end: "+=600",
        scrub: false,
        pin: true,
      },
    });
    mm.add("(min-width: 1000px) and (max-width: 1500px)", () => {
      gsap.to(layerReff.current, {
      scrollTrigger: {
        trigger: layerReff.current,
        start: "top 80%",
        end: "+=600",
        scrub: false,
        pin: true,
        markers:true
      },
    }); 

    // gsap.to(layerRef.current, {
    //   scrollTrigger: {
    //     trigger: layerRef.current,
    //     start: "top 75%",
    //     end: "+=650",
    //     scrub: false,
    //     pin: true,
    //   },
    // });
    // gsap.to(layerReff.current, {
    //   scrollTrigger: {
    //     trigger: layerReff.current,
    //     start: "top 80%",
    //     end: "+=650",
    //     scrub: false,
    //     pin: true,
    //     markers: true,
    //   },
    // });
  });

     }); });

  

  return (
    <div className=" h-screen w-screen">


      <div className="nav font-[two2] text-[#784b29]  flex justify-between items-center sm:px-10 px-5 py-3 text-[2.5vw] sm:text-[1.7vw]">
       
        <a
          href="https://maps.app.goo.gl/Bno2QXkkedsYawqC8?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase"
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
      </div>

      <div className="sm:mt-[15vh] mt-[12vh]  leading-none justify-center flex-col items-center flex text-[#533116]">
        <div className="maintext font-[one] ">
          <div className="lhr text-[6vw] sm:text-[4vw] ">LAHORE</div>
          <div className="text-[12vw] sm:text-[8vw] ">CHAPTER</div>
          <div className="flex one sm:-mt-5 -mt-2 ">
            <img
              className="sm:w-[6vw] w-[10vw] h-[6vh] sm:h-auto bean text-[#533116]"
              src="/images/bean.png"
              alt=""
            />
            <div className="text-[12vw] sm:text-[8vw]"> NE</div>
          </div>
        </div>
        <svg
          ref={layerRef}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute lehar bottom-0 left-0 w-full sm:h-[35vh] md:h-[25vh] h-[15vh] "
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
          className="absolute lehar bottom-0 left-0 w-full sm:h-[30vh] md:h-[20vh] h-[12vh] "
        >
          <path
            id="wavePath"
            ref={waveRef}
            d="M0 60 Q 150 40 300 60 T 600 60 T 900 60 T 1200 60 V120 H0 Z"
            fill="#533116"
          />
        </svg>

        <div className="z-1">
          <img
            className="sm:w-[45vw] w-[70vw]  rounded-4xl"
            src="/images/mainpic.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center sm:w-[45vw] w-[70vw] rounded-4xl bg-[#bed9eb]">
            <div className="sm:text-[2.5vw] text-[5vw] font-[two]  pt-4 uppercase">Opening Hours</div>
            <div className="flex justify-center items-center gap-10 p-4">
              <div className="sm:text-[3.5vw] text-[4.5vw] font-[one]  uppercase">MON - SUN</div>
              <div className="sm:text-[2.5vw] text-[4.5vw] font-[two]   uppercase">9am - 2am</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// #bed9eb #ffdbc6
