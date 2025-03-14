import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import OrderCart from "./OrderCart";
import { Link } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import { Toaster, toast } from "sonner";
import FlutterPay from "./FlutterPay";

const Cart = () => {
  const orderTime = new Date().toDateString();
  // exactTime: new Date().toLocaleTimeString(),

  const { dispatch, state } = useContext(GlobalContext);

  const clearCart = () => {
    dispatch({ type: "ClearCart" });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "RemoveFromCart", payload: id });
    toast(` Item deleted successfully`);
  };

  const increaseProduct = (id) => {
    dispatch({ type: "Increment", payload: id });
    toast(` Item increased successfully`);
  };

  const decreaseProduct = (id) => {
    dispatch({ type: "Decrement", payload: id });
    toast(` Item reduced successfully`);
  };

  return (
    <React.Fragment>
      <div className="bg-[#FFF] min-h-screen">
        {state.cart.length > 0 ? (
          <div className=" max-w-6xl mx-auto font-serif flex flex-col lg:flex-row items-start w-full py-16 px-4 lg:px-6 gap-4 ">
            <section className="w-full lg:w-[70%] px-2 ">
              <div className=" flex flex-col items-start bg-gradient-to-r to-[#e8716f] via-[#ed4d4a] from-[#f33e3b] p-1 px-4 text-bold text-white  w-full ">
                <p className="font-bold">New Order</p>
                <p className="text-[0.65rem]">{orderTime}</p>
              </div>
              <div className="w-full mb-4 overflow-x-auto mt-4">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b py-4">
                      <th className="px-4 py-2">S/N</th>
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Qauntity</th>
                      <th className="px-4 py-2">Total</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.cart.map((item, index) => (
                      <OrderCart
                        key={item.id}
                        item={item}
                        index={index}
                        removeFromCart={removeFromCart}
                        increaseProduct={increaseProduct}
                        decreaseProduct={decreaseProduct}
                      />
                    ))}
                    <Toaster />
                  </tbody>
                </table>
              </div>
              <button
                className="bg-[#E53633]  opacity-75 font-bold  py-1.5 text-[#FFF] px-8 py-2] hover:opacity-100 duration-300 mr-2 "
                onClick={clearCart}
              >
                Clear cart
              </button>
            </section>

            <section className="px-2 w-full md:w-[50%] lg:w-[30%] ">
              <div className="p-3 bg-[#F0F0F0] w-full flex flex-col gap-4 ">
                <div className="flex justify-between items-center border-b-2">
                  <h2 className=" text-xl flex items-center gap-4">Tax:</h2>
                  <p className="flex items-center">
                    <TbCurrencyNaira size={15} /> 0
                  </p>
                </div>
                <div className="flex justify-between items-center border-b-2">
                  <h2 className=" text-xl flex items-center gap-4">
                    Shipping:
                  </h2>
                  <p className="flex items-center">
                    <TbCurrencyNaira size={15} /> 0
                  </p>
                </div>
                <div className="flex justify-between items-center border-b-2">
                  <h2 className=" text-xl flex items-center gap-4">Items:</h2>
                  <p>{state.cart.length}</p>
                </div>
                <div className="flex justify-between items-center border-b-2">
                  <h2 className=" text-xl flex items-center gap-4">Total: </h2>
                  <p className="flex items-center">
                    <TbCurrencyNaira size={15} />
                    {state.total}
                  </p>
                </div>
                <div className="flex justify-between items-center border-b-2">
                  <h1 className="text-xl flex items-center gap-4">
                    Sub Total:
                  </h1>
                  <p className="flex items-center">
                    <TbCurrencyNaira size={15} />
                    {state.total}
                  </p>
                </div>
                <FlutterPay />
                <Link
                  to="/order"
                  className="bg-[#e5e5e5] w-[100%] opacity-85 font-bold  text-center px-8 py-2  hover:bg-[#ffffff] duration-300"
                >
                  Order More..
                </Link>
              </div>
            </section>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto h-[80vh] flex flex-col  justify-center items-center">
            <p className="text-center  p-2 text-[#E53633] mt-10 font-bold">
              You've not add any food to the cart
            </p>
            <Link to="/order" className="hover:underline">
              Order now
            </Link>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
