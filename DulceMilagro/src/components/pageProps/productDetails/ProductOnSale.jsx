import React from "react";
import { SplOfferData } from "../../../constants";

const ProductsOnSale = () => {
  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px] text-pink-600">
        Ofertas especiales
      </h3>
      <div className="flex flex-col gap-2">
        {SplOfferData.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img className="w-24" src={item.img} alt={item.img} />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{item.productName}</p>
              <p className="text-sm font-semibold text-pink-600">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
