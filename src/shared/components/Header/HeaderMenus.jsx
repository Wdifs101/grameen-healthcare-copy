import React from "react";
import MenuItem from "./MenuItem";
import {
  aboutUsSubmenu,
  newsAndPublicationsSubmenu,
  whatWeDoSubmenu,
} from "./SubmenuDetails";

const HeaderMenus = () => {
  return (
    <div className="flex items-center gap-4">
      <MenuItem url="/">Home</MenuItem>
      <MenuItem url="/about-us" submenu submenuDetails={aboutUsSubmenu}>
        About Us
      </MenuItem>
      <MenuItem url="/what-we-do" submenu submenuDetails={whatWeDoSubmenu}>
        What We Do
      </MenuItem>
      <MenuItem url="/news" submenu submenuDetails={newsAndPublicationsSubmenu}>
        News & Publication
      </MenuItem>
      <MenuItem url="/doctor-profile">Doctor Profile</MenuItem>
      {/* <MenuItem url="/appointment">Appointment</MenuItem> */}
      <MenuItem url="/career">Career</MenuItem>
      <MenuItem url="/contact-us">Contact Us</MenuItem>
    </div>
  );
};

export default HeaderMenus;
