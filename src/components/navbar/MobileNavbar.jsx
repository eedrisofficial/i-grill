import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const MobileNavbar = ({ mobileNav, setMobileNav }) => {
  return (
    <React.Fragment>
      <div>
        {mobileNav ? (
          <div className="bg-black/80  fixed w-full h-screen  top-0 left-0"></div>
        ) : (
          ""
        )}
        <div
          className={
            mobileNav
              ? "fixed top-0 left-0 w-full bg-[#282828] text-white opacity-80 z-10 duration-500  px-8 scroll-0"
              : "fixed top-0 left-[-100%]  w-full  h-screen bg-black/60 z-10 duration-500 cursor-pointer"
          }
        >
          <AiOutlineClose
            size={40}
            onClick={() => setMobileNav(!mobileNav)}
            className="absolute right-4 top-4 cursor-pointer text-[#e35452] animate-pulse hover:animate-none  "
          />
          <nav className="">
            <ul className="text-[1.5rem] font-medium flex flex-col  z-0  gap-8  py-4  hover:cursor-pointer">
              <Link
                onClick={() => setMobileNav(!mobileNav)}
                to="/"
                className="hover:text-[#E53633] duration-300 "
              >
                Home
              </Link>
              <Link
                onClick={() => setMobileNav(!mobileNav)}
                to="/order"
                className="hover:text-[#E53633] duration-300"
              >
                Order
              </Link>
              <Link
                onClick={() => setMobileNav(!mobileNav)}
                to="/contact"
                className="hover:text-[#E53633] duration-300"
              >
                Contact us
              </Link>
              <Link
                onClick={() => setMobileNav(!mobileNav)}
                to="/about"
                className="hover:text-[#E53633] duration-300"
              >
                About us
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileNavbar;
