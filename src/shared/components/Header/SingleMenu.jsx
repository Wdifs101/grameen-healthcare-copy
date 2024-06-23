import React from "react";
import { Link } from "react-router-dom";

const SingleMenu = ({ url, menuChildren }) => {
  return (
    <Link to={url} className=" flex group relative cursor-pointer">
      <span className="text-lg text-primary  font-normal  transition-all duration-300 hover:text-[#0CD21D]">
        {menuChildren}
      </span>
      {/* <span className="-bottom-1 absolute inline-block group-hover:w-3/4 w-0 h-[3px] rounded-[2px] bg-brand-primary transition-all duration-300"></span> */}
    </Link>
  );
};

export default SingleMenu;
