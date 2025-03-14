import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  return (
    <React.Fragment>
      <div className="bg-[#333333]">
        <footer className=" text-[#FFF] py-10 lg:py-24 px-4 max-w-6xl mx-auto">
          <section className="flex flex-wrap gap-10 lg:flex-row lg:justify-between px-4">
            <section className="flex flex-col items-center">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1741937751683/8e9edcdb-0460-4b19-98c0-0b8b8a73d1e7.png"
                alt="logo"
                className="w-20 h-20 object-cover"
              />
              <div className="flex gap-4 items-center">
                <a href="">
                  <SlSocialFacebook
                    size={40}
                    className="hover:text-[#E53633] duration-300"
                  />
                </a>
                <a href="">
                  <SiInstagram
                    size={40}
                    className="hover:text-[#E53633] duration-300"
                  />
                </a>
                <a href="">
                  <RiTwitterXFill
                    size={40}
                    className="hover:text-[#E53633] duration-300"
                  />
                </a>
              </div>
            </section>
            <section className="flex flex-wrap gap-10 lg:gap-20 lg:flex-row">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">Navigation</h1>
                <ul className="flex flex-col gap-1 opacity-80">
                  <Link
                    to="/"
                    className="underline hover:text-[#E53633] duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/booking"
                    className="underline hover:text-[#E53633] duration-300"
                  >
                    Booking
                  </Link>
                  <Link
                    to="/contact"
                    className="underline hover:text-[#E53633] duration-300"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/about"
                    className="underline hover:text-[#E53633] duration-300"
                  >
                    About Us
                  </Link>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">Legal Pages</h1>
                <ul className="flex flex-col gap-1 opacity-80">
                  <Link
                    to=""
                    className="underline hover:text-[#E53633] duration-300"
                  >
                    Terms and conditions
                  </Link>
                  <Link
                    to=""
                    className="underline hover:text-[#E53633] duration-300"
                  >
                    Privacy
                  </Link>
                  <Link
                    to=""
                    className="underline hover:text-[#E53633] duration-300"
                  >
                    Cookies
                  </Link>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">Important Link</h1>
                <ul className="flex flex-col gap-1 opacity-80">
                  <Link
                    to=""
                    className="underline hover:text-[#E53633] duration-300"
                  >
                    Get help
                  </Link>
                </ul>
              </div>
            </section>
          </section>
        </footer>
      </div>
      <section className="text-center p-6 bg-[#E53633] text-[#FFF] text-[0.95rem]">
        <p>I-Grills Copyright {today.getFullYear()}, All Rights Reserved.</p>
      </section>
    </React.Fragment>
  );
};

export default Footer;
