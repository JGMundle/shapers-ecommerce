import React from "react";
import { FaShapes } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
  // categories for the map
  const categories = ["2D Shapes", "3D Shapes"];

  // Styles
  const dropdownStyle = {
    detailsStyle: "relative ml-10 hover:cursor-pointer",
    summaryStyle: "text-2xl font-semibold",
    ulStyle: "absolute top-8 left-9",
    liStyle: "bg-green-400 w-28 text-xl mb-3",
  };

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
            <li key={index} className={dropdownStyle.liStyle}>
              {item}
            </li>
          ))}
        </ul>
      </details>

      {/* <div /> */}

      <div className="absolute right-10 flex flex-row space-x-10">
        <div className="flex flex-row border-2 rounded-full px-5 items-center space-x-1">
          <LuShoppingCart size={26} />
          <p className="text-lg">0</p>
        </div>

        <div className="bg-green-600 rounded-full">
          <h2 className="text-xl text-white p-4 ">Sign In</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
