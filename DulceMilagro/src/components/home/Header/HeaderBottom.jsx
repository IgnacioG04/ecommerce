import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";

const HeaderBottom = () => {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const filtered = (paginationItems || []).filter((item) =>
      item?.productName?.toLowerCase().includes(searchQuery?.toLowerCase() || "")
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);
  

  return (
    <div className="w-full bg-pink-50 relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="flex h-14 cursor-pointer items-center gap-2 text-pink-600"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal">Categorías de Repostería</p>
            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-36 z-50 bg-pink-100 w-auto text-pink-600 h-auto p-4 pb-6"
              >
                <li className="text-pink-400 px-4 py-1 hover:text-pink-800 cursor-pointer">
                  Moldes y Herramientas
                </li>
                <li className="text-pink-400 px-4 py-1 hover:text-pink-800 cursor-pointer">
                  Ingredientes
                </li>
                <li className="text-pink-400 px-4 py-1 hover:text-pink-800 cursor-pointer">
                  Decoraciones
                </li>
                <li className="text-pink-400 px-4 py-1 hover:text-pink-800 cursor-pointer">
                  Packaging
                </li>
              </motion.ul>
            )}
          </div>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-pink-600 bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-pink-300"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              placeholder="Busca tus productos de repostería aquí..."
            />
            <FaSearch className="w-5 h-5" />
          </div>
          <div className="flex gap-4 items-center pr-6 cursor-pointer relative">
            <div className="flex">
              <FaUser />
              <FaCaretDown />
            </div>
            <FaShoppingCart />
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
