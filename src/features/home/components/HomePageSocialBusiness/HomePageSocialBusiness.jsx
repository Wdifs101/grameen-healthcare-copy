import Typography from "../../../../shared/components/Typography/Typography";
import Button from "../../../../shared/components/Button/Button";
import HeadingLine from "../../../../shared/components/HeadingLine/HeadingLine";
import HomeSocialImage from "../../assets/home-social-image.png";
import btnarrow from "../../../../shared/assets/icon/arrow_icon.png";
import socialBG from "../../../../shared/assets/banner/social-banner_bg.jpg";
import { Link } from "react-router-dom";
const HomePageSocialBusiness = () => {
  return (
    <section
      // className="bg-[#F6F6F6]"
      style={{
        backgroundImage: `url(${socialBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid-cols-1 grid md:grid-cols-2 gap-5 md:gap-24 py-12 p-2 md:py-24 items-center">
        <div className="flex justify-center">
          <img src={HomeSocialImage} className="rounded-lg" />
        </div>
        <div>
          <HeadingLine variant={"h3"} className="mb-4">
            About Social Business
          </HeadingLine>
          <Typography
            variant={"p"}
            className=" mb-8 text-justify md:text-start"
          >
            {" "}
            <span className="text-[#0CD21D]">Social Business</span> is a
            business model operated to achieve a social goal; a cause-driven
            business where the initial investment of the investors/owners will
            be paid back gradually, and the investors/owners will not receive
            any dividend beyond that point.Purpose of the investment is purely
            to achieve one or more social objectives through the operation of
            the company; no personal gain is desired by the investors.The
            company must cover all costs and make profit, at the same time
            achieve the social objective, such as, healthcare for the poor,
            housing for the poor, financial services for the poor, nutrition for
            malnourished children, providing safe drinking water, introducing
            renewable energy, etc. while operating under a business structure.
          </Typography>
          {/* <Button variant={"generalBtn"}>More</Button> */}
        <Link to="/social-business">
        <button className="group px-5 py-2 hover:bg-[#0CD21D] duration-500 bg-black text-white overflow-hidden flex items-center gap-2 rounded-full relative">
            <img
              src={btnarrow}
              alt=""
              className="w-6 absolute left-0 transform -translate-x-20 group-hover:translate-x-2 transition-transform duration-500 ease-in-out"
            />
            <span className="group-hover:ml-5 duration-300">More</span>
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageSocialBusiness;
