import React from "react";
import HistoryBannerImage from "../assets/bannerImageVission.jpeg";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import BackgroundImage from "../assets/BackgroundImage.png";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import OURVISIONIMAGE from "../assets/OurVisionImage.png";

const OurVision = () => {
  return (
    <section className="  bg-background-primary">
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <GlobalBanner image={HistoryBannerImage}>Vision</GlobalBanner>
        <HeadingLine variant={"h3"} className="font-heading my-5 md:my-9 px-3">
          Our Vision
        </HeadingLine>
        <div className="space-y-3 px-3 flex flex-col items-center">
          <ul className="list-inside list-disc">
            <li className="text-lg font-semibold">
          To ensure quality healthcare services at affordable cost to the
            doorsteps of the urban, semi urban and rural Bangladeshi (s).
            </li>
          </ul>
          <div className="w-3/4 h-[50rem]">
            <img src={OURVISIONIMAGE} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
