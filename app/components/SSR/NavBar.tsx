import React from "react";
import { FaShapes, FaMagnifyingGlass } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { motion } from "framer-motion"
import styles from "./NavBar.module.css"

const NavBar = () => {
  // categories for the map
  const categories = ["2D Shapes", "3D Shapes"];

  // Styles
  const dropdownStyle = {
    detailsStyle: "relative ml-10 hover:cursor-pointer",
    summaryStyle: "text-2xl font-semibold",
    ulStyle: "absolute top-11 left-9 bg-green-400 shadow-lg rounded-md",
  };

  const searchBarStyle = {
    mainContainer: "border-2 border-gray-300 flex flex-row space-x-5 items-center px-2 pl-4 rounded-full",
    inputStyle: "text-lg"
  }

  return (
    <div className="flex flex-row p-5 shadow-md items-center">
      <div className="flex flex-row space-x-2 items-center">
        <FaShapes size={40} />
        <h1 className="text-3xl font-bold">Shapers</h1>
      </div>

      <details className={dropdownStyle.detailsStyle}>
        <summary className={dropdownStyle.summaryStyle}>Categories</summary>
        <ul className={dropdownStyle.ulStyle}>
          {categories.map((item, index) => (
            <motion.li key={index} className={styles.listFade}>
              {item}
            </motion.li>
          ))}
        </ul>
      </details>

      {/* <div className="rounded-md"/> */}

      <div className="absolute right-10 flex flex-row space-x-10">
        <div className={searchBarStyle.mainContainer}>
          <FaMagnifyingGlass size={20}/>
          <input type="text" placeholder="Search Shapers.co.uk" className={searchBarStyle.inputStyle} />
        </div>

        <div className="flex flex-row border-2 rounded-full px-5 items-center space-x-1">
          <LuShoppingCart size={26} />
          <p className="text-lg">0</p>
        </div>

        <div className="bg-green-600 rounded-full px-2">
          <h2 className="text-xl text-white p-3 ">Sign In</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
