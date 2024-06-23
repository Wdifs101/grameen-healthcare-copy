import Typography from "../../../../shared/components/Typography/Typography";
import Button from "../../../../shared/components/Button/Button";
import btnarrow from "../../../../shared/assets/icon/arrow_icon.png";
import WelcomeImageOne from "../../assets/home-welcome-first-image.png";
import WelcomeImageTwo from "../../assets/home-welcome-second-image.png";
import WelcomeImageThree from "../../../../shared/assets/icon/about_shape1.png";
import { Link } from "react-router-dom";
// import TimeLine from "../../../../shared/components/timeLine/TimeLine";

const HomePageWelcome = () => {
  return (
    <section className="border-t bg-[#F6F6F6]">
      <div className="container mx-auto px-2 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pt-12 md:pt-24">
        <div className="flex  justify-center items-center md:pt-20">
          <div className="">
            <div className="mb-2 md:mb-0 flex  md:gap-5 items-center">
              <img
                className="w-full h-full md:w-[380px] md:h-[380px] object-cover"
                src={WelcomeImageOne}
              />
              <img
                className="w-24 md:relative md:left-14 md:bottom-20 hidden md:block object-fill rotate mx-auto"
                src={WelcomeImageThree}
              />
            </div>
            <img
              className="w-full h-full md:relative md:left-40 md:bottom-40 md:w-[350px] md:h-[350px] object-cover"
              src={WelcomeImageTwo}
            />
          </div>
        </div>
        <div className="pt-20">
          <Typography variant={"h3"} className={"mb-5 font-medium"}>
            {" "}
            <span className="font-semibold">Welcome to</span> <br />
            <span className="text-[#0CD21D] font-bold">
              Grameen Health Care Services Ltd.
            </span>
          </Typography>
          {/* <TimeLine>Since 2000</TimeLine> */}
          <Typography
            variant={"p"}
            className="mb-5 md:mb-8 mt-5 text-justify md:text-start"
          >
            {" "}
            Grameen Health Care Services Ltd. (GHS) is a Social Business
            Enterprise working to address the healthcare service sector,
            particularly eye care treatment in Bangladesh, especially to the low
            income and less privileged people. Unlike traditional businesses
            that are driven with the motive of profit-maximization, activities
            of GHS are operated by following the principles of Social Business
            for the maximum benefit of the society.
            <br />
            At present, GHS is operating four eye hospitals, fourteen primary
            eye care centers, a surface water treatment plant and a nursing
            college.
          </Typography>
          {/* <Button variant={"generalBtn"} className="group">
            More
          </Button> */}

          <Link to="background">
          <button className="group px-5 py-2 hover:bg-[#0CD21D] duration-500 bg-black text-white overflow-hidden flex items-center gap-2 rounded-full relative">
            <img
              src={btnarrow}
              alt=""
              className="w-6 absolute left-0 transform -translate-x-20 group-hover:translate-x-2 transition-transform duration-500 ease-in-out"
            />
            <span className="group-hover:ml-5 duration-300">
              More information
            </span>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageWelcome;
