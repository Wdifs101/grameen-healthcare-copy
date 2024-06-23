
import Typography from "../../../shared/components/Typography/Typography";
import { CgProfile } from "react-icons/cg";
import bannerPic from "../assets/blog-banner.jpg"
import Button from "../../../shared/components/Button/Button";
const BlogsBanner = () => {
    return (
        <div>
             <div className="relative rounded-xl overflow-hidden lg:h-[450px] md:h-[380px] sm:h-[340px] h-[300px] bg-cover bg-center " style={{ backgroundImage: `url(${bannerPic})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto h-full flex items-end py-6 ">
        <div className=" text-white px-5">
          {/* <span className="bg-blue-500 px-3 py-1 rounded-full text-sm uppercase font-semibold">Technology</span> */}
         <Button variant="applyBtn">Technology</Button>
          <Typography variant="h3" className="mt-4  text-white ">The Impact of Technology on the <br /> Workplace: How Technology is Changing</Typography>
          <div className="mt-2 flex items-center  space-x-2 text-sm">
            <div className="flex items-center">
              <div className=" text-xl rounded-full flex items-center ">
                {/* Placeholder for author image */}
                <CgProfile />
              </div>
              <span className="ml-2">Tracey Wilson</span>
            </div>
            <span>&bull;</span>
            <span className="">August 20, 2022</span>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default BlogsBanner;