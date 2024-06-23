import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const SubMenuTitle = ({ menuChildren }) => {
  return (
    <div className="flex items-center  justify-between lg:justify-start w-full lg:w-auto gap-1 ">
      <span className="text-lg  text-primary  font-normal transition-all duration-300">
        {menuChildren}
      </span>
      <div className="block group-hover:hidden ">
        <Icon icon="iconamoon:arrow-down-2-light" className="text-lg"></Icon>
      </div>
      <div className="hidden group-hover:block">
        <Icon icon="iconamoon:arrow-up-2-light" className=" text-lg"></Icon>
      </div>
    </div>
  );
};

export default SubMenuTitle;
