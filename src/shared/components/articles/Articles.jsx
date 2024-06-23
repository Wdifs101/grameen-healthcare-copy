import articlePic from "../../assets/demoPic/artical.png";

import { AiOutlinePlusCircle } from "react-icons/ai";
import Typography from "../Typography/Typography";
import { Link } from "react-router-dom";

const Articles = ({image,title,children}) => {
  return (
    <div className="grid  lg:grid-cols-3 grid-cols-1 items-center  bg-[#EBF5F0]   lg:gap-8 gap-0 lg:mt-0  ">
      <div className="col-span-1  ">
        <img
          className="h-60 w-full bg-[#EBF5F0]  object-cover"
          src={image}
          alt="history Details"
        />
      </div>
      <div className="col-span-2  bg-[#EBF5F0] ">
        <Typography className="font-semibold mt-3" variant="h4">
          {title}
        </Typography>
        <Typography className="mt-3" variant="p">
        {children}
        </Typography>

       <Link to="/blogs/1">
       <Typography
          variant="body1"
          className="flex font-medium cursor-pointer  mt-3 items-center gap-1"
        >
          <AiOutlinePlusCircle />
          Continue Reading
        </Typography>
       </Link>
      </div>
    </div>
  );
};

export default Articles;
