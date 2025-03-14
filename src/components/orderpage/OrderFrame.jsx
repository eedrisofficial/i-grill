import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import { Toaster, toast } from "sonner";
import { TbCurrencyNaira } from "react-icons/tb";

const OrderFrame = ({ foodCategory }) => {
  const id = uuidv4();

  const { dispatch } = useContext(GlobalContext);

  const addItem = () => {
    dispatch({ type: "AddToCart", payload: { ...foodCategory, id } });
    toast(`${foodCategory.name} added to cart`);
  };

  return (
    <React.Fragment>
      <div className="font-semibold relative lg:w-[100%]">
        <div
          key={id}
          className=" bg-[#FFF] flex flex-col gap-2 rounded-md p-1 "
        >
          <img
            src={foodCategory.image}
            alt="special meal"
            loading="lazy"
            className="w-full  h-48 rounded-lg object-cover"
          />
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-[1.2rem] flex items-center gap-3">
              <span className="flex items-center text-[0.85rem]">
                <TbCurrencyNaira size={15} />
                {foodCategory.price}
              </span>{" "}
            </h1>
            <p className="opacity-70">{foodCategory.name}</p>
          </div>
          <button
            onClick={addItem}
            className="bg-[#E53633] opacity-75 py-1 font-bold text-[#FFF] px-8 whitespace-nowrap  text-[0.85rem] lg:text-[1rem] hover:opacity-100 duration-300"
          >
            Add to cart
          </button>
        </div>
        <Toaster />
      </div>
    </React.Fragment>
  );
};

export default OrderFrame;
