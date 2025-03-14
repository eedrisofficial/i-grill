import React from "react";
import { TbCategoryPlus } from "react-icons/tb";

const OrderButton = ({ choice }) => {
  return (
    <React.Fragment>
      <section className="bg-[#FFF] flex flex-col gap-2 px-6 py-2 rounded-md font-bold">
        <div className="flex items-center gap-1 text-[#E53633]">
          <p>
            <TbCategoryPlus size={25} className="" />
          </p>
          <h1>Categories</h1>
        </div>
        <section className="flex flex-wrap justify-start gap-4  lg:gap-12 lg:text-[1.2rem]">
          <button
            onClick={() => choice("main")}
            className=" hover:border-b-2 hover:border-[#E53633] border-b-2 border-white hover:text-[#E53633] w-fit hover:scale-105 duration-300"
          >
            Main Dishes
          </button>
          <button
            onClick={() => choice("grill")}
            className=" hover:border-b-2 hover:border-[#E53633] border-b-2 border-white hover:text-[#E53633] w-fit hover:scale-105 duration-300"
          >
            Grills
          </button>
          <button
            onClick={() => choice("canapes")}
            className=" hover:border-b-2 hover:border-[#E53633] border-b-2 border-white hover:text-[#E53633] w-fit hover:scale-105 duration-300"
          >
            Canapes
          </button>
        </section>
      </section>
    </React.Fragment>
  );
};

export default OrderButton;
