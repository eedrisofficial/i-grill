import React, { useContext, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { MdShoppingCart } from "react-icons/md";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();
  const { state } = useContext(GlobalContext);
  const isActive = (path) => location.pathname === path;

  const cartItemCount = state.cart ? state.cart.length : 0;
  console.log(cartItemCount);
  return (
    <React.Fragment>
      <div className="bg-[#282828] text-[#FFFFFF]">
        <nav className="flex flex-row-reverse lg:flex-row justify-between font-semibold items-center px-4 py-5 max-w-6xl mx-auto">
          <div className="lg:hidden cursor-pointer">
            <HiOutlineMenu onClick={() => setMobileNav(!mobileNav)} size={30} />
          </div>
          <Link to="/">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1741937751683/8e9edcdb-0460-4b19-98c0-0b8b8a73d1e7.png"
              alt="logo"
              className="w-20 h-16 object-cover hidden lg:flex"
            />
          </Link>

          {/* Desktop Links with Active State */}
          <ul className="hidden lg:flex gap-8">
            <Link
              to="/"
              className={`hover:text-[#E53633] duration-300 ${
                isActive("/") ? "text-red-500" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/order"
              className={`hover:text-[#E53633] duration-300 ${
                isActive("/order") ? "text-red-500" : ""
              }`}
            >
              Order
            </Link>
            <Link
              to="/contact"
              className={`hover:text-[#E53633] duration-300 ${
                isActive("/contact") ? "text-red-500" : ""
              }`}
            >
              Contact us
            </Link>
            <Link
              to="/about"
              className={`hover:text-[#E53633] duration-300 ${
                isActive("/about") ? "text-red-500" : ""
              }`}
            >
              About us
            </Link>
          </ul>
          <div className="flex items-center gap-1 pl-4 lg:pl-0">
            <div className="">
              <Link
                to="/cart"
                className={`hover:text-[#E53633] relative flex items-end duration-300  ${
                  isActive("/cart") ? "text-red-500" : ""
                }`}
              >
                {cartItemCount > 0 && (
                  <span className="bg-white absolute bottom-3 right-3.5 lg:right-5 text-[#E53633] text-xs rounded-full w-4 h-4 p-3 flex justify-center items-center">
                    {cartItemCount}
                  </span>
                )}
                <MdShoppingCart className="w-6 h-6 " />
              </Link>
            </div>
            <Link
              to="/booking"
              className="bg-[#E53633] px-6 py-2 border-none  font-bold hover:opacity-80 duration-300"
            >
              Book Now
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </div>
    </React.Fragment>
  );
};

export default Navbar;
