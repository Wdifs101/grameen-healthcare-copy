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
import CarrierDetailsBanner from "../../../shared/components/CarrierDetailsBanner/CarrierDetailsBanner";
import { Icon } from "@iconify/react/dist/iconify.js";

const CareerDetailsForm = () => {
  return (
    <div className="  bg-background-primary">
      <CarrierDetailsBanner></CarrierDetailsBanner>
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <section>
          <Typography variant={"h3"} className={"mb-7"}>
            Job Application ( Web )
          </Typography>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-7">
            <div>
              <label htmlFor="first_name" className=" mb-5">
                <Typography
                  variant={"h5"}
                  className={"font-normal font-body mb-2"}
                >
                  First Name
                </Typography>
              </label>
              <input
                className=" p-1 border bg-secondary w-full"
                type="text"
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <label htmlFor="last_name" className=" mb-5">
                <Typography
                  variant={"h5"}
                  className={"font-normal font-body mb-2"}
                >
                  Last Name
                </Typography>
              </label>
              <input
                className=" p-1 border bg-secondary w-full"
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
            <div>
              <label htmlFor="email" className=" mb-5">
                <Typography
                  variant={"h5"}
                  className={"font-normal font-body mb-2"}
                >
                  Email
                </Typography>
              </label>
              <input
                className=" p-1 border bg-secondary w-full"
                type="email"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label htmlFor="job_role" className=" mb-5">
                <Typography
                  variant={"h5"}
                  className={"font-normal font-body mb-2"}
                >
                  Job Role
                </Typography>
              </label>
              <input
                className=" p-1 border bg-secondary w-full"
                type="text"
                placeholder="Enter Job Role"
              />
            </div>
            <div className=" col-span-2">
              <label htmlFor="first_name" className=" mb-5">
                <Typography
                  variant={"h5"}
                  className={"font-normal font-body mb-2"}
                >
                  Enter Address
                </Typography>
              </label>
              <textarea
                className=" p-1 h-32 border bg-secondary w-full"
                type="text"
                placeholder="Enter First Name"
              ></textarea>
            </div>
            <div>
              <label htmlFor="city" className=" mb-5">
                <Typography
                  variant={"h5"}
                  className={"font-normal font-body mb-2"}
                >
                  City
                </Typography>
              </label>
              <input
                className=" p-1 border bg-secondary w-full"
                type="text"
                placeholder="Enter City"
              />
            </div>
            <div>
              <label htmlFor="cv" className=" mb-5">
                <Typography
                  variant={"h5"}
                  className={"font-normal font-body mb-2"}
                >
                  Upload Your CV
                </Typography>
              </label>
              <input
                className=" p-1 border bg-secondary w-full"
                type="file"
                placeholder="Upload Your CV & Cover letter"
              />
            </div>
            <div>
              <label htmlFor="cover_letter" className=" mb-5">
                <Typography
                  variant={"h5"}
                  className={"font-normal font-body mb-2"}
                >
                  Cover letter
                </Typography>
              </label>
              <input
                className=" p-1 border bg-secondary w-full"
                type="file"
                placeholder="Upload Your CV & Cover letter"
              />
            </div>
          </div>
          <div className=" text-center mt-24 mb-12">
            <Button variant={"applyBtn"}>Submit</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerDetailsForm;
