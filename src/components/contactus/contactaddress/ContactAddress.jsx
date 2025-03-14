import React from "react";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactAddress = () => {
  return (
    <React.Fragment>
      <section className="bg-[#F0F0F0] flex flex-wrap justify-start gap-16 py-16 px-4 lg:justify-center lg:px-16 lg:flex-row">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Addres</h1>
          <ul className="flex flex-col gap-1 opacity-80">
            <li>I-grills and co. limited</li>
            <li>P.M.B 123, abc Road,</li>
            <li>Abc, Nigeria</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Email Address</h1>
          <ul className="flex flex-col gap-1 opacity-80">
            <li>swiftresponse@igrills.com</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Phone</h1>
          <ul className="flex flex-col gap-1 opacity-80">
            <li>+234-813-262-4679</li>
            <li>+234-813-262-4679</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Social media platform</h1>
          <ul className="flex  gap-6">
            <a href="">
              <FaFacebook size={30} className="text-[#316FF6]" />
            </a>
            <a href="">
              <FaInstagramSquare size={30} className="text-[#fbad50]" />
            </a>
            <a href="">
              {" "}
              <FaSquareXTwitter size={30} className="text-[#1DA1F2]" />
            </a>
            <a href="">
              <FaYoutube size={30} className="text-[#FF0000]" />
            </a>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactAddress;
