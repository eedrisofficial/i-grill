import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-tr from-[#fcd2d2]  via-[#ffffff] to-[#fcd2d2]">
        <section className=" max-w-6xl mx-auto flex flex-col-reverse justify-center items-center gap-20 py-16 lg:flex-row ">
          <div className="flex flex-col gap-6 items-start px-4">
            <h1 className="text-[2.2rem] lg:text-[3.2rem] font-extrabold">
              <span className="text-[#E53633]">Delivering</span> Quality, Tasty
              <span className="text-[#E53633]"> Meals </span> For Your Events
            </h1>
            <p className="text-[#575656] text-[1.2rem] font-semibold">
              I-grills provides tasty meals for your personal and outdoor events
              with just few clicks.
            </p>
            <Link to="/order" className="flex items-center gap-0">
              <p className="bg-[#E53633]  text-[#FFF] font-semibold px-5 py-2 ">
                Discover Menu{" "}
              </p>
              <span className="bg-[#E53633] text-[#FFF] opacity-80 py-2 px-2 hover:opacity-100 duration-300">
                <MdNavigateNext size={24} />
              </span>
            </Link>
          </div>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1707955384601/686787b2-6231-4ac7-bacd-4993a047ff1d.png"
            alt="dishes"
            className="px-4"
          />
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomeHeroSection;
