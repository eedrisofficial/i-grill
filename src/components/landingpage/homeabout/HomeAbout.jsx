import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F0F0F0]">
        <section className=" flex flex-col justify-center items-center gap-20 py-16 lg:flex-row px-4 max-w-6xl mx-auto">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1707957094291/badc2895-2ae9-4c27-bbea-580cc96f01e7.png"
            alt="dishes"
          />
          <div className="flex flex-col gap-6 items-start px-4">
            <div className="font-bold">
              <p className="border-t-4  border-[#E53633] w-fit py-2 text-[0.75rem]">
                Welcome
              </p>
              <h1 className="text-[1.5rem] lg:text-[2rem] flex flex-col ">
                <span>About</span>
                <span>I-Grills</span>
              </h1>
            </div>
            <p className="text-[#575656]">
              I-grills provides tasty meals for your personal and outdoor events
              with just few clicks, I-grills provides tasty meals for your
              personal and outdoor events with just few clicks, I-grills
              provides tasty meals for your personal.
            </p>
            <Link to="/about" className="flex items-center gap-0">
              <p className="bg-[#E53633]  text-[#FFF] font-semibold px-5 py-2 ">
                Read More{" "}
              </p>
              <Link
                to="/about"
                className="bg-[#E53633] text-[#FFF] opacity-80 py-2 px-2 hover:opacity-100 duration-300"
              >
                <MdNavigateNext size={24} />
              </Link>
            </Link>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomeAbout;
