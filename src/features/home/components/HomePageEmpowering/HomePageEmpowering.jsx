import Typography from "../../../../shared/components/Typography/Typography";
import Button from "../../../../shared/components/Button/Button";
import EmpoweringImageOne from "../../assets/empowering-first-image.png";
import EmpoweringImageTwo from "../../assets/empowering-second-image.png";
import EmpoweringImageThree from "../../assets/empowering-third-image.png";
import btnarrow from "../../../../shared/assets/icon/arrow_icon.png";
import { Link } from "react-router-dom";
const HomePageEmpowering = () => {
  return (
    <section className="bg-[#F8FAFF]">
      <div className="container mx-auto grid-cols-1 px-2 md:px-0 grid md:grid-cols-2 md:gap-24 gap-5 py-12 md:py-24 items-center">
        <div className="lg:px-36">
          <Typography
            variant={"body-2"}
            className={"mb-2 text-[#C48A11] font-medium"}
          >
            {" "}
            Empowering Sight, Empowering Lives
          </Typography>
          <Typography variant={"h3"} className={"mb-5 font-bold"}>
            {" "}
            Join Our Journey to Bring Light to Every Gaze
          </Typography>

          <div className=" flex items-center gap-5 mb-5 md:mb-8">
            <span className=" h-1 w-10  bg-brand-primary"></span>
            <Typography variant={"p"}>
              {" "}
              Join Our Movement to Illuminate Futures and Foster Change Through
              the Gift of Sight.
            </Typography>
          </div>
          {/* <Button variant={"generalBtn"}>Contribute</Button> */}
          <Link to="contribute">
          <button className="group px-5 py-2 hover:bg-[#0CD21D] duration-500 bg-black text-white overflow-hidden flex items-center gap-2 rounded-full relative">
            <img
              src={btnarrow}
              alt=""
              className="w-6 absolute left-0 transform -translate-x-20 group-hover:translate-x-2 transition-transform duration-500 ease-in-out"
            />
            <span className="group-hover:ml-5 duration-300">Contribute</span>
          </button></Link>
        </div>
        <div className=" flex items-center justify-center">
          <div>
            <div className="flex items-center">
              <img
                className=" hidden w-[320px] h-[154px] md:block md:relative md:-bottom-11 z-40 md:-right-11   object-fill"
                src={EmpoweringImageTwo}
              />
              <img
                className=" md:w-[285px] md:h-[285px] w-full object-cover mb-2  md:mb-0"
                src={EmpoweringImageOne}
              />
            </div>
            <img
              className="md:relative md:right-16 bottom-11 md:w-[440px] md:h-[258px] object-cover"
              src={EmpoweringImageThree}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageEmpowering;
