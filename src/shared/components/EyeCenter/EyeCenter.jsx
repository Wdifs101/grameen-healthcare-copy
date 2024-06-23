import eyeCenterImage from "../../assets/demoPic/eyeCenter.png";
import Typography from "../Typography/Typography";

const EyeCenter = ({ img, title, children }) => {
  return (
    <div className="flex border border-[#B7B7B7] md:flex-row flex-col bg-white rounded-xl justify-around md:gap-7 md:p-5 sm:p-4 p-3">
      <div className=" h-[245px] w-[25%]">
        <img
          className="object-cover h-full w-full"
          src={img}
          alt="eyeCenterPicture"
        />
      </div>

      <div className="md:mt-7 mt-3 w-[75%]">
        <Typography className="font-semibold " variant="h6">
          {title}
        </Typography>
        <Typography variant="h7" className="mt-1">
          {children}
        </Typography>
      </div>
    </div>
  );
};

export default EyeCenter;
