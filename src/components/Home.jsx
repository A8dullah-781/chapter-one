import gsap from "gsap";
import react, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const layerRef = useRef();
  const layerReff = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    // gsap.to('.whit', {
    //   delay: 0.3,
    //   x: '100%',
    //   duration: 0.5,
    //   stagger: { amount: 1, from: 'center' },
    //   ease: "expo.inOut",
    // })

    gsap.to(".white", {
      delay: 0.3,
      opacity: 0,
      duration: 0.5,
      stagger: { amount: 1, from: "center" },
      ease: "expo.inOut",
    });

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
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      attr: {
        d: "M0 60 Q 150 0 300 60 T 600 60 T 900 60 T 1200 60 V120 H0 Z",
      },
    });

    gsap.to(layerRef.current, {
      scrollTrigger: {
        trigger: layerRef.current,
        start: "top 65%",
        end: "+=1000",
        scrub: false,
        pin: true,
      },
    });
    gsap.to(layerReff.current, {
      scrollTrigger: {
        trigger: layerReff.current,
        start: "top 70%",
        end: "+=1000",
        scrub: false,
        pin: true,
        markers: true,
      },
    });
  });

  return (
    <div className=" h-screen w-screen">
      <div className="absolute top-0 right-0 h-full w-full flex">
        <div className="h-full z-20 w-full">
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
          <div className="white h-[10%] w-full bg-[#784b29]"></div>
        </div>
        {/* <div className='h-full w-1/2'>
        <div className='whit h-[10%] w-full bg-[#784b29]'></div>
        <div className='whit h-[10%] w-full bg-[#784b29]'></div>
        <div className='whit h-[10%] w-full bg-[#784b29]'></div>
        <div className='whit h-[10%] w-full bg-[#784b29]'></div>
        <div className='whit h-[10%] w-full bg-[#784b29]'></div>
        <div className='whit h-[10%] w-full bg-[#784b29]'></div>
        <div className='whit h-[10%] w-full bg-[#784b29]'></div>
        <div className='whit h-[10%] w-full bg-[#784b29]'></div>
        <div className='whit h-[10%] w-full bg-[#784b29]'></div>
        <div className='whit h-[10%] w-full bg-[#784b29]'></div>
        </div> */}
      </div>

      <div className="nav font-[two2] text-[#784b29] flex justify-between items-center px-10 py-5 text-[1.7vw]">
       
        <a
          href="https://maps.app.goo.gl/Bno2QXkkedsYawqC8?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase"
          style={{ zIndex: 9999, position: "relative", pointerEvents: "auto" }}
        >
          Sector A, Phase 5, D.H.A, Lahore
        </a>

        <a
          href="tel:+923290021164"
          className="uppercase"
          style={{ zIndex: 9999, position: "relative", pointerEvents: "auto" }}
        >
          +92 329 0021164
        </a>
      </div>

      <div className="mt-[15vh] leading-none justify-center flex-col items-center flex text-[#533116]">
        <div className="maintext font-[one] ">
          <div className="lhr text-[4vw] ">LAHORE</div>
          <div className="text-[8vw] ">CHAPTER</div>
          <div className="flex one -mt-5 ">
            <img
              className="w-[6vw] bean text-[#533116]"
              src="/images/bean.png"
              alt=""
            />
            <div className="text-[8vw]"> NE</div>
          </div>
        </div>
        <svg
          ref={layerRef}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute lehar bottom-0 left-0 w-full h-[35vh] "
        >
          <path
            id="wavePath"
            d="M0 60 Q 150 40 300 60 T 600 60 T 900 60 T 1200 60 V120 H0 Z"
            fill="#533116c0"
          />
        </svg>
        <svg
          ref={layerReff}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute lehar bottom-0 left-0 w-full h-[30vh] "
        >
          <path
            id="wavePath"
            d="M0 60 Q 150 40 300 60 T 600 60 T 900 60 T 1200 60 V120 H0 Z"
            fill="#533116"
          />
        </svg>

        <div className="z-1">
          <img
            className="w-[45vw] rounded-4xl"
            src="/images/mainpic.png"
            alt=""
          />
          <div className="flex flex-col justify-center items-center  w-[45vw] rounded-4xl bg-[#bed9eb]">
            <div className="text-[2.5vw] font-[two]  pt-4 uppercase">Opening Hours</div>
            <div className="flex justify-center items-center gap-10 p-4">
              <div className="text-[3.5vw] font-[one]  uppercase">MON - SUN</div>
              <div className="text-[2.5vw] font-[two]   uppercase">9am - 2am</div>
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
