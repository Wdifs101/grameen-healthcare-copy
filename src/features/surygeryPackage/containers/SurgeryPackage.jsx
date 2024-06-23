import { Link } from "react-router-dom";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import Typography from "../../../shared/components/Typography/Typography";
import HistoryBanner from "../../../shared/components/GlobalBanner/GlobalBanner";
import picture from "../assets/surgeryPackage.png";
import { FaRegEye } from "react-icons/fa6";

const SurgeryPackage = () => {
  const arra = [1, 2, 3, 4];
  return (
    <div className="bg-background-primary  ">
      <div className="max-w-7xl mx-auto space-y-4 py-8r  md:space-y-8">
        <HistoryBanner image={picture}>Surgery Package</HistoryBanner>
        <div>
          <div className="p-2">
            <Typography className="mt-5 " variant="h4">
              Choose The Surgery
            </Typography>
            <HeadingLine variant="h4 "> you want to do</HeadingLine>
          </div>
        </div>

        <div className="flex justify-center mt-4 flex-wrap  gap-5 md:gap-9">
          {arra.map((item) => (
            <Link
              to="/surgeryPackageBudget"
              key={item}
              className="relative bg-white border-2 w-fit md:px-5 md:py-6 py-5 flex flex-col px-4 items-center cursor-pointer group overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-500 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 z-0"></div>
              <div className="relative z-10">
                <FaRegEye className="md:text-[24px] text-[20px] group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="relative z-10">
                <Typography
                  variant="h4"
                  className="group-hover:text-white transition-colors duration-500"
                >
                  cataract surgery
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurgeryPackage;
