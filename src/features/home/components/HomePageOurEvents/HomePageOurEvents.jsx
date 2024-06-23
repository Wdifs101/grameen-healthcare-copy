import React, { useEffect, useState } from "react";
import Button from "../../../../shared/components/Button/Button";
import "keen-slider/keen-slider.min.css";
import OurEvents from "../../../../shared/components/OurEvents/OurEvents";
import Event1 from "../../assets/events-social-image-one.png";
import Event2 from "../../assets/events-social-image-two.png";
import Event3 from "../../assets/events-social-image-three.png";
import btnarrow from "../../../../shared/assets/icon/arrow_icon.png";
import { Link } from "react-router-dom";

const words = ["events", "eye-camp", "training"];
const HomePageOurEvents = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="bg-[#F8FAFF]">
      <div className="container mx-auto py-12 pd:my-24 ">
        <h3 className=" mb-8 md:mb-16 text-center text-4xl font-bold font-heading">
          Our{" "}
          <span className=" text-brand-primary capitalize">{words[index]}</span>
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 cursor-pointer">
          <Link to={`/${words[index]}`}>
            <OurEvents event={words[index]} image={Event1}></OurEvents>
          </Link>
          <Link to={`/${words[index]}`}>
            {" "}
            <OurEvents event={words[index]} image={Event2}></OurEvents>
          </Link>
          <Link to={`/${words[index]}`}>
            <OurEvents event={words[index]} image={Event3}></OurEvents>
          </Link>
          <Link to={`/${words[index]}`}>
            <OurEvents event={words[index]} image={Event1}></OurEvents>
          </Link>
        </div>
        <div className=" text-center">
          {/* <Button variant={"generalBtn"} className={"mt-5 md:mt-10"}>
            See More
          </Button> */}
          <button className="mt-5 md:mt-10 mx-auto group px-5 py-2 hover:bg-[#0CD21D] duration-500 bg-black text-white overflow-hidden flex items-center gap-2 rounded-full relative">
            <img
              src={btnarrow}
              alt=""
              className="w-6 absolute left-0 transform -translate-x-20 group-hover:translate-x-2 transition-transform duration-500 ease-in-out"
            />
            <Link to={`/${words[index]}`}>
              <span className="group-hover:ml-5 duration-300">See More</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePageOurEvents;
