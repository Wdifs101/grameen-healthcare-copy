import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

const SocialIcons = ({ url, iconName }) => {
  return (
    <Link
      className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#D9D9D9] text-primary"
      to={url}
    >
      <Icon icon={iconName} className=" w-8 h-8  md:w-10 md:h-10"></Icon>
    </Link>
  );
};

export default SocialIcons;
