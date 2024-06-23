import React from "react";
import HistoryBannerImage from "../../../shared/assets/banner/BannerBackground.png";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import BackgroundImage from "../assets/BackgroundImage.png";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import OURVISIONIMAGE from "../assets/OurVisionImage.png";
import ManagingDirector from "../assets/ManagingDirector.png";
import bannerImageDirectors from "../assets/bannerImageDirectors.jpg"
const ManagingDirectorMessage = () => {
  return (
    <section className="  bg-background-primary">
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        {/* <GlobalBanner image={bannerImageDirectors}>
          Massage of the managing director
        </GlobalBanner> */}
        <div className=" py-12 grid grid-cols-1 md:grid-cols-3 gap-7">
          <div>
            <img className=" w-full" src={ManagingDirector} />
            <div className=" px-5 py-2 border border-primary mt-2">
              <Typography
                variant={"h4"}
                className={"font-heading font-medium text-center"}
              >
                Shamsul Haque Ahmed
              </Typography>
              <Typography
                variant={"h4"}
                className={"font-heading font-medium text-center"}
              >
                Managing Director
              </Typography>
            </div>
          </div>
          <div className=" col-span-2">
            <p>
              I would like to take this opportunity to welcome you to the world
              of Grameen Health Care Services Ltd.(GHS)
              <br />
              <p>
                GHS is a healthcare organization of Grameen family, consisting
                of chain eye hospitals at district level. The philosophy of
                the GHS is based on the pioneer concept of "Social Business
                Enterprise" of Nobel Laureate Professor Dr. Muhammad Yunus. GHS
                was incorporated in 2006 and registered as a private Limited
                Company under the Company Act,1994 of Bangladesh.
              </p>
              <br />
              <p>
                GHS was established with the view of contributing in health
                sector of Bangladesh, especially to make the quality health care
                services accessible and affordable to middle and low income
                people living in the urban, semi urban and rural areas
                Bangladesh. GHS has not only involved itself in building up
                health institutions but also engaged in supporting other
                institutions contributing in the health sector.
              </p>
              <br />
              <p>
                Currently GHS is operating four eye hospitals in Bogura,
                Barishal, Thakurgaon and Satkhira district.Besides providing
                treatment for eye diseases in the hospital environment, GHS has
                expanded its operation to the rural areas through its outreach
                program including conducting eye camp & awareness program on
                regular basis. We are going to establish several vision centers
                in the semi urban and rural areas where the dwellers will get
                the basic eye care facilities.
              </p>
              <br />
              <p>
                In 2010, GHS has established the first Nursing College called
                "Grameen Caledonian College of Nursing (GCCN)". This is the
                first Nursing College initiated by Grameen in collaboration with
                NIKE Foundation and Glasgow Caledonian University of Glasgow,
                UK. GHS has planned to establish more nursing colleges in near
                future.
              </p>
            </p>
          </div>
        </div>
        <div>
          <p>
            Grameen Veolia Water (GVW) is a Social Business joint venture
            between GHS and Veolia Water AMI. The Company started its first
            plant at Goalmari of Daudkandi. A sub-district within the territory
            of Cumilla district. The first plant of GVW at Goalmari is supplying
            pure drinking water to the consumers of Bangladesh.
          </p>
          <p>
            We are continually striving to serve the humanity with compassion
            and care.
          </p>
          <p>I wish success of GHS in every aspect of its initiatives.</p>
        </div>
      </div>
    </section>
  );
};

export default ManagingDirectorMessage;
