import React from "react";
import MenuItem from "./MenuItem";
import {
  aboutUsSubmenu,
  newsAndPublicationsSubmenu,
  whatWeDoSubmenu,
} from "./SubmenuDetails";

const HeaderMobileMenus = () => {
  return (
    <div className="relative">
      <div className=" z-50 absolute  -left-48  w-full flex flex-col items-start">
        <div className=" bg-secondary  flex flex-col items-start gap-2 lg:gap-4 px-5 py-5 rounded-lg shadow-lg whitespace-nowrap pr-2">
          <MenuItem url="/">Home</MenuItem>
          <MenuItem url="/about-us" submenu submenuDetails={aboutUsSubmenu}>
            About Us
          </MenuItem>
          <MenuItem url="/what-we-do" submenu submenuDetails={whatWeDoSubmenu}>
            What We Do
          </MenuItem>
          <MenuItem
            url="/news"
            submenu
            submenuDetails={newsAndPublicationsSubmenu}
          >
            News & Publication
          </MenuItem>
          <MenuItem url="/doctor-profile">Doctor Profile</MenuItem>
          <MenuItem url="/appointment">Appointment</MenuItem>
          <MenuItem url="/career">Career</MenuItem>
          <MenuItem url="/contact-us">Contact Us</MenuItem>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenus;
