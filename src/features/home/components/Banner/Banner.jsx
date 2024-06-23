import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Typography from "../../../../shared/components/Typography/Typography";
import BannerImage from "../../assets/home-banner1.jpg";
import home2 from "../../assets/home-banner-image2.png";
import home3 from "../../assets/home-banner-image3.png"

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="max-h-[650px] relative">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide w-full max-h-[650px] flex items-center relative before:bg-gray-600/50 before:absolute before:w-full before:h-full before:z-10">
          <img className=" w-full h-full object-cover" src={BannerImage} />
          <div className="absolute w-full md:ml-10">
            <div className="container mx-auto ps-10 md:ps-0 z-30 absolute">
              <Typography
                variant={"primary_body"}
                className={"font-semibold text-brand-secondary"}
              >
                Eyes Open to Opportunity
              </Typography>
              <span className="  text-base  leading-[24px] font-body"></span>
              <Typography
                variant={"h1"}
                className="text-secondary text-justify md:text-start"
              >
                We Can Change <br />
                the world together
              </Typography>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide w-full max-h-[650px] flex items-center relative before:bg-gray-600/50 before:absolute before:w-full before:h-full before:z-10">
          <img className=" w-full h-full object-cover" src={home2} />
          <div className="absolute w-full">
            <div className="container mx-auto ps-10 md:ps-0 z-30 absolute">
              <Typography
                variant={"primary_body"}
                className={"font-semibold text-brand-secondary"}
              >
                Eyes Open to Opportunity
              </Typography>
              <span className="  text-base  leading-[24px] font-body"></span>
              <Typography variant={"h1"} className="text-secondary">
                We Can Change <br />
                the world together
              </Typography>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide w-full max-h-[650px] flex items-center relative before:bg-gray-600/50 before:absolute before:w-full before:h-full before:z-10">
          <img className=" w-full h-full object-cover" src={home3} />
          <div className="absolute w-full">
            <div className="container mx-auto ps-10 md:ps-0 z-30 absolute">
              <Typography
                variant={"primary_body"}
                className={"font-semibold text-brand-secondary"}
              >
                Eyes Open to Opportunity
              </Typography>
              <span className="  text-base  leading-[24px] font-body"></span>
              <Typography variant={"h1"} className="text-secondary">
                We Can Change <br />
                the world together
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="absolute bottom-5 md:bottom-14 left-0 right-0 flex items-center justify-center gap-4">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "dot w-3 h-3 md:w-4 md:h-4 rounded-full bg-secondary" +
                  (currentSlide === idx ? " opacity-100" : " opacity-50")
                }
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Banner;
