import React, { useState } from "react";
import HistoryBannerImage from "../../../shared/assets/banner/BannerBackground.png";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import BackgroundImage from "../assets/BackgroundImage.png";
import OURVISIONIMAGE from "../assets/OurVisionImage.png";
import OurMissionCard from "../../../shared/components/OurMissionCard/OurMissionCard";
import Maintainence from "../assets/Maintenance.png";
import OurMissionImage from "../assets/OurMissionImage.png";
import { PartnershipCard } from "../../../shared/components/PartnershipCard/PartnershipCard.1";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import Gallery from "../../../shared/components/Gallery/Gallery";
const PhotoAndVideoGallery = () => {
  const [category, setCategory] = useState("all");
  console.log(category);
  console.log(category == "all" || "photos");
  return (
    <section className="  bg-background-primary">
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <GlobalBanner image={HistoryBannerImage}>Gallery</GlobalBanner>
        <div className=" flex items-center justify-center gap-16 py-10">
          <div
            className="cursor-pointer"
            onClick={() => {
              setCategory("all");
            }}
          >
            <span
              className={`${
                category == "all" ? "opacity-100" : "opacity-25"
              } text-xl font-semibold p-2`}
            >
              All
            </span>
            <span
              className={`${
                category == "all" ? "bg-brand-primary" : ""
              } h-1  w-full inline-block`}
            ></span>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setCategory("photos");
            }}
          >
            <span
              className={`${
                category == "photos" ? "opacity-100" : "opacity-25"
              } text-xl  font-semibold p-2`}
            >
              Photos
            </span>
            <span
              className={` h-1 ${
                category == "photos" ? "bg-brand-primary" : ""
              } w-full inline-block`}
            ></span>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setCategory("video");
            }}
          >
            <span
              className={`${
                category == "videos" ? "opacity-100" : "opacity-25"
              } text-xl  font-semibold p-2`}
            >
              Video
            </span>
            <span
              className={` h-1 ${
                category == "video" ? "bg-brand-primary" : ""
              } w-full inline-block`}
            ></span>
          </div>
        </div>
        {(category == "all" || category == "photos") && (
          <>
            <HeadingLine variant={"h3"} className="font-normal font-body py-10">
              All Photo
            </HeadingLine>
            <Gallery></Gallery>
          </>
        )}
        {(category == "all" || category == "video") && (
          <>
            <HeadingLine variant={"h3"} className="font-normal font-body py-10">
              All Video
            </HeadingLine>
            <Gallery></Gallery>
          </>
        )}
      </div>
    </section>
  );
};

export default PhotoAndVideoGallery;
