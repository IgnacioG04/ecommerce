import React from "react";
import { Link } from "react-router-dom";
import { journalImage } from "../../assets/images";

const Journal = () => {
  return (
    <div className="max-w-container mx-auto px-4 py-20">
      <h1 className="max-w-[600px] text-base text-lightText mb-2">
        <span className="text-pink-500 font-semibold text-lg">Baking Delights</span> Explore the world of baking through our journals. From classic recipes to creative new twists, find it all here!
      </h1>
      <Link to="/blog">
        <button className="w-52 h-10 bg-pink-500 text-white hover:bg-pink-700 duration-300">
          Read Our Journal
        </button>
      </Link>
      <div className="pt-10">
        <img
          src={journalImage}
          alt="journal"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Journal;
