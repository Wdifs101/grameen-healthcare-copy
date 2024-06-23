import doctorPic from "../../assets/demoPic/doctorPic.jpg";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import btnarrow from "../../../shared/assets/icon/arrow_icon.png";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
const DoctorCard = ({ item }) => {
  // console.log(item);
  return (
    <div className="group overflow-hidden hover:drop-shadow  bg-gray-100 p-3 py-8 rounded duration-300">
      {/* <img
        className="object-cover h-[272px] w-full group-hover:scale-105 duration-300 mb-5 rounded"
        src={doctorPic}
        alt="doctorPic"
      /> */}
      <div className="flex justify-start items-center">
        <RxAvatar size={45} />
      </div>
      <div className="py-5 h-[210px]">
        <Typography variant="h4">{item?.name}</Typography>
        <Typography className="block mt-" variant="h7">
          {item?.designation}
        </Typography>
        <Typography className="block mt-1" variant="h7">
          {item?.trained.slice(0, 50)}...
        </Typography>
        <Typography className="block mt-1" variant="h7">
          {item?.position}
        </Typography>
        <Typography className="block mt-1" variant="h7">
          {item?.experience}
        </Typography>
      </div>
      {/* <Button className="rounded-md mt-2" variant="donateBtn">
        Appointment
      </Button> */}
      <div>
        <Link to={`/doctor-appointment/${item?._id}`}>
          <button className="mt-3 group px-5 py-2 hover:bg-[#0CD21D] duration-500 bg-black text-white overflow-hidden flex items-center gap-2 rounded-full relative">
            <img
              src={btnarrow}
              alt=""
              className="w-6 absolute left-0 transform -translate-x-20 group-hover:translate-x-2 transition-transform duration-500 ease-in-out"
            />
            <span className="group-hover:ml-5 duration-300">Appointment</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
