"use client";
import config from "@/app/config/config";
import { itemData } from "@/app/utils/productdata";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";


const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [choices, setChoices] = useState<typeof itemData>([]);

  const searchBarStyle = {
    mainContainer:
      "border-2 border-gray-300 flex flex-row space-x-5 items-center px-2 pl-4 mt-3 rounded-full",
    inputStyle: "text-lg",
  };

  const captalize = (value: string) => {
    return value[0].toUpperCase() + value.slice(1);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.toLowerCase());
    
    let result = itemData.filter((item) =>
      (item.shape.toLowerCase()).includes(e.target.value)
    ).map((item, _) => {
        return {...item, shape: item.shape.toLowerCase()}
    })
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
              <Link key={index} href={`${config.PROD_URL}/products/${item.id}`}>
                <li
                  className={`border ${
                    item.shape.toLowerCase().includes(searchInput[0]) &&
                    "font-bold"
                  }`}
                  key={index}
                >
                  <p>
                    {item.shape.split("").map((letter, index) => (
                      <span
                        key={index}
                        style={{
                          fontWeight: searchInput.includes(letter)
                            ? "bold"
                            : "normal",
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
