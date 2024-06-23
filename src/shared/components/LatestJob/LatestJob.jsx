import jobIcon from "../../assets/icon/jobIcon.png";
import Typography from "../Typography/Typography";
import { LuDot } from "react-icons/lu";
const LatestJob = () => {
  return (
    <div className="flex gap-3 bg-[#E3F3F9] px-10 py-6 hover:cursor-pointer hover:scale-105 duration-300">
      <div>
        <img className="object-cover" src={jobIcon} alt="jobIcon" />
      </div>

      <div className="">
        <Typography className="font-bold font-body" variant="h5">
          Medical Assistant
        </Typography>
        <div className="flex items-end">
          {/* <Typography variant="p">Nomad</Typography> */}
          <LuDot />
          <Typography variant="p">Barisal, Bangladesh</Typography>
        </div>
        <div className="flex flex-wrap mt-2 gap-3">
          <Typography
            variant="p"
            color="text-[#56CDAD]"
            className=" bg-[#F6F6F6] px-[10px] lg:py-[4px] py-[6px] rounded-2xl w-fit font-semibold"
          >
            Full-Time
          </Typography>

          <span className="border-r inline-block"></span>

          <Typography
            variant="p"
            color="text-[#FFB836]"
            className=" border border-[#FFB836] px-[10px] lg:py-[4px] py-[6px] rounded-2xl w-fit bg-opacity-10"
          >
            Gynecologic
          </Typography>

          <Typography
            variant="p"
            color="text-[#4640DE]"
            className=" border border-[#4640DE] px-[10px] lg:py-[4px] py-[6px] rounded-2xl w-fit bg-opacity-10"
          >
            Physiatrist
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LatestJob;
