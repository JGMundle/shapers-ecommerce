'use client'
import React, { useState } from 'react'
import { IoChevronDownOutline, IoChevronUp } from "react-icons/io5";

const CustomDropdown = () => {
  const dropdownStyle = {
    detailsStyle: "relative ml-10 hover:cursor-pointer",
    summaryStyle: "text-2xl font-semibold",
    ulStyle: "absolute top-8 left-9",
    liStyle: "bg-green-400 w-28 text-xl mb-3",
  };

  // categories for the map
  const categories = ["2D Shapes", "3D Shapes"];

  //Styles
  const customDromdownStyle = {
    detailsStyle:
      "relative ml-10 hover:cursor-pointer flex flex-row items-center space-x-2",
    mainTextStyle: "text-2xl font-semibold",
    ulStyle: "absolute top-8 left-9",
    liStyle: "bg-green-400 w-28 text-xl mb-3",
  };

  //State variables
  const [isDropped, setIsDropped] = useState<boolean>(false);

  //Functions
  const handleDropdown = () => {
    setIsDropped(!isDropped);
  };

  return (
    <div>
      <div
        className={customDromdownStyle.detailsStyle}
        onClick={handleDropdown}
      >
        <h1 className={customDromdownStyle.mainTextStyle}>Categories</h1>{" "}
        {isDropped ? <IoChevronUp size={25}/> : <IoChevronDownOutline size={25}/>}
      </div>

      {isDropped && (
        <div>
          <ul className={customDromdownStyle.ulStyle}>{categories.map((items, index) => (
            <li key={index} className={customDromdownStyle.liStyle}>{items}</li>
          ))}</ul>
        </div>
      )}
    </div>
  );
}

export default CustomDropdown