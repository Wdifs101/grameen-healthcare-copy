import React from "react";
import HistoryBannerImage from "../../../shared/assets/banner/BannerBackground.png";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import BackgroundImage from "../assets/BackgroundImage.png";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import OURVISIONIMAGE from "../assets/OurVisionImage.png";
import PictureOfMdYounus from "../assets/ProfileOfMdYounus.png";
import MohammadYounus from "../assets/Muhammad_Younus.png";
import Articles from "../../../shared/components/articles/Articles";
import QuotesOfProf from "../../../shared/components/quotesOfProf/QuotesOfProf";
import Button from "../../../shared/components/Button/Button";
import Background from "../../background/containers/Background";
import OfficeHeading from "../../../shared/components/OfficeLocation/OfficeHeading";
import OfficeLocation from "../../../shared/components/OfficeLocation/OfficeLocation";
import LatestJob from "../../../shared/components/LatestJob/LatestJob";
import { Link } from "react-router-dom";

const JobPortal = () => {
  return (
    <section className="  bg-[#F6F6F6]">
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <GlobalBanner image="https://static.vecteezy.com/system/resources/thumbnails/040/139/160/small_2x/finding-new-business-opportunities-or-looking-for-a-new-job-internet-marketing-concept-job-vacancy-concept-employee-using-magnifying-glass-to-search-for-job-on-search-bar-illustration-vector.jpg">
          Job Portal
        </GlobalBanner>
        <Typography className={" py-11"} variant={"h2"}>
          Latest <span className=" text-brand-primary">jobs open</span>
        </Typography>
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-8">
          <Link to={`/career/1`}>
            <LatestJob></LatestJob>
          </Link>
          <Link to={`/career/2`}>
            <LatestJob></LatestJob>
          </Link>
          <Link to={`/career/3`}>
            <LatestJob></LatestJob>
          </Link>
          <Link to={`/career/4`}>
            <LatestJob></LatestJob>
          </Link>
          <Link to={`/career/5`}>
            <LatestJob></LatestJob>
          </Link>
          <Link to={`/career/6`}>
            <LatestJob></LatestJob>
          </Link>
          <Link to={`/career/7`}>
            <LatestJob></LatestJob>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobPortal;
