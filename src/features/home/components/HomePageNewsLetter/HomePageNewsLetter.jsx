import React, { useState } from "react";
import Button from "../../../../shared/components/Button/Button";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import btnarrow from "../../../../shared/assets/icon/arrow_icon.png";
import { Icon } from "@iconify/react";
import BlogNewsLetter from "../../../../shared/components/BlogNewsLetter/BlogNewsLetter";
import HeadingLine from "../../../../shared/components/HeadingLine/HeadingLine";
import NewsImage1 from "../../assets/news-social-image-one.png";
import NewsImage2 from "../../assets/news-social-image-two.png";
import NewsImage3 from "../../assets/news-social-image-three.png";
import { Link } from "react-router-dom";

const HomePageNewsLetter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
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
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <section className="bg-[#F6F6F6]">
      <div className=" container mx-auto py-12 md:py-24 p-2 md:p-0">
        <div className=" flex items-center justify-between mb-10">
          <HeadingLine variant={"h3"}>News Letter</HeadingLine>
          {loaded && instanceRef.current && (
            <div className=" flex items-center">
              <Icon
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
                className=" w-7 h-7 cursor-pointer"
                icon="iconamoon:arrow-left-2-thin"
              ></Icon>
              <Icon
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
                className=" w-7 h-7 cursor-pointer"
                icon="iconamoon:arrow-right-2-thin"
              ></Icon>
            </div>
          )}
        </div>
        <div className="navigation-wrapper mb-8">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide group cursor-pointer">
              <BlogNewsLetter
                link="/news/1"
                content="Capping Ceremony for First Year Students at Grameen Caledonian College of Nursing
"
                image={NewsImage1}
              ></BlogNewsLetter>
            </div>
            <div className="keen-slider__slide group cursor-pointer">
              <BlogNewsLetter
                link="/news/1"
                content="The who have got treatment from the hospitals of GHS were ground that 22% having cataract in their eye, 19% patients with diseases in cornea"
                image={NewsImage2}
              ></BlogNewsLetter>
            </div>
            <div className="keen-slider__slide group cursor-pointer">
              <BlogNewsLetter
                link="/news/1"
                content="Capping Ceremony for First Year Students at Grameen Caledonian College of Nursing
"
                image={NewsImage3}
              ></BlogNewsLetter>
            </div>
            <div className="keen-slider__slide group cursor-pointer">
              <BlogNewsLetter
                link="/news/1"
                content="The who have got treatment from the hospitals of GHS were ground that 22% having cataract in their eye, 19% patients with diseases in cornea"
                image={NewsImage1}
              ></BlogNewsLetter>
            </div>
            <div className="keen-slider__slide group cursor-pointer">
              <BlogNewsLetter
                link="/news/1"
                content="Capping Ceremony for First Year Students at Grameen Caledonian College of Nursing
"
                image={NewsImage2}
              ></BlogNewsLetter>
            </div>
            <div className="keen-slider__slide group cursor-pointer">
              <BlogNewsLetter
                link="/news/1"
                content="Capping Ceremony for First Year Students at Grameen Caledonian College of Nursing
"
                image={NewsImage3}
              ></BlogNewsLetter>
            </div>
          </div>
        </div>
        <div className=" text-center">
          {/* <Button variant={"generalBtn"} className={"mt-10"}>
            See More
          </Button> */}
          <button className="mt-5 md:mt-10 mx-auto group px-5 py-2 hover:bg-[#0CD21D] duration-500 bg-black text-white overflow-hidden flex items-center gap-2 rounded-full relative">
            <img
              src={btnarrow}
              alt=""
              className="w-6 absolute left-0 transform -translate-x-20 group-hover:translate-x-2 transition-transform duration-500 ease-in-out"
            />
            <Link to="/news">
              {" "}
              <span className="group-hover:ml-5 duration-300">See More</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePageNewsLetter;
