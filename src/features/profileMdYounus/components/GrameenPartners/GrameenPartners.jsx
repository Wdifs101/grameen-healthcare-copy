import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const animation = { duration: 10000, easing: (t) => t };
import Partners1 from "../../assets/partners-1.png";
import Partners3 from "../../assets/partners-3.png";
import Partners4 from "../../assets/partners-4.png";
import Partners5 from "../../assets/partners-5.png";

const GrameenPartners = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    rtl: true,
    // slides: {
    //   perView: 4,
    //   spacing: 20,
    // },
    breakpoints: {
      "(max-width: 576px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
      "(min-width: 576px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 20,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="py-7">
      <div className=" bg-[#EBF5F0] py-10">
        <div className="container mx-auto ">
          <div ref={sliderRef} className="keen-slider ">
            <div className="keen-slider__slide w-[285px] h-[120px]">
              <img className=" w-full h-full  " src={Partners1} />
            </div>
            <div className="keen-slider__slide w-[285px] h-[120px]">
              <img className=" w-full h-full  " src={Partners3} />
            </div>
            <div className="keen-slider__slide w-[285px] h-[120px]">
              <img className=" w-full h-full  " src={Partners4} />
            </div>
            <div className="keen-slider__slide w-[285px] h-[120px]">
              <img className=" w-full h-full  " src={Partners5} />
            </div>
            <div className="keen-slider__slide w-[285px] h-[120px]">
              <img className=" w-full h-full  " src={Partners1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrameenPartners;
