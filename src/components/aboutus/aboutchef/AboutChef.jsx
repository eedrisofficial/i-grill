import React from "react";

const AboutChef = () => {
  return (
    <React.Fragment>
      <div className="bg-[#FFFFFF]">
        <section className="w-[100%] flex flex-col justify-center items-center gap-10 py-16 lg:flex-row px-4 mx-auto max-w-6xl">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708017611008/2978f939-4539-460a-98f6-bc5d15db6ebb.png"
            alt="chef"
            className=""
          />
          <div className="flex flex-col gap-4 items-start px-8 lg:px-0 lg:w-[50%]">
            <h1 className="text-[1.3rem] lg:text-[2rem] font-bold ">
              Take a Word from our Head Chef
            </h1>
            <p className="text-[#575656] text-[1rem] ">
              I-grills provides tasty meals for your personal and outdoor events
              with just few clicks, I-grills provides tasty meals for your
              personal and outdoor events with just few clicks, I-grills
              provides tasty meals for your personal.I-grills provides tasty
              meals for your personal and outdoor events with just few clicks,
              I-grills provides tasty meals for your personal and outdoor events
              with just few clicks, I-grills provides tasty meals for your
              personal.
            </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AboutChef;
