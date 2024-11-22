import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-pink-400 w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-pink-600 duration-300 cursor-pointer rounded-full shadow-lg">
      {text}
    </div>
  );
};

export default Badge;
