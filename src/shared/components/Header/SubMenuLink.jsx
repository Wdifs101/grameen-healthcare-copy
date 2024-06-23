import React from "react";
import { Link } from "react-router-dom";

const SubMenuLink = ({ submenuDetails, url }) => {
  return (
    <div className="opacity-0  z-10  bg-white transition-all duration-300 group-hover:opacity-100 lg:absolute bottom-0 lg:translate-y-full w-[187px] border-b-[1px] right-0 border-[#E5E7EB] rounded-sm group-hover:mt-2 lg:group-hover:pt-0 lg:pt-5 flex flex-col lg:w-[200px]">
      {submenuDetails &&
        submenuDetails?.length > 0 &&
        submenuDetails?.map((it) => {
          return (
            <Link
              key=""
              to={it?.link}
              className="hover:scale-105 transition-all text-wrap hidden group-hover:block duration-500 hover:bg-[#E5E7EB] p-2 border-b-[1px] border-b-[#E5E7EB
        ]"
            >
              <span className=" text-primary">{it?.text}</span>
            </Link>
          );
        })}
    </div>
  );
};

export default SubMenuLink;
