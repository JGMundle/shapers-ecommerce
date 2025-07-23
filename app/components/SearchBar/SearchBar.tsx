"use client";
import config from "@/app/config/config";
import { itemData } from "@/app/utils/productdata";
import React, { ChangeEvent, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [choices, setChoices] = useState<typeof itemData>([]);

  const searchBarStyle = {
    mainContainer:
      "border-2 border-gray-300 flex flex-row space-x-5 items-center px-2 pl-4 rounded-full",
    inputStyle: "text-lg",
  };

  const captalize = (value: string) => {
    return value[0].toUpperCase() + value.slice(1);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    let result = itemData.filter((item) =>
      (item.shape.toLowerCase()).includes(e.target.value ? e.target.value.toLowerCase() : e.target.value )
    );
    setChoices(result);
    console.log(result);
    console.log(choices);
    console.log(searchInput);
  };

  return (
    <div>
      <div className={searchBarStyle.mainContainer}>
        <FaMagnifyingGlass size={20} />
        <input
          type="text"
          placeholder="Search Shapers.co.uk"
          className={searchBarStyle.inputStyle}
          onChange={handleSearch}
          value={searchInput}
        />
      </div>

      {/* Dropdown bar */}
      {choices.length > 0 && (
        <div className="w-52 border rounded-sm absolute">
          <ul>
            {choices.map((item, index) => (
              <li className={`border ${item.shape.includes(searchInput[0]) && "font-bold"}`} key={index}>
                    {item.shape}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
