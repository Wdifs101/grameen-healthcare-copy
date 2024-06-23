import eventPic from "../../assets/demoPic/evenPic.png";
import eventPNG from "../../assets/demoPic/Vector.png";
import Typography from "../Typography/Typography";
const OurEvents = ({ image, event }) => {
  return (
    <div className="p-2 group overflow-hidden">
      <img
        className="h-[224px] rounded-xl   w-full object-cover group-hover:scale-105 duration-300"
        src={image}
        alt="event"
      />
      <div className="p-1  ">
        <div className="flex  mt-2 justify-between">
          <Typography className="flex gap-1 items-center">
            <h1 className="w-[40px] h-[0px] border-[1px] border-[#08A316]"></h1>
            By HolderName
          </Typography>
          <Typography className="flex gap-1 font-semibold items-center">
            <img className="h-8 w-4 object-cover" src={eventPNG} alt="" />
            {event}
          </Typography>
        </div>

        <div className="flex items-center  mt-2 justify-between gap-5">
          <Typography className="text-center ">
            <Typography variant="h4">05</Typography>
            <Typography variant="h4">Feb</Typography>
          </Typography>
          <Typography className="font-semibold" variant="h5">
            Celebrate 10th Hospital Day-Barishal
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
