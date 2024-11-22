import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ display: "flex", gap: "10px", margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                backgroundColor: "#FFB6C1", // Rosa pastel
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                backgroundColor: "#FFC0CB", // Más claro
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      />
    ),
  };

  return (
    <div className="w-full bg-pink-100">
      <Slider {...settings}>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgOne} alt="Delicious Cake Offer" />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgTwo} alt="Special Pastries Discount" />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgThree} alt="Sweet Treats Deals" />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
