import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Typography from "../../../../shared/components/Typography/Typography";
import Button from "../../../../shared/components/Button/Button";
const animation = { duration: 10000, easing: (t) => t };
import Mission1 from "../../assets/mission-1.png";
import Mission2 from "../../assets/mission-2.png";
import Mission3 from "../../assets/mission-3.png";
import Mission4 from "../../assets/home-welcome-second-image.png";
import Mission5 from "../../assets/mission-5.png";
import Mission6 from "../../assets/home-banner-image3.png";
import btnarrow from "../../../../shared/assets/icon/arrow_icon.png";
import { Link } from "react-router-dom";
const ImpactfulMission = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
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
          perView: 5,
          spacing: 20,
        },
      },
    },
    drag: false,
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
    <section className="py-24 bg-[#F6F6F6]">
      <div className=" text-center">
        <Typography
          className="text-center font-bold leading-10 mb-6"
          variant="h3"
        >
          Embark on a Compassionate Journey <br />
          Explore Our Impactful Mission
        </Typography>
        {/* <Button variant={"generalBtn"} className={"mb-10 md:mb-20"}>
          See More
        </Button> */}
       <Link to="mission">
       <button className="my-5 md:my-10 mx-auto group px-5 py-2 hover:bg-[#0CD21D] duration-500 bg-black text-white overflow-hidden flex items-center gap-2 rounded-full relative">
          <img
            src={btnarrow}
            alt=""
            className="w-6 absolute left-0 transform -translate-x-20 group-hover:translate-x-2 transition-transform duration-500 ease-in-out"
          />
          <span className="group-hover:ml-5 duration-300">See More</span>
        </button>
       </Link>
      </div>
      <div ref={sliderRef} className="keen-slider ">
        <div>
          <img
            className="keen-slider__slide object-cover w-[300px] h-[300px] rounded-3xl "
            src={Mission1}
          />
        </div>
        <div>
          <img
            className="keen-slider__slide object-cover w-[300px] h-[300px] rounded-3xl "
            src={Mission2}
          />
        </div>
        <div>
          <img
            className="keen-slider__slide object-cover w-[300px] h-[300px] rounded-3xl "
            src={Mission3}
          />
        </div>
        <div>
          <img
            className="keen-slider__slide object-cover w-[300px] h-[300px] rounded-3xl "
            src={Mission4}
          />
        </div>
        <div>
          <img
            className="keen-slider__slide object-cover w-[300px] h-[300px] rounded-3xl "
            src={Mission5}
          />
        </div>
        
        <div>
          <img
            className="keen-slider__slide object-cover w-[300px] h-[300px] rounded-3xl "
            src={Mission6}
          />
        </div>
        {/* <div>
          <img
            className="keen-slider__slide object-cover w-[300px] h-[300px] rounded-3xl "
            src={Mission3}
          />
        </div> */}
        {/* <div>
          <img
            className="keen-slider__slide object-cover w-[300px] h-[300px] rounded-3xl "
            src={Mission5}
          />
        </div> */}
        {/* <div>
          <img
            className="keen-slider__slide object-cover w-[300px] h-[300px] rounded-3xl "
            src={Mission1}
          />
        </div> */}
        {/* <div>
          <img
            className="keen-slider__slide object-cover w-[300px] h-[300px] rounded-3xl "
            src={Mission2}
          />
        </div> */}
      </div>
    </section>
  );
};

export default ImpactfulMission;
