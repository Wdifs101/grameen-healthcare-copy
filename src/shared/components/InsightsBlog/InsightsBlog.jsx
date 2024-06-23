import { Link } from "react-router-dom";
import blogPicture from "../../assets/demoPic/insightBlog.png";
import avatar from "../../assets/demoPic/menForInsight.jpeg";
import { BsPersonSquare } from "react-icons/bs";

import Typography from "../Typography/Typography";
const InsightsBlog = ({ link, imgSrc, label }) => {
  return (
    <div className=" border-2 rounded-xl bg-white p-3">
      <Link to={link}>
        <img
          className="w-full lg:h-[300px] md:h-72 h-64 rounded-xl "
          src={imgSrc}
          alt=""
        />
        <Typography
          className="bg-[#4B6BFB] mt-4 px-2 rounded-lg py-1 w-fit bg-opacity-5"
          color="text-[#08A316]"
        >
          {label}
        </Typography>

        <Typography className="font-semibold mt-3 line-clamp-2" variant="h5">
          On August 10, 2023, the Pediatric Department started its activity at
          Grameen GC Eye Hospital in Barishal. The initiative was made possible
          with the financial aid from Seva Foundation, USA. The Managing
          Director of Grameen Healthcare officially launched the Pediatric
          Department at the Barishal Hospital.
        </Typography>
        <div className="flex items-center mt-3 mb-1 gap-3">
          {/* <img className="object-cover w-10 rounded-full" src={avatar} alt="" /> */}
          <BsPersonSquare className="size-7" />
          <Typography color="text-[#97989F]">Tracey Wilson</Typography>
          <Typography color="text-[#97989F]">August 20, 2022</Typography>
        </div>
      </Link>
    </div>
  );
};

export default InsightsBlog;
