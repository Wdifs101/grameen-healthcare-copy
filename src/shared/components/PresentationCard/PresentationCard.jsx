// import cardPic from "../../../features/EyeCamp/assets/eye-camp.png";
import Typography from "../Typography/Typography";
import { Icon } from "@iconify/react";
const PresentationCard = ({cardPic,detail,title}) => {
  return (
    <div>
      <img className="object-cover w-full max-h-[307px]" src={cardPic} alt="" />
      <div className="flex items-center justify-between">
        <Typography className="font-semibold mt-2" variant="h4">
          {title}
          
        </Typography>
        <Typography color="text-[#525050] ">Jul 24, 2024</Typography>
      </div>
      <Typography className="mt-1">
        {detail}
      </Typography>
      <Typography className="flex font-medium  mt-2 items-center gap-1">
        <Icon icon={"iconoir:plus-circle"}></Icon>
        Link
      </Typography>
    </div>
  );
};

export default PresentationCard;
