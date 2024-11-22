import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/dulceSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-pink-500 hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-32 h-32" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{item.name}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
          ${item.price}
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <span
            onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-pink-100 text-2xl flex items-center justify-center hover:bg-pink-300 cursor-pointer duration-300 border-[1px] border-pink-300 hover:border-pink-500"
          >
            -
          </span>
          <span className="text-lg font-titleFont">{item.quantity}</span>
          <span
            onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-pink-100 text-2xl flex items-center justify-center hover:bg-pink-300 cursor-pointer duration-300 border-[1px] border-pink-300 hover:border-pink-500"
          >
            +
          </span>
        </div>
        <div className="w-1/3 font-titleFont font-semibold">
          ${item.price * item.quantity}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
