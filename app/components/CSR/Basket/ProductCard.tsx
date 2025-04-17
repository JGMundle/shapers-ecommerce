"use client";
import Link from "next/link";
import React, { ReactElement } from "react";
import styles from "./ProductCard.module.css";
import { useBasket } from "@/Statemanager/useBasket";
import { useSearchParams } from "next/navigation";

interface PropInfo {
  category: string;
  itemName: string;
  price: number;
  icon?: ReactElement;
  id?: string;
}

const ProductCard = ({ category, itemName, price, icon, id }: PropInfo) => {

  // styles
  const recommendationStyle = {
    mainDiv: "flex flex-row justify-center w-72 ml-20",

    // mainItemStyle:
    //   "border-2 border-gray-400 rounded-md px-10 p-5 shadow-lg hover:bg-gray-200",
    itemCategory: "font-bold text-gray-400 text-lg",
    itemName: "text-3xl mt-2 font-extrabold",
    itemPrice: "text-3xl mt-2 font-mono",
  };

  return (
    <Link href={`/products/${id}`} className={recommendationStyle.mainDiv}>
      {/* Recommendation for 2D shapes */}
      {/* Icons */}
      <div className={styles.mainItemStyle}>
        <div>{icon}</div>
        <div className="mt-10">
          <h2 className={recommendationStyle.itemCategory}>{category}</h2>
          <h1 className={recommendationStyle.itemName}>{itemName}</h1>

          <h2 className={recommendationStyle.itemPrice}>£{price}</h2>
        </div>
      </div>
      {/* <div className='bg-gray-200'/> */}
    </Link>
  );
};

export default ProductCard;
