'use client'
import React from "react";
import { FaShapes, FaMagnifyingGlass } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { useBasket } from "@/Statemanager/useBasket";
const NavBar = () => {
  // categories for the map
  const categories = ["2D Shapes", "3D Shapes"];

  let item = useBasket((state) => state.items)
  // Styles
  const dropdownStyle = {
    detailsStyle: "relative ml-10 hover:cursor-pointer",
    summaryStyle: "text-2xl font-semibold",
    ulStyle: "absolute top-11 left-9 bg-green-400 shadow-lg rounded-md",
  };

  const searchBarStyle = {
    mainContainer:
      "border-2 border-gray-300 flex flex-row space-x-5 items-center px-2 pl-4 rounded-full",
    inputStyle: "text-lg",
  };

  return (
    <div className="flex flex-row p-5 shadow-md items-center">
      <Link href={"/"} className="flex flex-row space-x-2 items-center">
        <FaShapes size={40} />
        <h1 className="text-3xl font-bold">Shapers</h1>
      </Link>

      <details className={dropdownStyle.detailsStyle}>
        <summary className={dropdownStyle.summaryStyle}>Categories</summary>
        <ul className={dropdownStyle.ulStyle}>
          {categories.map((item, index) => (
            <li key={index} className={styles.listFade}>
              <Link
                href={
                  index === 0 ? "/2DShapes" : index === 1 ? "/3DShapes" : ""
                }
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </details>

      {/* <div className="rounded-md"/> */}

      <div className="absolute right-10 flex flex-row space-x-10">
        <div className={searchBarStyle.mainContainer}>
          <FaMagnifyingGlass size={20} />
          <input
            type="text"
            placeholder="Search Shapers.co.uk"
            className={searchBarStyle.inputStyle}
          />
        </div>

        <Link
          href={"/ShoppingBasket"}
          className="flex flex-row border-2 rounded-full px-5 items-center space-x-1 hover:bg-gray-100 hover:cursor-pointer"
        >
          <LuShoppingCart size={26} />
          <p className="text-lg">{item.length}</p>
        </Link>

        <div className="flex flex-row">
          {/* Sign up */}
          <Link href={"/signon/signup"} className={styles.signUp}>
            <h2 className="text-xl text-white p-3">Sign Up</h2>
          </Link>

          {/* Log in */}
          <Link href={"/signon/login"} className={styles.logIn}>
            <h2 className="text-xl p-3">Log in</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
