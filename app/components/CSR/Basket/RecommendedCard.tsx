import Link from 'next/link'
import React, { ReactElement } from 'react'
import styles from "./ProductCard.module.css";

interface PropInfo {
    icon: ReactElement
    category: string
    itemName: string
    price: number
    id?: string
}

const RecommendedCard = ({icon, category, itemName, price}: PropInfo) => {
  // Styles
  const recommendationStyle = {
    mainDiv: "flex flex-row space-x-16 mt-28 justify-center",

    mainItemStyle: "border-2 border-gray-400 rounded-md px-10 p-5 shadow-lg",
    itemCategory: "font-bold text-gray-400 text-lg",
    itemName: "text-3xl mt-2 font-extrabold",
    itemPrice: "text-3xl mt-2 font-mono",
  };

    return (
        <Link href={''} className={recommendationStyle.mainDiv}>
          {/* Recommendation for 2D shapes */}
          <div className={styles.mainItemStyle}>
                <div>{icon}</div>
            <div className="mt-10">
                    <h2 className={recommendationStyle.itemCategory}>{category}</h2>
                    <h1 className={recommendationStyle.itemName}>{itemName}</h1>

                    <h2 className={recommendationStyle.itemPrice}>£{price}</h2>
            </div>
          </div>
        </Link>
    );
}

export default RecommendedCard