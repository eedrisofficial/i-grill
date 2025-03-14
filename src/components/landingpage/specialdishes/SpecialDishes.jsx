import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";

const SpecialDishes = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F0F0F0]">
        <section className=" flex flex-col gap-10 py-16 px-4 max-w-6xl mx-auto">
          <div className="font-bold">
            <p className="border-t-4  border-[#E53633] w-fit py-2 text-[1rem]">
              Explore
            </p>
            <h1 className="text-[1.5rem] lg:text-[2rem] ">Special Deals</h1>
          </div>
          <section className="flex gap-16 lg:gap-10 justify-center lg:justify-start flex-wrap w-[100%]">
            <div className="font-semibold relative w-full lg:w-[48%]">
              <div className="bg-[#FFF] flex flex-col gap-6 rounded-md p-4 ">
                <div className="flex flex-col-reverse gap-2 w-[100%] lg:flex-row">
                  <div className="flex flex-col gap-2  lg:w-[40%]">
                    <h1 className="font-bold text-[1.2rem]">Gold Combo</h1>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col ">
                        <h2 className="font-bold text-[#E53633]">Starters</h2>
                        <ul className="text-[0.85rem]">
                          <li>Blueberry with salad</li>
                          <li>Chocolate & vanilla cake</li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-[#E53633]">Main Dish</h2>
                        <ul className="text-[0.85rem]">
                          <li>Blueberry with salad</li>
                          <li>Chocolate & vanilla cake</li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-[#E53633]">Protein</h2>
                        <ul className="text-[0.85rem]">
                          <li>Blueberry with salad</li>
                          <li>Chocolate & vanilla cake</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1707960398233/363ba737-c10e-4ce0-b880-0466091c640f.png"
                    alt="special meal"
                    className=" lg:w-[60%]"
                  />
                </div>
                <h1 className="font-bold text-[1.2rem] flex items-center gap-3">
                  Total cost:{" "}
                  <span className="flex items-center">
                    <TbCurrencyNaira size={25} />
                    25000
                  </span>{" "}
                </h1>
              </div>
              <Link
                to="/order"
                className="bg-[#E53633] font-bold text-[#FFF] px-8 py-2 absolute left-[40%] top-[98%] lg:top-[95%] hover:bg-[#bd4f4d] duration-300"
              >
                Order Now
              </Link>
            </div>
            <div className="font-semibold relative  w-full lg:w-[48%]">
              <div className="bg-[#FFF] flex flex-col gap-6 rounded-md p-4 ">
                <div className="flex flex-col-reverse gap-2 w-[100%] lg:flex-row">
                  <div className="flex flex-col gap-2  lg:w-[40%]">
                    <h1 className="font-bold text-[1.2rem]">Diamond Combo</h1>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col ">
                        <h2 className="font-bold text-[#E53633]">Starters</h2>
                        <ul className="text-[0.85rem]">
                          <li>Blueberry with salad</li>
                          <li>Chocolate & vanilla cake</li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-[#E53633]">Main Dish</h2>
                        <ul className="text-[0.85rem]">
                          <li>Blueberry with salad</li>
                          <li>Chocolate & vanilla cake</li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-[#E53633]">Protein</h2>
                        <ul className="text-[0.85rem]">
                          <li>Blueberry with salad</li>
                          <li>Chocolate & vanilla cake</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="special meal"
                    className=" lg:w-[60%] rounded-lg"
                  />
                </div>
                <h1 className="font-bold text-[1.2rem] flex items-center gap-3">
                  Total cost:{" "}
                  <span className="flex items-center">
                    <TbCurrencyNaira size={25} />
                    31500
                  </span>{" "}
                </h1>
              </div>
              <Link
                to="/order"
                className="bg-[#E53633] font-bold text-[#FFF] px-8 py-2 absolute left-[40%] top-[98%] lg:top-[95%] hover:bg-[#bd4f4d] duration-300"
              >
                Order Now
              </Link>
            </div>
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};

export default SpecialDishes;
