import React from "react";

const ListItem = ({ itemName, className }) => {
  return (
    <li className={`${className} text-pink-700 font-medium hover:text-pink-900 duration-300`}>
      {itemName}
    </li>
  );
};

export default ListItem;
