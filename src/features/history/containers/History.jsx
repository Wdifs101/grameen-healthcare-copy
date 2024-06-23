import React from "react";
import HistoryBannerImage from  "../assets/NewHistortyImage.png";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import HistoryStory from "../components/HistoryStory/HistoryStory";

const History = () => {
  return (
    <section className="  bg-background-primary">
      <div className="container mx-auto md:px-0 py-5 md:py-10">
        <GlobalBanner image={HistoryBannerImage}>Our History</GlobalBanner>
        <HeadingLine variant={"h3"} className="font-heading my-5 md:my-9">
          Our Story
        </HeadingLine>
        <HistoryStory></HistoryStory>
      </div>
    </section>
  );
};

export default History;
