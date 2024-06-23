import FooterSocials from "./FooterSocials";
import FooterGallery from "./FooterGallery";
import FooterLinks from "./FooterLinks";
import FooterBottomPart from "./FooterBottomPart";
import footerBG from "../../../shared/assets/footer/footer_bg.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer
      style={{
        backgroundImage: `url(${footerBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <div className="pt-7 md:pt-14 mb-10 md:mb-20 grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 md:gap-20 justify-between p-2 md:p-0">
          <FooterSocials></FooterSocials>
          <FooterLinks></FooterLinks>
          <FooterGallery></FooterGallery>
        </div>
        <FooterBottomPart></FooterBottomPart>
      </div>
    </footer>
  );
};

export default Footer;
