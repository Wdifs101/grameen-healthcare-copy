import Typography from "../../../shared/components/Typography/Typography";
import bannerPic from "../assets/newsBanner.jpg"

const NewsBanner = () => {
    return (
        <div>
        <div className="relative rounded-xl overflow-hidden lg:h-[450px] md:h-[380px] sm:h-[340px] h-[300px] bg-cover bg-center " style={{ backgroundImage: `url(https://static.dw.com/image/66698516_605.jpg)` }}>
 <div className="absolute inset-0 bg-black opacity-50"></div>
 <div className="relative container mx-auto h-full flex items-end py-6 ">
   <div className=" text-white px-5">

     <Typography variant="h3" className="mt-4  text-white ">The Impact of Technology on the <br /> Workplace: How Technology is Changing</Typography>
     <div className="mt-2 flex items-center  space-x-2 text-sm">
       <span className="">August 20, 2022</span>
     </div>
   </div>
 </div>
</div>
   </div>
    );
};

export default NewsBanner;