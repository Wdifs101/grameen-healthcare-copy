 import Typography from "../../../shared/components/Typography/Typography";
import bannerPic from  "../assets/yunus-banner.png"
import { FaCircle } from "react-icons/fa";
const SingleBlogBanner = () => {
    return (
        <div>
             <div className="rounded-lg">
             <div className="relative w-full ">
        <img
          src={bannerPic} 
          alt="Description of the image"
          className="w-full  object-cover rounded-xl lg:h-[420 px] md:h-[420px] sm:h-[380px] h-[340px]"
        />
        <div className="absolute bottom-0 p-4 left-0 right-0 rounded-xl overflow-hidden bg-gray-800 bg-opacity-50 text-white   backdrop-blur-lg">
            <Typography variant="h4" className="text-[#6C40FF] font-light flex items-center gap-5 w-fit px-2 rounded-xl bg-[#F1ECFF]"><FaCircle className="text-[#6C40FF]" />Nobel Laureate Professor Muhammad Yunus talks about entrepreneurship.</Typography>
        <Typography className="text-white mt-3" variant="h4" >
        Mastering ChatGPT Blog Creation: Dos and Don ts for SaaS Marketing Managers
        </Typography>
        <div className="mt-2 flex items-center  space-x-2 text-sm">
            <div className="flex items-center">
              <span >Oct 19</span>
            </div>
            <span>&bull;</span>
            <span className="text-[#FFFFFF]">10 min read</span>
          </div>
        </div>
      </div>
        </div>
        </div>
    );
};

export default SingleBlogBanner;