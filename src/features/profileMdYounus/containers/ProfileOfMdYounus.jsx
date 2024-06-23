import React, { useState } from "react";
import HistoryBannerImage from "../../../shared/assets/banner/BannerBackground.png";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import BackgroundImage from "../assets/BackgroundImage.png";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import OURVISIONIMAGE from "../assets/OurVisionImage.png";
import PictureOfMdYounus from "../assets/ProfileOfMdYounus.png";
import GrameenPartners from "../components/GrameenPartners/GrameenPartners";
import MohammadYounus from "../assets/Muhammad_Younus.png";
import Articles from "../../../shared/components/articles/Articles";
import QuotesOfProf from "../../../shared/components/quotesOfProf/QuotesOfProf";
import Button from "../../../shared/components/Button/Button";
import article1 from "../assets/article1 (2).jpeg"
import article2 from "../assets/article6.jpeg"
import article3 from  "../assets/Muhammad_Yunus_2.jpeg"
import article4 from "../../../shared/assets/demoPic/artical.png"
const ProfileOfMdYounus = () => {
  const [showMore, setShowMore] = useState(false);

  const quotes = [
    "Every time I see a problem, it starts tickling me to create a social business to solve it.",
    "To overcome poverty and the flaws of the economic crisis in our society, we need to envision our social life.",
    "I had no idea that I would ever get involved with something like lending money to poor people, given the circumstances in which I was working in Bangladesh.",
    "Access to quality education has enabled me to reach far beyond the Bangladeshi village I grew up in."
  ];
  return (
    <section className="  bg-background-primary">
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 items-center ">
          <div className="order-2 md:order-1">
            <Typography variant={"p"} className={" mb-3 md:mb-6"}>
              Profile
            </Typography>
            <Typography variant={"h1"} className={"font-normal mb-4 md:mb-16"}>
              Prof. Muhammad Yunus
            </Typography>
            <Typography variant={"h3"} className={"font-light"}>
            Nobel Laureate,Founder and chairman of Grameen Healthcare Center.
            </Typography>
          </div>
          <div className=" order-1 md:order-2">
            <img src={PictureOfMdYounus} />
          </div>
        </div>
      </div>
      {/* <GrameenPartners></GrameenPartners> */}
      <div className=" py-28 container mx-auto">
        <HeadingLine variant={"h4"} className="mb-3">
          About Prof. Muhammad Yunus{" "}
        </HeadingLine>
        <Typography variant={"h3"} className={"font-normal mb-6"}>
          “ Making money is a happiness. And that's a great incentive. Making
          other people happy is a super-happiness. ”
        </Typography>
        <div className=" grid grid-cols-3 gap-20">
          <div className=" col-span-1">
            <img src={MohammadYounus} />
          </div>
          <div className=" col-span-2">
            <Typography variant={"p"} className={"mb-8"}>
              Muhammad Yunus, a Bangladeshi economist, revolutionized poverty
              reduction through microcredit with the Grameen Bank, earning him
              the Nobel Peace Prize (2006). His visionary Grameen family of
              companies tackles poverty through social businesses like Grameen
              Phone and Grameen Shakti. Further recognized with the U.S.
              Presidential Medal of Freedom (2009) and the World Food Prize
              (1994), Yunus inspires global efforts to empower the poor.
            </Typography>
            <div className=" grid grid-cols-2">
              <div className=" w-2/4 mx-auto">
                <Typography variant={"h1"} className={"font-semibold"}>
                  113 +
                </Typography>
                <Typography variant={"h4"}>
                  International Awards from 26 countries
                </Typography>
              </div>
              <div className=" w-2/4 mx-auto">
                <Typography variant={"h1"} className={"font-semibold"}>
                  50
                </Typography>
                <Typography variant={"h4"}>
                  International Awards from 20 countries
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <HeadingLine variant={"h4"} className="mb-3">
          Articles Prof. Muhammad Yunus{" "}
        </HeadingLine>
        <div className=" flex flex-col gap-5">
          <Articles image={article1} title="Muhammad Yunus: Pioneer of Microfinance and Social Business
"> In 2006, Muhammad Yunus and the Grameen Bank were jointly awarded the Nobel Peace Prize for their efforts to create economic and social development from below. The Nobel Committee recognized their work in empowering the poor and promoting economic stability.</Articles>
          <Articles image={article4} title="Muhammad Yunus: Architect of Microfinance and Champion for the Poor">Muhammad Yunus was born on June 28, 1940, in Chittagong, Bangladesh. He was the third of nine children in a middle-class family. Yunus showed an early interest in social issues, which guided his future endeavors. He pursued higher education in economics, earning his Ph.D. from Vanderbilt University in Tennessee, USA</Articles>
          {/* <Articles></Articles> */}
          <Articles image={article2} title="Muhammad Yunus: The Visionary Behind Microfinance and Social Enterprise">

          Muhammad Yunus was born on June 28, 1940, in Chittagong, Bangladesh. He grew up in a large family that valued education and social service. Yunus earned his bachelor's and master's degrees in economics from Dhaka University and later received a Fulbright scholarship to study in the United States, where he earned a Ph.D. in economics from Vanderbilt University in 1971.
          </Articles>
        </div>
      </div>
      <div className="container mx-auto py-16">
        <HeadingLine variant={"h4"} className="mb-3">
          Quotes of Prof. Muhammad Yunus (Chairman){" "}
        </HeadingLine>
        {/* <div className="  grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <QuotesOfProf>  “ Every time I see a problem, it starts tickling me to create a social
        business to solve it. ” </QuotesOfProf>
          <QuotesOfProf > “ To overcome poverty and the flaws of the economic crisis in our society, we need to envision our social life. ”</QuotesOfProf>
          <QuotesOfProf> “ I had no idea that I would ever get involved with something like lending money to poor people, given the circumstances in which I was working in Bangladesh.” </QuotesOfProf>
          <QuotesOfProf> “ Access to quality education has enabled me to reach far beyond the Bangladeshi village I grew up in.” </QuotesOfProf>
        </div>
        <div className="  flex items-center justify-center mt-10">
          <Button variant={"generalBtn"}>More</Button>
        </div> */}
         <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {quotes.slice(0, showMore ? 4 : 2).map((quote, index) => (
          <QuotesOfProf key={index}>{quote}</QuotesOfProf>
        ))}
      </div>
      {!showMore && (
        <div 
          className="flex items-center justify-center mt-10"
          onClick={() => setShowMore(true)}
        >
          <Button variant={"generalBtn"}>More</Button>
        </div>
      )}
    </div>
      </div>
    </section>
  );
};

export default ProfileOfMdYounus;
