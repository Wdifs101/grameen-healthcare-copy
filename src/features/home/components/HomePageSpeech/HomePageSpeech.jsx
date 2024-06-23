import React from "react";
import MuhammadYounus from "../../assets/Muhammad_Younus.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const HomePageSpeech = () => {
  return (
    <section className="py-10 md:py-20 p-2 bg-[#F8FAFF]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 w-full p-5 gap-10 md:gap-0 md:w-8/12 md:mx-auto bg-background-primary rounded-3xl shadow">
        <div className="flex flex-col justify-center gap-5 md:gap-0  order-2 md:order-1 p-5">
          <div className="md:relative  md:mb-14">
            <h4 className=" text-3xl font-heading text-justify md:text-start text-gray-600">
              “ I think, social business is the most logical thing to do. If we
              had done that, we could reduce all the problems we have. ”
            </h4>
            <Icon
              icon={"oui:quote"}
              className=" w-20 h-20 absolute bottom-0 right-20 opacity-10"
            ></Icon>
          </div>
          <div>
            <h3 className=" text-3xl font-semibold">Prof. Muhammad Yunus</h3>
            <span className="text-xs font-semibold">Nobel Laureate,Founder and chairman of Grameen Healthcare Center.</span>
          </div>
        </div>
        <div className="w-full flex md:items-end justify-end md:pe-4 order-1 md:order-2">
          <img
            src={MuhammadYounus}
            className="rounded-lg w-full h-full md:w-[360px] md:h-[450px] md:relative object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageSpeech;
