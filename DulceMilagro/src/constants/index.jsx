import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  newArrOne,
  newArrTwo,
  newArrThree,
  spfOne,
  spfThree,

} from "../assets/images/index";

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "/contact",
  },
  {
    _id: 1005,
    title: "Journal",
    link: "/journal",
  },
];
// =================== NavBarList End here ======================

// =================== Featured Products Start here ============
export const featuredProducts = [
  {
    _id: 2001,
    img: bestSellerOne,
    productName: "Cupcake Especial",
    price: "12.00",
    description: "Delicioso cupcake decorado a mano, perfecto para cualquier ocasión.",
  },
  {
    _id: 2002,
    img: bestSellerTwo,
    productName: "Tarta de Chocolate",
    price: "25.00",
    description: "Tarta hecha con el mejor chocolate y un toque especial de amor.",
  },
  {
    _id: 2003,
    img: bestSellerThree,
    productName: "Galletas Personalizadas",
    price: "18.00",
    description: "Galletas decoradas según tu preferencia, ideales para eventos.",
  },
];
// =================== Featured Products End here ===============

// =================== Special Offer data Start here ============
export const SplOfferData = [
  {
    _id: "201",
    img: spfOne,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: "203",
    img: spfThree,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
];
// =================== Special Offer data End here ==============

// =================== New Arrivals Start here ==================
export const newArrivals = [
  {
    _id: 3001,
    img: newArrOne,
    productName: "Macarons Coloridos",
    price: "20.00",
    description: "Macarons artesanales en una variedad de colores y sabores.",
  },
  {
    _id: 3002,
    img: newArrTwo,
    productName: "Pastel de Fresas",
    price: "30.00",
    description: "Pastel fresco con una capa de fresas naturales.",
  },
  {
    _id: 3003,
    img: newArrThree,
    productName: "Donas Glaseadas",
    price: "15.00",
    description: "Donas suaves con glaseado y toppings variados.",
  },
];
// =================== New Arrivals End here ====================

// =================== Pagination Items Start here ==============
export const paginationItems = [
  {
    _id: 4001,
    img: bestSellerOne,
    title: "Explora nuestra variedad de cupcakes",
  },
  {
    _id: 4002,
    img: newArrTwo,
    title: "Descubre el pastel perfecto para tus eventos",
  },
  {
    _id: 4003,
    img: bestSellerThree,
    title: "Endulza tus días con nuestras galletas",
  },
];
// =================== Pagination Items End here ================
