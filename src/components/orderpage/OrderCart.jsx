import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbCurrencyNaira } from "react-icons/tb";

const OrderCart = ({
  item,
  index,
  removeFromCart,
  decreaseProduct,
  increaseProduct,
}) => {
  return (
    <React.Fragment>
      <tr key={item.id} className="border-b-2">
        <td className="px-4 py-2">{index + 1}</td>
        <td className="px-4 py-2">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 object-cover rounded"
          />
        </td>
        <td className="px-4 py-2">{item.name}</td>
        <td className="px-4 py-2">
          <div className="flex justify-start font-bold items-center gap-4">
            <button
              onClick={() => decreaseProduct(item.id)}
              className="py-0.5 bg-slate-100 h-fit px-2"
            >
              -
            </button>
            <p className="">{item.quantity}</p>
            <button
              onClick={() => increaseProduct(item.id)}
              className="py-0.5 bg-slate-100 h-fit px-2"
            >
              +
            </button>
          </div>
        </td>
        <td className="px-4 py-2 flex items-center">
          <TbCurrencyNaira size={15} /> {item.price}
        </td>
        <td className="px-4 py-2">
          <button
            onClick={() => removeFromCart(item.id)}
            className="hover:text-[#E53633]"
          >
            <RiDeleteBin6Line size={24} color="#E53633" />
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default OrderCart;
