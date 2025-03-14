import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuidv4 } from "uuid";
import { TbCurrencyNaira } from "react-icons/tb";
// import { ToastContainer, toast } from "react-toastify";

const BookingMeal = ({ foodCategory }) => {
  const id = uuidv4();
  //   const { dispatch } = useContext(GlobalContext);
  //   const addItem = () => {
  //     dispatch({ type: "AddToCart", payload: { ...foodCategory, id } });
  //     // toast.success("added");
  //   };
  return (
    <React.Fragment>
      <div className="font-semibold relative lg:w-[100%]">
        <div
          key={id}
          className=" bg-[#FFF] flex  items-center justify-between gap-2 rounded- p-1 "
        >
          <div className="flex gap-3">
            <input type="checkbox" />
            <div className="flex items-center justify-evenly gap-4">
              <h1 className="font-bold text-[1.2rem] flex items-center gap-3 text-red-600">
                <span className="flex items-center text-[0.85rem]">
                  <TbCurrencyNaira size={15} />
                  {foodCategory.price}
                </span>{" "}
              </h1>
              <p className="opacity-70">{foodCategory.name}</p>
            </div>
          </div>
        </div>

        {/* <ToastContainer /> */}
      </div>
    </React.Fragment>
  );
};

export default BookingMeal;
