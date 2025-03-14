import React from "react";

const HomeCategory = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F0F0F0]">
        <section className=" flex flex-col justify-center items-center gap-10 px-4 py-16 max-w-6xl mx-auto">
          <div className="font-bold">
            <p className="border-t-4  border-[#E53633] w-fit text-[1rem]">
              see
            </p>
            <h1 className="text-[1.5rem] lg:text-[2rem] ">
              Our Categorized Menu
            </h1>
          </div>
          <section className="flex flex-wrap justify-center gap-10 w-[100%] font-semibold">
            <div className="w-[40%] lg:w-[20%] flex flex-col gap-2 items-center  rounded-md bg-[#FFF]">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1707958035570/154d05e3-afc1-4a59-8dee-5ddb6ef1d064.png"
                alt="main dish"
                className="w-full object-cover rounded-t-lg"
              />
              <h3 className="text-[#333333] py-2 text-[1.2rem]">Main Dish</h3>
            </div>
            <div className="w-[40%] lg:w-[20%] flex flex-col gap-2 items-center  rounded-md bg-[#FFF]">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1707958024298/e6047cab-360f-4f39-913c-60f7541c5e19.png"
                alt="starter"
                className="w-full object-cover rounded-t-lg"
              />
              <h3 className="text-[#333333] py-2 text-[1.2rem]">Starter</h3>
            </div>
            <div className="w-[40%] lg:w-[20%] flex flex-col gap-2 items-center  rounded-md bg-[#FFF]">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1707958001339/81d6ad33-db83-4848-a2df-c28e9d46016d.png"
                alt="Protein"
                className="w-full object-cover rounded-t-lg"
              />
              <h3 className="text-[#333333] py-2 text-[1.2rem]">Protein</h3>
            </div>
            <div className="w-[40%] lg:w-[20%] flex flex-col gap-2 items-center  rounded-md bg-[#FFF]">
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1707957987289/b3e96dff-d0ee-46a6-b946-27a39bb17230.png"
                alt="Drinks"
                className="w-full object-cover rounded-t-lg"
              />
              <h3 className="text-[#333333] py-2 text-[1.2rem]">Drinks</h3>
            </div>
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomeCategory;
