import Logo from "../../assets/Logo/Logo.png";
import { FaHome } from "react-icons/fa";
import { FaFistRaised } from "react-icons/fa";
import { useState, useEffect } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { ImCross } from "react-icons/im";
import HeaderLogo from "../Header/HeaderLogo";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiNewspaperLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaSquarePhone, FaBriefcase } from "react-icons/fa6";
// import btnarrow from "../../../../shared/assets/icon/arrow_icon.png";
import btnarrow from "../../../shared/assets/icon/arrow_icon.png";
const NewHeader = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openCategory, setOpenCategory] = useState(null);
  const location = useLocation();

  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setOpenMobileMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setOpenMobileMenu(false);
  }, [location.pathname]);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShowNavbar(false);
      } else {
        // if scroll up show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`border-b-[1px]    border-b-gray-200 bg-white fixed top-0 w-full  py-4  transition-transform duration-500    mx-auto z-50 shadow-sm ${
        !openMobileMenu
          ? showNavbar
            ? "transform translate-y-0"
            : "transform -translate-y-full"
          : ""
      } `}
    >
      <nav className="flex items-center max-w-7xl   mx-auto justify-between h-full  font-bold">
        <div>
          <HeaderLogo></HeaderLogo>
        </div>

        <div className="lg:block hidden   space-x-4">
          <div className="lg:block hidden ">
            <div className="flex space-x-6">
              <NavLink to="/" className="text-lg  relative group font-normal">
                {" "}
                <span className="absolute -bottom-[6px]  w-[54px] h-0.5 bg-[#0CD21D] origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-90"></span>{" "}
                Home
              </NavLink>

              <div className="relative group">
                <h1 className="flex cursor-pointer  items-center space-x-1 text-lg font-normal">
                  <span>About Us</span>
                  <span className="absolute -left-2 -bottom-[6px] w-[100px] h-0.5 bg-[#0CD21D] origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-90"></span>
                  <IoIosArrowDown />
                </h1>
                <div className="dropdown-content border  absolute  invisible group-hover:visible     mt-2 w-[200px] bg-white shadow-lg hover:z-50 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <NavLink
                    to="/history"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    History
                  </NavLink>
                  <NavLink
                    to="/background"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Background
                  </NavLink>
                  <NavLink
                    to="/mission"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Mission
                  </NavLink>
                  <NavLink
                    to="/vision"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Vision
                  </NavLink>
                  <NavLink
                    to="/value"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Our Values
                  </NavLink>
                  <NavLink
                    to="/about-the-chairman"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    About The Chairman
                  </NavLink>
                  <NavLink
                    to="/partners-and-patrons"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Partners and Patrons
                  </NavLink>
                  <NavLink
                    to="/boards-of-directors"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Boards Of Directors
                  </NavLink>
                  <NavLink
                    to="/message-of-managing-director"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Message Of Managing Director
                  </NavLink>
                </div>
              </div>

              <div className="relative group">
                <h1 className="flex cursor-pointer items-center space-x-1 text-lg font-normal">
                  <span className="">What We Do</span>
                  <span className="absolute -bottom-[6px] -left-1 w-[130px] h-0.5 bg-[#0CD21D] origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-90"></span>
                  <IoIosArrowDown />
                </h1>
                <div className="dropdown-content absolute left-0 hover:z-50 mt-2 w-48 bg-white invisible group-hover:visible    shadow-lg opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <NavLink
                    to="/primary-eye-care-center"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Primary Eye Care Center
                  </NavLink>
                  <NavLink
                    to="/secondary-eye-hospital"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Secondary Eye Hospital
                  </NavLink>
                  <NavLink
                    to="/other-eye-services"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Other Eye Services
                  </NavLink>
                </div>
              </div>
              <div className="relative group">
                <h1 className="flex cursor-pointer items-center space-x-1 text-lg font-normal">
                  <span>News & Publication</span>
                  <span className="absolute -bottom-[6px] -left-1 w-[195px] h-0.5 bg-[#0CD21D] origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-90"></span>
                  <IoIosArrowDown />
                </h1>
                <div className="dropdown-content absolute left-0 hover:z-50 mt-2 w-48 bg-white shadow-lg invisible group-hover:visible    opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <NavLink
                    to="/news"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    News
                  </NavLink>
                  <NavLink
                    to="/blogs"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/events"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Events
                  </NavLink>
                  <NavLink
                    to="/brochures"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Brochures
                  </NavLink>
                  <NavLink
                    to="/presentation"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Presentation
                  </NavLink>
                  <NavLink
                    to="/training"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Training
                  </NavLink>
                  <NavLink
                    to="/eye-camp"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Eye Camp
                  </NavLink>
                  <NavLink
                    to="/press-release"
                    className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                  >
                    Press Release
                  </NavLink>
                </div>
              </div>
              <NavLink
                to="/doctor-profile"
                className="text-lg relative   group font-normal"
              >
                <span className="absolute -bottom-[5px] -left- w-[124px] h-0.5 bg-[#0CD21D] origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-90"></span>
                Doctor Profile
              </NavLink>
              <NavLink
                to="/career"
                className="text-lg relative group font-normal"
              >
                <span className="absolute -bottom-[5px]  w-[60px] h-0.5 bg-[#0CD21D] origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-90"></span>
                Career
              </NavLink>
              <NavLink
                to="/contact-us"
                className="text-lg relative group font-normal"
              >
                {" "}
                <span className="absolute -bottom-[5px] -left- w-[94px] h-0.5 bg-[#0CD21D] origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-90"></span>{" "}
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <Link to="/appointment">
            <button className="group px-6 py-[9px] hover:bg-[#DF4C2A] duration-500 bg-[#0CD21D] text-white overflow-hidden flex items-center gap-2 rounded-full relative">
              <img
                src={btnarrow}
                alt=""
                className="w-6 absolute left-0 transform -translate-x-20 group-hover:translate-x-2 transition-transform duration-500 ease-in-out"
              />
              <span className="group-hover:translate-x-4 duration-300">
                Appointment
              </span>
            </button>
          </Link>
        </div>

        <div
          onClick={() => setOpenMobileMenu(true)}
          className="block mr-5 cursor-pointer lg:hidden"
        >
          <TfiMenuAlt className="w-7 h-7" />
        </div>
      </nav>

      {/* mobile navbar(side drawer) start*/}
      <nav
        className={`fixed bg-gradient-to-tl from-[#d5f9f7] to-[#f7fde1]  overflow-scroll top-0 z-10 transition-all duration-500 h-screen lg:hidden bg-primeColor w-80 space-y-5 ${
          openMobileMenu
            ? "-translate-x-0 opacity-100"
            : "-translate-x-[110%] opacity-0"
        }`}
      >
        {/* logo */}
        <div>
          <Link className="flex justify-center" to="/">
            <img src={Logo} alt="" className="object-cover mt-5 w-[70%]" />
          </Link>
          <div
            onClick={() => setOpenMobileMenu(false)}
            className=" flex justify-between items-center px-3 pt-10 cursor-pointer -right-8 top-5 text-black font-semibold  text-xl"
          >
            Menu
            <ImCross className="text-black text-base  " />
          </div>
        </div>
        <hr />
        <div className="px-5 mt-4 ">
          {/* sdfsdffffffffffffffsdfffffsfdsdfsdfsdfsdfsdfsdfsdfsd */}

          <div className="space-y-6 h-full">
            <div className="border-b">
              <NavLink className="text-lg py-2 font-medium   hover:bg-gradient-to-tl from-[#d5f9f7] to-[#f4f6f0] flex items-center gap-2  ">
                <FaHome /> Home
              </NavLink>
            </div>

            <div>
              <h1
                className="flex cursor-pointer items-center  border-b justify-between  space-x-1   text-lg py-2 font-medium hover:bg-gradient-to-tl from-[#d5f9f7] to-[#f4f6f0]"
                onClick={() => handleCategoryClick("about")}
              >
                <span className="flex items-center gap-2">
                  <IoMdInformationCircleOutline className="text-xl" /> About Us
                </span>
                {openCategory == "about" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </h1>
              <div
                className={`overflow-hidden transition-max-height space-y-4 duration-500 ease-in-out ${
                  openCategory === "about" ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <NavLink
                  to="/history"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  History
                </NavLink>
                <NavLink
                  to="/background"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Background
                </NavLink>
                <NavLink
                  to="/mission"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Mission
                </NavLink>
                <NavLink
                  to="/vision"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Vision
                </NavLink>
                <NavLink
                  to="/about-the-chairman"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  About The Chairman
                </NavLink>
                <NavLink
                  to="/partners-and-patrons"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Partners and Patrons
                </NavLink>
                <NavLink
                  to="/boards-of-directors"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Boards Of Directors
                </NavLink>
                <NavLink
                  to="/message-of-managing-director"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Message Of Managing Director
                </NavLink>
              </div>
            </div>

            <div>
              <h1
                className="flex cursor-pointer items-center  border-b justify-between  space-x-1   text-lg py-2 font-medium hover:bg-gradient-to-tl from-[#d5f9f7] to-[#f4f6f0]"
                onClick={() => handleCategoryClick("whatWeDo")}
              >
                <span className="flex gap-2 items-center ">
                  <FaFistRaised /> What We Do
                </span>
                {openCategory == "whatWeDo" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </h1>
              <div
                className={`overflow-hidden transition-max-height space-y-4 duration-500 ease-in-out ${
                  openCategory === "whatWeDo" ? "max-h-40" : "max-h-0"
                }`}
              >
                <NavLink
                  to="/primary-eye-care-center"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Primary Eye Care Center
                </NavLink>
                <NavLink
                  to="/secondary-eye-hospital"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Secondary Eye Hospital
                </NavLink>
                <NavLink
                  to="/other-eye-services"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Other Eye Services
                </NavLink>
              </div>
            </div>

            <div>
              <h1
                className="flex cursor-pointer items-center  border-b justify-between  space-x-1   text-lg py-2 font-medium hover:bg-gradient-to-tl from-[#d5f9f7] to-[#f4f6f0]"
                onClick={() => handleCategoryClick("news")}
              >
                <span className="flex gap-2 items-center ">
                  {" "}
                  <RiNewspaperLine />
                  News & Publication
                </span>
                {openCategory == "news" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </h1>
              <div
                className={`overflow-hidden transition-max-height space-y-4 duration-500 ease-in-out ${
                  openCategory === "news" ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <NavLink
                  to="/news"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  News
                </NavLink>
                <NavLink
                  to="/blogs"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/events"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Events
                </NavLink>
                <NavLink
                  to="/brochures"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Brochures
                </NavLink>
                <NavLink
                  to="/presentation"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Presentation
                </NavLink>
                <NavLink
                  to="/training"
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Training
                </NavLink>
                <NavLink
                  to=""
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Eye Camp
                </NavLink>
                <NavLink
                  to=""
                  className="block px-4 py-2 text-gray-700 text-lg font-normal border-b hover:bg-gray-200"
                >
                  Press Release
                </NavLink>
              </div>
            </div>

            <div className="border-b">
              <NavLink className="text-lg py-2 font-medium flex items-center gap-2 hover:bg-gradient-to-tl from-[#d5f9f7] to-[#f4f6f0]">
                <CgProfile /> Doctor Profile
              </NavLink>
            </div>
            <div className="border-b">
              <NavLink className="text-lg py-2 font-medium hover:bg-gradient-to-tl flex  items-center gap-2 from-[#d5f9f7] to-[#f4f6f0] ">
                <FaBriefcase /> Career
              </NavLink>
            </div>
            <div className="border-b">
              <NavLink className="text-lg py-2 font-medium flex items-center gap-2 hover:bg-gradient-to-tl from-[#d5f9f7] to-[#f4f6f0]">
                <FaSquarePhone /> Contact Us
              </NavLink>
            </div>
          </div>

          {/* sfdfffffffffffffffffffffffffffffffffffffffff */}
        </div>
      </nav>
      {/* mobile navbar(side drawer) end*/}
    </div>
  );
};

export default NewHeader;
