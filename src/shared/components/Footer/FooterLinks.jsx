import React from "react";
import { footerLinksList } from "./FooterLinksList";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className=" flex justify-center order-3 md:order-2">
      <div>
        <div className="grid grid-cols-2 gap-6 md:gap-12">
          <div className=" flex flex-col items-center md:items-start gap-3 md:gap-6">
            {footerLinksList.slice(0, 6).map((it, idx) => (
              <Link
                key={idx}
                className="text-lg text-center md:text-start"
                to={it.link}
              >
                {it.text}
              </Link>
            ))}
          </div>
          <div className=" flex flex-col gap-3 md:gap-6 items-center md:items-start">
            {footerLinksList.slice(6).map((it, idx) => (
              <Link
                target={it.text === "Grameen Organization" ? "_blank" : "_self"}
                key={idx}
                className="text-lg text-center md:text-start"
                to={it.link}
              >
                {it.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
