import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import SubMenuTitle from "./SubMenuTitle";
import SubMenuLink from "./SubMenuLink";

const SubMenu = ({ menuChildren, submenuDetails, url }) => {
  return (
    <div className=" relative group cursor-pointer w-full lg:w-auto ">
      <SubMenuTitle menuChildren={menuChildren}></SubMenuTitle>
      <SubMenuLink submenuDetails={submenuDetails} url={url}></SubMenuLink>
    </div>
  );
};

export default SubMenu;
