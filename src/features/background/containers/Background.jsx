import React from "react";
import HistoryBannerImage from "../assets/bannerImageBackGroound.jpg";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import BackgroundImage from "../assets/BackgroundImage.png";

const Background = () => {
  return (
    <section className="  bg-background-primary">
      <div className="container mx-auto md:px-0 py-5 md:py-10">
        <GlobalBanner image={HistoryBannerImage}>Background</GlobalBanner>
        <Typography className={" py-6"} variant={"h3"}>
          Background
        </Typography>
        <Typography variant={"p"}>
          GHS (Grameen Health Care Services Ltd.) is a social business
          enterprise established in 2006 under the Bangladesh Company Act, 1994.
          It was initiated and inaugurated by Nobel Laureate Professor Muhammad
          Yunus, who currently serves as the chairman of our board of directors.
        </Typography>
        <Typography className={" py-6"} variant={"h3"}>
          Affiliation with Grameen Family:
        </Typography>
        <Typography variant={"p"}>
          GHS is proud to be a member of the esteemed Grameen family. We operate
          successfully by embracing the concept of Social Business and a
          cross-subsidy model.
        </Typography>
        <Typography className={" py-6"} variant={"h3"}>
          Stakeholders:
        </Typography>
        <Typography variant={"p"}>
          <p>
            GHS is supported by several key stakeholders within the Grameen
            family:
          </p>
          <ul className=" list-disc ps-5">
            <li>Grameen Telecom Trust</li>
            <li>Grameen Kallyan</li>
            <li>Grameen Shakti</li>
            <li>Grameen Telecom</li>
          </ul>
        </Typography>
        <img
          className=" w-full h-full py-5 object-cover"
          src={BackgroundImage}
        />
      </div>
    </section>
  );
};

export default Background;
