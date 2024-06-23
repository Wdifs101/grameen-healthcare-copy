import React from "react";
import HistoryBannerImage from "../../../shared/assets/banner/BannerBackground.png";

import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import BackgroundImage from "../assets/BackgroundImage.png";
import OURVISIONIMAGE from "../assets/OurVisionImage.png";
import OurMissionCard from "../../../shared/components/OurMissionCard/OurMissionCard";
import Maintainence from "../assets/Maintenance.png";
import OurMissionImage from "../assets/OurMissionImage.png";
import { PartnershipCard } from "../../../shared/components/PartnershipCard/PartnershipCard.1";
import fred from "../assets/partanersLogo/fred.jpeg";
import lavelle from "../assets/partanersLogo/lavelle.png";
import Nike from "../assets/partanersLogo/Nike Foundation.jpeg";
import sightsavers from "../assets/partanersLogo/sightsavers.png";
import orbise from "../../../shared/assets/Logo/brandLogo.png";
import seva from "../assets/partners-3.png";
import arvind from "../assets/arvind-eye-hospitals.jpg";
import lv from "../assets/Logo_of_L._V._Prasad_Eye_Institute.jpg";
import sbh from "../assets/logosbh.png";
import bannerImage from "../assets/hospital.jpg";
const PartnerAndPatrons = () => {
  return (
    <section className="  bg-background-primary">
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <GlobalBanner image={bannerImage}>Partner & Patrons</GlobalBanner>
        <div className=" py-8  ">
          <Typography variant={"h3"} className={"text-center pb-4"}>
            Together We Thrive
          </Typography>
          <div className=" flex items-center justify-center gap-5 md:gap-10 mb-9">
            <span className=" w-16 md:w-36 h-[2px] bg-brand-primary"></span>
            <Typography variant={"h4"} className={"text-center"}>
              Together We Thrive
            </Typography>
            <span className=" w-16  md:w-36 h-[2px] bg-brand-primary"></span>
          </div>
          <div className=" grid grid-cols-1 gap-5 md:gap-y-9 md:gap-x-11 md:px-11">
            <PartnershipCard name="Orbis" image={orbise}>
              Orbis International started its journey in Bangladesh in 1985
              through Flying Eye Hospital Program with an aim to reduce
              avoidable blindness. Orbis’s Bangladesh long term programs started
              in 2000. Since then, Orbis has achieved remarkable success and
              many ‘first’ with the government and partners to plan and
              implement the National Eye Care plan towards achieving universal
              eye health coverage to reduce avoidable blindness.
            </PartnershipCard>
            <PartnershipCard name="The Fred Hollows Foundation" image={fred}>
              There are 43.3 million people around the world living with
              blindness. Almost 90% of these people live in developing
              countries. Blindness means that children can’t go to school,
              providers can’t work to support their families, and older people
              lose their independence. The good news is that four out of five
              people who are blind don’t need to be. This means we can do
              something to prevent, treat or manage their blindness.
            </PartnershipCard>
            <PartnershipCard image={lavelle} name="Lavelle foundation">
              Lavelle foundation is an eye-care network, established by Dr.
              Gullapalli Nageswara Rao, an ophthalmologist, at Hyderabad, in
              1986. It is a non-profit, multi-campus, non-governmental
              institution.[1] With more than 275 eye-care centres in India, it
              is the largest eye-care network in the world. LVPEI is a World
              Health Organization (WHO) collaborating centre, and an affiliate
              hospital of Harvard Medical School.[3] It is the first eye
              hospital to be accredited by the National Accreditation Board for
              Hospitals & Healthcare Providers (NABH).
            </PartnershipCard>
            <PartnershipCard
              image={sightsavers}
              name="Sightsavers International"
            >
              Sightsavers work to eliminate avoidable blindness and promote the
              rights of people with disabilities.
            </PartnershipCard>
            <PartnershipCard image={Nike} name="Nike Foundation">
              Nike Foundation (NF) promotes the health development of adolescent
              girls as powerful agents of change in the developing world. NF
              believes that the adolescent girls are the best return on
              investment for breaking inter generational cycles of poverty.{" "}
            </PartnershipCard>
            <PartnershipCard image={seva} name="Seva Foundation">
              Seva Foundation (NF) promotes the health development of adolescent
              girls as powerful agents of change in the developing world. NF
              believes that the adolescent girls are the best return on
              investment for breaking inter generational cycles of poverty.{" "}
            </PartnershipCard>
            <PartnershipCard image={sbh} name="Social Business Earth">
              Social Business Earth promotes the health development of
              adolescent girls as powerful agents of change in the developing
              world. NF believes that the adolescent girls are the best return
              on investment for breaking inter generational cycles of poverty.{" "}
            </PartnershipCard>
            <PartnershipCard image={arvind} name="Arvind eye hospitals">
              Arvind eye hospital promotes the health development of adolescent
              girls as powerful agents of change in the developing world. NF
              believes that the adolescent girls are the best return on
              investment for breaking inter generational cycles of poverty.{" "}
            </PartnershipCard>
            <PartnershipCard image={lv} name="LV prasad eye institute">
              LV prasad eye institute promotes the health development of
              adolescent girls as powerful agents of change in the developing
              world. NF believes that the adolescent girls are the best return
              on investment for breaking inter generational cycles of poverty.{" "}
            </PartnershipCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerAndPatrons;
