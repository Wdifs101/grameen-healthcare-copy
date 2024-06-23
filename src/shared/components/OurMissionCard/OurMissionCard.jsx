import iconPic from "../../assets/icon/OurMisson.png";
import Typography from "../Typography/Typography";
const OurMissionCard = ({ image, title, description }) => {
  return (
    <div className="border-2 rounded-lg flex-col md:flex-row flex p-5 bg-secondary items-center gap-5 ">
      <div className="w-1/2">
        <div className="w-12 h-12 flex items-center justify-center">
          <img src={image} alt="" className="object-cover  w-12 h-12" />
        </div>
      </div>
      <div className="w-1/2">
        <Typography variant="h4" className={"mb-1 text-center md:text-start"}>
          {title}
        </Typography>
        <Typography variant="p" className={"text-center md:text-start"}>
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default OurMissionCard;
