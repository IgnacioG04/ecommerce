import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const Breadcrumbs = ({ prevLocation, title }) => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState("");

  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="w-full py-10 xl:py-10 flex flex-col gap-3 bg-pink-50">
      <h1 className="text-5xl text-pink-600 font-titleFont font-bold">
        {title}
      </h1>
      <p className="text-sm font-normal text-pink-400 capitalize flex items-center">
        <span>{prevLocation === "" ? "Home" : prevLocation}</span>

        <span className="px-1">
          <HiOutlineChevronRight />
        </span>
        <span className="capitalize font-semibold text-pink-600">
          {locationPath}
        </span>
      </p>
    </div>
  );
};

export default Breadcrumbs;
