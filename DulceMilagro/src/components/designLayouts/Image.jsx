import React from "react";

const Image = ({ imgSrc, className }) => {
  return (
    <img
      className={`${className} rounded-lg shadow-lg`}
      src={imgSrc}
      alt="Sweet Delight"
    />
  );
};

export default Image;
