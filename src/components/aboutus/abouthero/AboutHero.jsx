import React from "react";

const AboutHero = () => {
  return (
    <React.Fragment>
      <div className="bg-[#FFFFFF] ">
        <section className="flex flex-col-reverse justify-center items-center gap-20 py-16 lg:flex-row px-4 max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 items-center text-center lg:text-start lg:items-start px-4">
            <div className="font-bold">
              <p className="border-t-4  border-[#E53633] lg:w-fit py-2 text-[0.75rem] ">
                Welcome
              </p>
              <h1 className="text-[1.5rem] lg:text-[2rem] flex flex-col ">
                <span>About</span>
                <span>I-Grills</span>
              </h1>
            </div>
            <p className="text-[#575656] text-[1rem]">
              I-grills provides tasty meals for your personal and outdoor events
              with just few clicks, I-grills provides tasty meals for your
              personal and outdoor events with just few clicks, I-grills
              provides tasty meals for your personal.
            </p>
          </div>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1707957094291/badc2895-2ae9-4c27-bbea-580cc96f01e7.png"
            alt="dishes"
          />
        </section>
      </div>
    </React.Fragment>
  );
};

export default AboutHero;
