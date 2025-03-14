import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeBook = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F0F0F0]">
        <div className=" py-16 px-4 flex justify-center max-w-6xl mx-auto">
          <section className="bg-[#FFF] flex flex-col justify-center items-center gap-10 rounded-md p-8  lg:w-[100%] ">
            <div className="flex flex-col lg:gap-6 items-center">
              <p className="border-t-4  border-[#E53633] w-fit lg:py-2 text-[1rem] font-bold">
                Booking
              </p>
              <h1 className="font-bold text-center text-[1.5rem] lg:text-[2rem]">
                Book Our Event Planning Services
              </h1>
            </div>
            <div className="flex justify-center gap-16 font-semibold ">
              <div className="flex flex-col items-center">
                <h2>Date</h2>
                <p className="opacity-40">2/18/2024</p>
              </div>
              <div className="flex flex-col items-center">
                <h2>Time</h2>
                <p className="opacity-40 text-center">2:00 PM</p>
              </div>
              <div className="flex flex-col items-center">
                <h2>Guests</h2>
                <p className="opacity-40">250</p>
              </div>
            </div>
            <Link to="/booking" className="flex items-center gap-0">
              <p className="bg-[#E53633]  text-[#FFF] font-semibold px-5 py-2 ">
                Check Availability
              </p>
              <span className="bg-[#E53633] text-[#FFF] opacity-80 py-2 px-2 hover:opacity-100 duration-300">
                <MdNavigateNext size={24} />
              </span>
            </Link>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeBook;
