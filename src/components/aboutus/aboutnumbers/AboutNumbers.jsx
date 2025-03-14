import React from "react";
import CountUp from "react-countup";

const AboutNumbers = () => {
  return (
    <React.Fragment>
      <section className="flex flex-col justify-start items-center lg:items-start gap-16 py-16 px-4 lg:flex-row max-w-6xl mx-auto">
        <div className=" flex flex-col justify-start items-center lg:items-start gap-10  text-center">
          <div className="flex flex-col items-start font-bold">
            <h1 className="text-[1.5rem] lg:text-[2rem]">
              We Came, Saw , and still Conquering
            </h1>
            <h1 className="text-[1.2rem] opacity-60  ">
              We Came, Saw , and still Conquering
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-white items-center text-center">
            <div className="p-6 bg-[#e35452]  py-8 rounded-md shadow-md">
              <b className="text-[1.5rem]  ">
                {" "}
                <CountUp start={0} end={4000} duration={6} />+
              </b>
              <h3 className="text-[1rem] font-bold mb-2">Orders Processed</h3>
            </div>

            <div className="p-4 bg-[#e35452]  py-8 rounded-md shadow-md">
              <b className="text-[1.5rem]  ">
                {" "}
                <CountUp start={0} end={400} duration={7} />+
              </b>
              <h3 className="text-[1rem] font-bold mb-2">5 Star Reviews</h3>
            </div>

            <div className="p-4 bg-[#e35452]  py-8  rounded-md shadow-md">
              <b className="text-[1.5rem]  ">
                {" "}
                <CountUp start={0} end={40} duration={7} />+
              </b>
              <h3 className="text-[1rem] font-bold mb-2">Staffs</h3>
            </div>

            <div className="p-4 bg-[#e35452]  py-8  rounded-md shadow-md">
              <b className="text-[1.5rem]  ">
                {" "}
                <CountUp start={0} end={6} duration={5} />+
              </b>
              <h3 className="text-[1rem] font-bold mb-2">
                Years of Experience
              </h3>
            </div>

            <div className="p-4 bg-[#e35452]  py-8  rounded-md shadow-md">
              <b className="text-[1.5rem]  ">
                {" "}
                <CountUp start={0} end={100} duration={5} />%
              </b>
              <h3 className="text-[1rem] font-bold mb-2">Professionalism</h3>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutNumbers;
