import React, { useState } from "react";
import OrderButton from "./OrderButton";
import { allFood } from "../../localdatabase/food";
import OrderFrame from "./OrderFrame";

const Order = () => {
  const [meals, setMeal] = useState(allFood);
  const [searchTerm, setSearchTerm] = useState("");

  const choice = (category) => {
    setMeal(
      allFood.filter((food) => {
        return food.category === category;
      })
    );
  };

  const filteredMeal = meals.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <React.Fragment>
      <div className="bg-[#F0F0F0]">
        <div className=" px-4 max-w-6xl mx-auto">
          <div className=" flex flex-col justify-start px-4 gap-2 lg:gap-16 py-16  lg:justify-between  lg:flex-row">
            <div>
              <h1 className="text-[#E53633] text-[1.5rem] lg:text-[2rem] font-bold">
                Our Menu
              </h1>
              <p className="font-semibold">
                Quality and tasty meals at your finger tips{" "}
              </p>
            </div>
            <input
              type="search"
              placeholder="search food"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 py-6 h-[48px] lg:py-0 rounded-sm lg:rounded-md bg-[#FFF] border-[#4F4F4F] focus:border-[#E53633]  placeholder:text-[#333333] placeholder:text-[1rem]  placeholder:opacity-60 lg:w-[30%] outline-none"
            />
          </div>
          <OrderButton choice={choice} setMeal={setMeal} allFood={allFood} />
          <section className="w-[100%] flex flex-col gap-24 lg:gap-0 pb-32 lg:flex-row ">
            <section className="">
              <div className="grid grid-cols-2 md:grid-col-2 lg:grid-cols-4 gap-6 pt-5">
                {/* mapping of the data from LocalDB for search func */}
                {filteredMeal.length > 0 ? (
                  filteredMeal.map((foodCategory) => (
                    <OrderFrame
                      key={foodCategory.id}
                      foodCategory={foodCategory}
                    />
                  ))
                ) : (
                  <div className="text-center font-bold py-24">
                    No results found for{" "}
                    <span className="text-red-400">&#34;{searchTerm}&#34;</span>
                  </div>
                )}
              </div>
            </section>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Order;
