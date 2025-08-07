"use client";
import Link from "next/link";
import React from "react";
import styles from "./ProductCard.module.css";
import AddItemButton from "./AddItemButton";
import { BasketItem } from "@/Statemanager/useBasket";


const ProductCard = (basket: Partial<BasketItem>) => {
  // styles
  const recommendationStyle = {
    // mainDiv: "flex flex-row justify-center ml-10 mb-5 p-4 border-2",
    
    itemCategory: "font-bold text-gray-400 text-lg",
    itemName: "text-3xl mt-2 font-extrabold",
    itemPrice: "text-3xl mt-2 font-mono",
  };
 
  return (
    <Link
      href={`/products/${basket.id}`}
      className={styles.mainItemStyle}
    >
      {/* Recommendation for 2D shapes */}
      {/* Icons */}
        <div>{basket.icon}</div>
        <div className="mt-10">
          <h2 className={recommendationStyle.itemCategory}>
            {basket.category}
          </h2>
          <h1 className={recommendationStyle.itemName}>{basket.name}</h1>

          <h2 className={recommendationStyle.itemPrice}>£{basket.price}</h2>
      </div>
      {/* <div className='bg-gray-200'/> */}
    </Link>
  );
};

export default ProductCard;
