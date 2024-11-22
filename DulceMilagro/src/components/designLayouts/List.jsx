import React from "react";

const List = ({ children, className }) => {
  return <ul className={`list-disc ${className}`}>{children}</ul>;
};

export default List;
