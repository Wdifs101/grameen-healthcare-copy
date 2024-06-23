import jobLogo from "../../assets/icon/jobIcon1.png";
import Typography from "../Typography/Typography";
import { TfiBag } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiMoneyWavyBold } from "react-icons/pi";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const CarrierDetailsBanner = () => {
  return (
    <div className="bg-[#E6E9EE] h-[269px]  flex   justify-evenly">
      <div className="flex lg:w-[60%] items-center gap-10">
        <div>
          <img src={jobLogo} alt="" />
        </div>
        <div className="">
          <Typography className="font-semibold" variant="h4">
            Social Media Assistant
          </Typography>

          <div className="grid lg:grid-cols-4 grid-cols-2  gap-1   mt-1  lg:text-[20px] md:text-[19px] text-[18px]  ">
            <h2 className="flex lg:text-[20px] md:text-[19px] text-[18px] gap-1 items-center">
              <TfiBag />
              Full time
            </h2>

            <h2 className="flex lg:text-[20px] md:text-[19px] text-[18px] gap-1 items-center">
              <MdOutlineAccessTime />
              July 24,2023
            </h2>

            <h2 className="flex lg:text-[20px] md:text-[19px] text-[18px] gap-1 items-center">
              <IoLocationOutline />
              Barisal
            </h2>

            <h2 className="flex lg:text-[20px] md:text-[19px] text-[18px] gap-1 items-center">
              <PiMoneyWavyBold />
              60,000/month
            </h2>
          </div>
        </div>
      </div>

      <div className="  flex flex-col md:justify-end justify-center mt-2 items-center  mb-8">
        <h1 className="lg:text-[20px] mb-3 md:text-[18px] text-[16px] font-heading">
          Ends at:{" "}
          <span className="text-red-500 lg:text-[20px] md:text-[19px] text-[18px] font-heading">
            {" "}
            Sep 01,2023
          </span>{" "}
        </h1>
        <Link to="/career-details-form">
          <Button variant="applyBtn">Apply</Button>
        </Link>
      </div>

      <div></div>
    </div>
  );
};

export default CarrierDetailsBanner;
