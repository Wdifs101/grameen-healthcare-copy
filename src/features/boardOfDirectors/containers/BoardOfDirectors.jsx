
import HistoryBannerImage from "../../../shared/assets/banner/BannerBackground.png";
import GlobalBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import Typography from "../../../shared/components/Typography/Typography";
import BoardMembers from "../../../shared/components/boardMembers/BoardMembers";
import NURJAHAN from "../assets/Nurjahan.png";
import MuhammadYounus from "../assets/Muhammad_Younus.png";
import { Icon } from "@iconify/react/dist/iconify.js";
 import bannerImage from "../assets/boardMembers.png"
 import yunus from "../assets/boardMembers/yunussir-2021.jpeg"
 import Nurjahan  from "../assets/boardMembers/nur.jpeg"
 import MShahjahan  from "../assets/boardMembers/sha.jpeg"
 import Latifee  from "../assets/boardMembers/latifee.jpeg"
 import Ashraful   from "../assets/boardMembers/asraf.jpeg"
 import Lamiya    from "../assets/boardMembers/lamia.jpeg"
 import Hossain     from "../assets/boardMembers/mahmud_dr.jpeg"
 import moin from "../assets/boardMembers/Moin.jpeg"

const BoardOfDirectors = () => {
  return (
    <section className="  bg-background-primary">
      <div className="container p-2 md:p-0 mx-auto md:px-0 py-5 md:py-10">
        <GlobalBanner image={bannerImage}>
          Board of directors
        </GlobalBanner>
        {/* <section className="container mx-auto py-10 md:py-60 p-2 flex flex-col  w-full">
          <div className=" relative md:w-3/4 left-0  right-0 md:ms-auto drop-shadow-2xl">
            <div className="absolute -left-56 -bottom-5  flex md:items-end justify-end md:pe-4 ">
              <img
                src={MuhammadYounus}
                className=" w-full h-full rounded-3xl  md:w-[464px] md:h-[480px] md:relative md:-bottom-2 object-cover"
              />
              <div className="absolute bg-primary -bottom-8 -right-10 text-secondary py-7 px-11">
                <Typography
                  variant={"h3"}
                  className={"text-secondary font-normal font-secondary"}
                >
                  Prof. Muhammad Yunus
                </Typography>
                <Typography variant={"p"} className={"text-secondary text-sm"}>
                  Nobel Laureate
                </Typography>
              </div>
            </div>
            <div className=" me-20">
              <div className="bg-secondary w-full py-16 pr-16 ps-72 rounded-3xl  flex flex-col gap-5 md:gap-0  justify-end ">
                <div className="md:relative  md:mb-14">
                  <Typography variant={"h3"} className={"font-normal"}>
                    {" "}
                    “We must put poverty in museums, that's where it belongs to;
                    it doesn't belong to any human society. ”
                  </Typography>
                  <Icon
                    icon={"oui:quote"}
                    className=" w-20 h-20 absolute -bottom-10 right-40 opacity-10"
                  ></Icon>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="container mx-auto py-10 md:py-20 p-2">
          <div className=" grid grid-cols-1 md:grid-cols-2 w-full p-5 gap-10 md:gap-0 md:w-8/12 md:mx-auto bg-secondary rounded-3xl  drop-shadow-2xl">
            <div className=" md:mb-10 md:ml-14 md:mt-24 flex flex-col gap-5 md:gap-0  justify-end order-2 md:order-1">
              <div className="md:relative  md:mb-14">
                <h4 className=" text-3xl font-heading text-justify md:text-start">
                  “ I think, social business is the most logical thing to do. If
                  we had done that, we could reduce all the problems we have. ”
                </h4>
                <Icon
                  icon={"oui:quote"}
                  className=" w-20 h-20 absolute bottom-0 right-20 opacity-10"
                ></Icon>
              </div>
              <div>
                <h3 className=" text-3xl">Prof. Muhammad Yunus</h3>
                <span className="text-xs">Nobel Laureate,Founder and chairman of Grameen Healthcare Services</span>
              </div>
            </div>
            <div className=" w-full flex md:items-end justify-end md:pe-4 order-1 md:order-2">
              <img
                src={MuhammadYounus}
                className=" w-full h-full   md:w-[360px] md:h-[450px] md:relative md:bottom-8 object-cover"
              />
            </div>
          </div>
        </section>
        <div>
          <Typography variant={"h3"} className={"font-normal my-10"}>
            Board members
          </Typography>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
            <BoardMembers
              image={yunus}
              name={"Prof. Muhammad Yunus"}
              designation="Chairman"
            ></BoardMembers>
            <BoardMembers
              image={Nurjahan}
              name={"Nurjahan Begum"}
              designation="Board Member"
            ></BoardMembers>
            <BoardMembers
              image={MShahjahan}
              name={"M Shahjahan"}
              designation="Board Member"
            ></BoardMembers>
            <BoardMembers
              image={Latifee}
              name={"H. I. Latifee"}
              designation="Board Member"
            ></BoardMembers>
            <BoardMembers
              image={Ashraful}
              name={"Md.Ashraful Hasan"}
              designation="Board Member"
            ></BoardMembers>
            <BoardMembers
              image={Lamiya}
              name={"Lamiya Morshed"}
              designation="Board Member"
            ></BoardMembers>
            <BoardMembers
              image={moin}
              name={"Moin Chowdhur"}
              designation="Board Member"
            ></BoardMembers>
            <BoardMembers
              image={Hossain}
              name={"Mahmud Hossain"}
              designation="Board Member"
            ></BoardMembers>
           </div>
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
