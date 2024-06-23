import picture1 from "../../assets/forUpComingSlider/picture1.jpeg";
import "../UpComingSlider/UpComingSlider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import Typography from "../Typography/Typography";
const UpComingSlider = ({ children, color }) => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 10,
    },
  });

  const [sliderLoaded, setSliderLoaded] = useState(false);

  useEffect(() => {
    if (slider) {
      setSliderLoaded(true);
    }
  }, [slider]);

  const imageArray = [
    "https://hbr.org/resources/images/article_assets/hbr/1212/R1212M_YUNUS.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IFUOB36UbMUwAQu9j9BFG81HgoN1w6-Zc_rzxPSDZRUxha3pfFA9AAcPmUQLRtG_RNQ&usqp=CAU",
  ];

  return (
    <div
      className={`flex  md:flex-row flex-col  md:py-8 sm:py-6 py-5 ${color}  `}
    >
      <div className="relative flex md:justify-end  md:w-2/4 w-full  items-center ">
        <div className="md:w-[80%] w-full  ">
          <Typography className="font-semibold  relative" variant="h3">
            {children} <br /> Events
            <h1 className="border-2  border-[#163D01] absolute md:bottom-1 md:left-[85px] lg:bottom-1 lg:left-[95px] sm:bottom-1 sm:left-[70px] w-5 bottom-[12px] left-[70px]"></h1>
          </Typography>
          <Typography className="w-[90%] md:mt-3 mt-1 line-clamp-3" variant="h4">
            Three eye hospitals of Grameen Health Care Servcies Ltd., Bogura,
            Barishal and Thakurgoan, celebrated the World Sight Day 2020 on 8
            October 2020, the second Thursday of October.{" "}
          </Typography>
          {sliderLoaded && (
            <div className="space-x-4 mb-3 flex justify-end md:justify-start md:mt-5">
              <button
                onClick={() => slider.current?.next()}
                className=" border-black   md:p-2 p-1 border-2 rounded-full"
              >
                <FaArrowLeft></FaArrowLeft>
              </button>
              <button
                onClick={() => slider.current?.prev()}
                className="  border-black   md:p-2 p-1 border-2 rounded-full"
              >
                <FaArrowRight></FaArrowRight>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="md:w-2/4 w-full   left- relative ">
        <div ref={sliderRef} className="keen-slider md:w-[50%] w-full">
          {imageArray.map((image, index) => (
            // <div key={index} className="keen-slider__slide">
            //   <img className="w-full lg:h-[380px] md:h-[300px] sm:h-[250px] h-[200px]" src={image} alt={image.alt} />
            // </div>
            <div key={index} className="relative group keen-slider__slide">
              <img
                className="w-full lg:h-[380px] md:h-[300px] sm:h-[250px] h-[200px]"
                src={image}
                alt={image.alt}
              />
              <div className="absolute inset-0  bg-opacity-100 flex flex-col justify-end p-4 duration-300  ">
                <div className="text-white">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM4 8v9a1 1 0 001 1h10a1 1 0 001-1V8H4zm11-2V4H5v2h10z" />
                    </svg>
                    29-12-2023
                  </div>

                  <div className="text-sm">
                    The authority of each hospital arranged some events for the
                    day.{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpComingSlider;
