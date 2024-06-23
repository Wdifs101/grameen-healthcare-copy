import React from "react";
import HistoryBannerImage from "../assets/bannerforMission.jpg";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import BackgroundImage from "../assets/BackgroundImage.png";
import OURVISIONIMAGE from "../assets/OurVisionImage.png";
import OurMissionCard from "../../../shared/components/OurMissionCard/OurMissionCard";
import Maintainence from "../assets/Maintenance.png";
import OurMissionImage from "../assets/mission.jpg";
const OurMission = () => {
  return (
    <section className="  bg-background-primary">
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <GlobalBanner image={HistoryBannerImage}>Mission</GlobalBanner>
        <div className=" py-8  ">
          <Typography variant={"h3"} className={"text-center pb-4"}>
            Transforming Communities, Inspiring Hope
          </Typography>
          <div className=" flex items-center justify-center gap-5 md:gap-10 mb-9">
            <span className=" w-16 md:w-36 h-[2px] bg-brand-primary"></span>
            <Typography variant={"h4"} className={"text-center"}>
              Our Mission
            </Typography>
            <span className=" w-16  md:w-36 h-[2px] bg-brand-primary"></span>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-y-9 md:gap-x-11 md:px-11">
            <OurMissionCard
              image={Maintainence}
              title={"Establishing health care facilities"}
              description={
                "To establish and operate hospitals, community health centers, mobile health clinics, lab and pathological centers etc. to ensure quality health care services."
              }
            ></OurMissionCard>
            <OurMissionCard
              image={Maintainence}
              title={"Establishing health care facilities"}
              description={
                "To establish and operate hospitals, community health centers, mobile health clinics, lab and pathological centers etc. to ensure quality health care services."
              }
            ></OurMissionCard>
            <OurMissionCard
              image={Maintainence}
              title={"Establishing health care facilities"}
              description={
                "To generate enough surplus to pay back the invested capital to the investors as early as possible."
              }
            ></OurMissionCard>
            <OurMissionCard
              image={Maintainence}
              title={"Establishing health care facilities"}
              description={
                "To be operated competing with Profit Maximizing Enterprises (PMEs)."
              }
            ></OurMissionCard>
            <OurMissionCard
              image={Maintainence}
              title={"Establishing health care facilities"}
              description={
                "To be operated without incurring losses."
              }
            ></OurMissionCard>
            <OurMissionCard
              image={Maintainence}
              title={"Establishing health care facilities"}
              description={
                "To be designed and operated to pass on all the benefits to the consumers."
              }
            ></OurMissionCard>
          </div>
          <img src={OurMissionImage} className=" p-5 md:p-20 size-3/4" />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
