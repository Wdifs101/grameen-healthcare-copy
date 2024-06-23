import React from "react";
import HistoryBannerImage from "../assets/social.jpg";
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

const SocialBusiness = () => {
  return (
    <section className="  bg-background-primary">
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <GlobalBanner image={HistoryBannerImage}>Social Business</GlobalBanner>
        <Typography className={" py-6"} variant={"h3"}>
          What is Social Business?
        </Typography>
        <Typography variant={"p"}>
          Social Business is a unique business model designed to address social
          issues while operating within the framework of a traditional business.
          Unlike conventional businesses focused solely on profit, Social
          Businesses aim to achieve social goals such as healthcare, education,
          poverty alleviation, and environmental sustainability.
        </Typography>
        <Typography className={" py-6"} variant={"h3"}>
          Key Characteristics:
        </Typography>
        <Typography variant={"p"}>
          Social Objectives: The primary goal of a Social Business is to create
          positive social impact rather than maximizing profits. This may
          include providing essential services to underserved communities or
          addressing environmental challenges. Non-Profit Distribution:
          Investors in a Social Business do not receive dividends or profits
          beyond the return of their initial investment. Instead, any financial
          gains are reinvested to further the social mission of the business.
          Ownership: Social Businesses may be owned by disadvantaged groups or
          communities, ensuring that the benefits of the business directly
          support those in need.
        </Typography>
        <Typography className={" py-6"} variant={"h3"}>
          History and Impact:
        </Typography>
        <Typography variant={"p"}>
          Social Business emerged in response to the limitations of traditional
          business models and government policies in addressing social issues.
          Championed by figures like Professor Muhammad Yunus, Social Businesses
          have gained recognition as a powerful tool for driving social change
          while promoting sustainability.
        </Typography>
        <Typography className={" py-6"} variant={"h3"}>
          The Future of Social Business:
        </Typography>
        <Typography variant={"p"}>
          As the concept of Social Business continues to evolve, there is
          growing emphasis on education, visibility in the marketplace, and
          impact assessment tools to guide investors and ensure effectiveness.
        </Typography>
        <Typography className={" py-6"} variant={"h3"}>
          Social Business Model:
        </Typography>

        <img
          className=" w-full h-full py-5 object-cover"
          src={BackgroundImage}
        />
      </div>
    </section>
  );
};

export default SocialBusiness;
