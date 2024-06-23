import Typography from "../../../shared/components/Typography/Typography";
import bannerPic from "../assets/bannerPicture.jpeg";

const SubspecialityBanner = () => {
    return (
        <div className="rounded-lg">
             <div className="relative w-full ">
        <img
          src={bannerPic} 
          alt="Description of the image"
          className="w-full  object-cover lg:h-[462px] md:h-[380px] sm:h-[340px] h-[300px]"
        />
        <Typography variant="h5" className="absolute bottom-0 p-4 left-0 right-0 bg-gray-500 bg-opacity-50 text-white   backdrop-blur-sm">
          Cataracts
        </Typography>
      </div>
        </div>
    );
};

export default SubspecialityBanner;