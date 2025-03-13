'use client'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'

interface PropInfo {
  icon: ReactElement
  category: string
  itemName: string
  price: number
  id?: string
}

const ProductCard = ({category, itemName, price, icon, id}: PropInfo) => {
  // styles
    const recommendationStyle = {
      mainDiv: "flex flex-row justify-center w-72",

      mainItemStyle: "border-2 border-gray-400 rounded-md px-10 p-5 shadow-lg",
      itemCategory: "font-bold text-gray-400 text-lg",
      itemName: "text-3xl mt-2 font-extrabold",
      itemPrice: "text-3xl mt-2 font-mono",
    };
  
  return (
    <Link href={`/products/${id}`} className={recommendationStyle.mainDiv} style={{border: "2px solid orange"}}>
      {/* Recommendation for 2D shapes */}
      {/* Icons */}
      <div className={recommendationStyle.mainItemStyle}>
        <div>{icon}</div>
        <div className="mt-10">
          <h2 className={recommendationStyle.itemCategory}>{category}</h2>
          <h1 className={recommendationStyle.itemName}>{itemName}</h1>

          <h2 className={recommendationStyle.itemPrice}>£{price}</h2>
        </div>
      </div>
      {/* <div className='w-72'/> */}
    </Link>
  );
}

export default ProductCard