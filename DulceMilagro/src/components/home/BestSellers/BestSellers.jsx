import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20 bg-pastelYellow">
      <Heading heading="Top Sweet Treats" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Caja de Macarons"
          price="15.00"
          color="Colores Pastel"
          badge={true}
          des="Macarons deliciosos en sabores únicos, ideales para regalar o disfrutar."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Pastel de Chocolate"
          price="30.00"
          color="Chocolate Oscuro"
          badge={true}
          des="Pastel de chocolate rico y húmedo hecho con ingredientes premium."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Cupcakes Decorados"
          price="12.00"
          color="Colores Pastel"
          badge={false}
          des="Cupcakes decorados de manera única en diferentes sabores."
        />
      </div>
    </div>
  );
};

export default BestSellers;
