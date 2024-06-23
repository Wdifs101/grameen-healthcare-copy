import { RxAvatar } from "react-icons/rx";
import HeadingLine from "../../../shared/components/HeadingLine/HeadingLine";
import Typography from "../../../shared/components/Typography/Typography";
import image from "../assets/avatar.png";

const DoctorDetails = ({ item }) => {
  return (
    <div className="space-y-9">
      <div className="flex sm:flex-row flex-col gap-7">
        <div>
          <img
            className="object-cover lg:h-[320px] md:h-[300px] sm:h-[270px] h-[260px] w-full"
            src={image}
            alt="doctorPic"
          />
        </div>

        <div className="space-y-1 max-w-5xl">
          <Typography variant="h4">{item?.name}</Typography>
          <Typography className="block mt-" variant="h7">
            {item?.designation}
          </Typography>
          <Typography className="block mt-1" variant="h7">
            {item?.trained}
          </Typography>
          <Typography className="block mt-1" variant="h7">
            {item?.position}
          </Typography>
          <Typography className="block mt-1" variant="h7">
            {item?.experience}
          </Typography>
        </div>
      </div>

      <div>
        <HeadingLine variant="h3">About</HeadingLine>
        <Typography className="mt-4">{item?.about}</Typography>
      </div>
    </div>
  );
};

export default DoctorDetails;
