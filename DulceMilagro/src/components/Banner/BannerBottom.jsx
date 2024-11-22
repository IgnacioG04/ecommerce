import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-pink-50 border-t-[1px] py-4 border-t-pink-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300 bg-white rounded-md p-2">
          <span className="font-bold font-titleFont w-6 text-center text-pink-500">🍰</span>
          <p className="text-pink-700 text-base">Decorated cakes with love</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300 bg-white rounded-md p-2">
          <span className="text-xl text-center w-6 ml-1 text-pink-500">
            <MdLocalShipping />
          </span>
          <p className="text-pink-700 text-base">Free delivery on orders over $50</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300 bg-white rounded-md p-2">
          <span className="text-2xl text-center w-6 text-pink-500">
            <CgRedo />
          </span>
          <p className="text-pink-700 text-base">Easy returns within 14 days</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
