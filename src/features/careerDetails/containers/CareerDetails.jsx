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
import { Link } from "react-router-dom";

const CareerDetails = () => {
  return (
    <div className="  bg-[#F8FAFF]">
      <CarrierDetailsBanner></CarrierDetailsBanner>
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" col-span-2">
              <Typography variant={"h5"}>Job description</Typography>
              <Typography variant={"p"}>
                Lorem ipsum dolor sit amet consectetur. Massa vitae varius orci
                in. Dignissim integer neque est vestibulum tellus sed eget elit.
                Tincidunt turpis ac ut tincidunt eget feugiat. Netus maecenas
                imperdiet massa amet dolor egestas.
              </Typography>
              <Typography variant={"h5"} className={" mt-4"}>
                key Responsibility
              </Typography>
              <Typography variant={"p"}>
                <ul className=" list-disc ps-10">
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Massa vitae varius
                    orci in. Dignissim integer neque est vestibulum tellus sed
                    eget elit. Tincidunt turpis ac ut tincidunt eget feugiat.
                    Netus maecenas imperdiet massa amet dolor egestas.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Massa vitae varius
                    orci in. Dignissim integer neque est vestibulum tellus sed
                    eget elit. Tincidunt turpis ac ut tincidunt eget feugiat.
                    Netus maecenas imperdiet massa amet dolor egestas.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Massa vitae varius
                    orci in. Dignissim integer neque est vestibulum tellus sed
                    eget elit. Tincidunt turpis ac ut tincidunt eget feugiat.
                    Netus maecenas imperdiet massa amet dolor egestas.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Massa vitae varius
                    orci in. Dignissim integer neque est vestibulum tellus sed
                    eget elit. Tincidunt turpis ac ut tincidunt eget feugiat.
                    Netus maecenas imperdiet massa amet dolor egestas.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Massa vitae varius
                    orci in. Dignissim integer neque est vestibulum tellus sed
                    eget elit. Tincidunt turpis ac ut tincidunt eget feugiat.
                    Netus maecenas imperdiet massa amet dolor egestas.
                  </li>
                </ul>
              </Typography>
              <Typography variant={"h5"} className={" mt-4"}>
                key Responsibility
              </Typography>
              <Typography variant={"p"}>
                <ul className=" list-disc ps-10">
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Massa vitae varius
                    orci in. Dignissim integer neque est vestibulum tellus sed
                    eget elit. Tincidunt turpis ac ut tincidunt eget feugiat.
                    Netus maecenas imperdiet massa amet dolor egestas.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Massa vitae varius
                    orci in. Dignissim integer neque est vestibulum tellus sed
                    eget elit. Tincidunt turpis ac ut tincidunt eget feugiat.
                    Netus maecenas imperdiet massa amet dolor egestas.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Massa vitae varius
                    orci in. Dignissim integer neque est vestibulum tellus sed
                    eget elit. Tincidunt turpis ac ut tincidunt eget feugiat.
                    Netus maecenas imperdiet massa amet dolor egestas.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Massa vitae varius
                    orci in. Dignissim integer neque est vestibulum tellus sed
                    eget elit. Tincidunt turpis ac ut tincidunt eget feugiat.
                    Netus maecenas imperdiet massa amet dolor egestas.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Massa vitae varius
                    orci in. Dignissim integer neque est vestibulum tellus sed
                    eget elit. Tincidunt turpis ac ut tincidunt eget feugiat.
                    Netus maecenas imperdiet massa amet dolor egestas.
                  </li>
                </ul>
              </Typography>
              <div className=" my-10 text-center">
                <Link to="/career-details-form">
                  {" "}
                  <Button variant={"applyBtn"}>Apply</Button>
                </Link>
              </div>
            </div>
            <div>
              <div className=" p-9 rounded-2xl border border-primary bg-[#EAEAEA]">
                <Typography variant={"h5"} className={"mb-7"}>
                  Job Overview{" "}
                </Typography>
                <div className=" flex flex-col gap-7">
                  <div className=" flex items-center gap-2">
                    <Icon
                      icon={"fluent-mdl2:work"}
                      className=" w-9 h-9 text-brand-primary"
                    ></Icon>
                    <div>
                      <Typography
                        variant={"h5"}
                        className={" text-base font-body"}
                      >
                        Job Type
                      </Typography>
                      <Typography variant={"h6"} className={"font-normal"}>
                        Full time
                      </Typography>
                    </div>
                  </div>
                  <div className=" flex items-center gap-2">
                    <Icon
                      icon={"fluent-mdl2:work"}
                      className=" w-9 h-9 text-brand-primary"
                    ></Icon>
                    <div>
                      <Typography
                        variant={"h5"}
                        className={" text-base font-body"}
                      >
                        Job Type
                      </Typography>
                      <Typography variant={"h6"} className={"font-normal"}>
                        Full time
                      </Typography>
                    </div>
                  </div>
                  <div className=" flex items-center gap-2">
                    <Icon
                      icon={"fluent-mdl2:work"}
                      className=" w-9 h-9 text-brand-primary"
                    ></Icon>
                    <div>
                      <Typography
                        variant={"h5"}
                        className={" text-base font-body"}
                      >
                        Job Type
                      </Typography>
                      <Typography variant={"h6"} className={"font-normal"}>
                        Full time
                      </Typography>
                    </div>
                  </div>
                  <div className=" flex items-center gap-2">
                    <Icon
                      icon={"fluent-mdl2:work"}
                      className=" w-9 h-9 text-brand-primary"
                    ></Icon>
                    <div>
                      <Typography
                        variant={"h5"}
                        className={" text-base font-body"}
                      >
                        Job Type
                      </Typography>
                      <Typography variant={"h6"} className={"font-normal"}>
                        Full time
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Typography variant={"h5"} className={"my-7"}>
                  Our Location
                </Typography>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116811.28274226632!2d90.2072579433594!3d23.80605810000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e1609a4609%3A0xe976d75cb1f0633e!2sGrameen%20Health%20Care%20Services%20Ltd.!5e0!3m2!1sen!2sbd!4v1716717692548!5m2!1sen!2sbd"
                  className=" w-full h-96"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <Typography className={" py-11"} variant={"h2"}>
          Related Jobs
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
    </div>
  );
};

export default CareerDetails;
