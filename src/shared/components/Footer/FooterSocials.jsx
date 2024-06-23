import React from "react";
import SocialIcons from "./SocialIcons";
import logo from "../../assets/Logo/Logo.png"

const FooterSocials = () => {
  return (
    <div className="mt-5 md:mt-10">
      <img src={logo} alt="grameen health center logo" className="w-3/4 h-20"/>
      <div className="flex justify-center md:justify-start gap-3 mt-10">
        <SocialIcons url="#" iconName="ic:sharp-facebook"></SocialIcons>
        <SocialIcons
          url="#"
          iconName="entypo-social:linkedin-with-circle"
        ></SocialIcons>
        <SocialIcons url="#" iconName="mingcute:youtube-fill"></SocialIcons>
      </div>
    </div>
  );
};

export default FooterSocials;
