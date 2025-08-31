import Link from 'next/link'
import React from 'react'
import styles from "./RecommendedCard.module.css";
import { BasketItem } from '@/Statemanager/useBasket';


const RecommendedCard = (basket: Partial<BasketItem>) => {
  // Styles
  const recommendationStyle = {
    // mainDiv: "flex flex-row space-x-16 mt-16 justify-center",

    mainItemStyle: "border-2 border-gray-400 rounded-md px-10 p-5 shadow-lg",
    itemCategory: "font-bold text-gray-400 text-lg",
    itemName: "text-2xl mt-2 font-extrabold",
    itemPrice: "text-2xl mt-2 font-mono",
  };

    return (
      <Link href={`/products/${basket.id}`} className={styles.mainItemStyle}>
        {/* Recommendation for 2D shapes */}
          <div>{basket.icon}</div>
          <div className="mt-10">
            <h2 className={recommendationStyle.itemCategory}>{basket.category}</h2>
            <h1 className={recommendationStyle.itemName}>{basket.name}</h1>
            <h2 className={recommendationStyle.itemPrice}>£{basket.price}</h2>
          </div>
        {/* <div className="mt-" /> */}
      </Link>
    );
}

export default RecommendedCard