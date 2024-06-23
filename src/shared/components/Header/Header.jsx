import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // Importing useLocation for route change detection
import HeaderLogo from "./HeaderLogo";
import HeaderMenus from "./HeaderMenus";
import HeaderMobileMenus from "./HeaderMobileMenus";
import { Icon } from "@iconify/react";
import MenuItem from "./MenuItem";
import btnarrow from "../../../shared/assets/icon/arrow_icon.png";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const location = useLocation(); // Access the current location

  const openMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setMobileMenuOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      toggleButtonRef.current?.focus();
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    // Close the mobile menu when the location changes
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="container mx-auto flex items-center justify-center gap-20 py-5">
      <HeaderLogo />
      <div className="hidden lg:block">
        <HeaderMenus />
      </div>
      <div className="hidden md:block">
        <MenuItem url="/appointment">
          <button className="group px-5 py-2 hover:bg-[#DF4C2A] duration-500 bg-[#0CD21D] text-white overflow-hidden flex items-center gap-2 rounded-full relative">
            <img
              src={btnarrow}
              alt=""
              className="w-6 absolute left-0 transform -translate-x-20 group-hover:translate-x-2 transition-transform duration-500 ease-in-out"
            />
            <span className="group-hover:translate-x-4 duration-300">
              Appointment
            </span>
          </button>
        </MenuItem>
      </div>
      <div className="lg:hidden p-2 relative" ref={mobileMenuRef}>
        <button
          aria-label="Toggle mobile menu"
          onClick={openMobileMenu}
          className="w-10 h-10 focus:outline-none"
          ref={toggleButtonRef}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Icon className="w-10 h-10 cursor-pointer" icon={"mdi-light:menu"} />
        </button>
        <div
          id="mobile-menu"
          className={`transition-all duration-500 ${
            mobileMenuOpen ? "max-h-40" : "max-h-0 overflow-hidden"
          } absolute top-full left-0 right-0 bg-white shadow-md`}
        >
          <HeaderMobileMenus />
        </div>
      </div>
    </nav>
  );
};

export default Header;
