
import React from "react";
import HistorImage1 from "../../assets/HistoryImage-1.png";
import HistorImage2 from "../../assets/HistoryImage-2.png";
import HistorImage3 from "../../assets/HistoryImage-3.png";

import HistoryDetails from "../../../../shared/components/historyDetails/HIstoryDetails";


const HistoryStory = () => {
  return (
    <div className=" px-2 md:px-0">
      <HistoryDetails
        className="py-5 md:py-11"
        image={HistorImage1}
        title={"The Situation in Bangladesh:"}
      >
        In Bangladesh, over 750,000 people are blind among 30+ populations, with
        80% of blindness attributed to cataract. Every year, approximately
        120,000 cataract patients are added to this number. Moreover, over 6
        million people in Bangladesh require vision correction, while
        approximately 150,000 individuals with irreversible blindness need
        rehabilitation. Among them, about 40,000 are visually impaired women and
        children, with an estimated 12,000 affected by cataract. Compounding
        this issue is the fact that 80% of visually impaired persons reside in
        rural areas, where treatment facilities are notably lacking, given that
        90% of doctors and paramedics are urban-based.
      </HistoryDetails>
      <HistoryDetails
        className=" py-5 md:py-11"
        image={HistorImage2}
        order={"right"}
        title={"The Link Between Poverty and Health:"}
      >
        Poverty and health are deeply intertwined. Poverty is both a cause and a
        consequence of poor health. Recognizing this, Grameen Bank emphasizes
        the importance of addressing health issues for sustainable poverty
        reduction. Limited access to income often results in social isolation,
        stress, and poorer mental and physical health. Conversely, chronic
        conditions can exacerbate poverty, leading to a vicious cycle of
        deprivation and ill health.
      </HistoryDetails>
      <HistoryDetails
        className=" py-5 md:py-11"
        image={HistorImage3}
        title={
          "Initiatives by Grameen Trust and Grameen Health Care Services Ltd.:"
        }
      >
        In 1993, Grameen Trust launched the Rural Health Program (RHP) to
        provide quality primary health care services to both Grameen Bank
        members and non-members. This program focuses on preventive and
        promotional health services, with an emphasis on family planning,
        reproductive health, maternal, and child health. Building on the success
        of RHP, Grameen Health Care Services Ltd. (GHS) was established by Prof.
        Muhammad Yunus. GHS aims to provide affordable secondary and tertiary
        healthcare facilities to the low-income population, especially those in
        rural areas. Operating as a non-dividend Social Business Enterprise, GHS
        embodies the commitment to address the healthcare needs of marginalized
        communities in Bangladesh.
      </HistoryDetails>
    </div>
  );
};

export default HistoryStory;
