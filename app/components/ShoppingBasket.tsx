'use client'
import React from "react";
import { useStore } from "react-redux";
import { useBasket } from "@/Statemanager/useBasket";
import ProductCard from "./Basket/ProductCard";

const ShoppingBasket = () => {

  let basket = useBasket((state) => state.items)


  return (
    <div>
      <div className="mt-10 p-5 flex flex-row justify-evenly">
        {/* Titles */}
        <div
          className="border-b border-gray-400 pb-3 flex flex-row items-end relative"
          style={{ width: "60vw" }}
        >
          <h1 className="text-4xl font-semibold">Shopping Basket</h1>
          <p className="absolute right-3 text-lg">Price</p>
        </div>

        <div className="border-2 p-5 flex flex-col items-center">
          <h1 className="text-2xl">
            Subtotal &#40;0 items&#41;: &#91;Insert price here&#93;
          </h1>

          <button className="p-2 w-60 mt-7 rounded-full text-lg shadow-md" style={{ backgroundColor: "rgb(0, 192, 0)" }}>
            Proceed to checkout
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-2 p-5 ">
        {/* {items.map((item, index) => (
          <div key={index}>
            <h1>Item Id: {item.id}</h1>
            <h2>Price: £{item.price}</h2>
            <h2>Link: {item.url}</h2>
          </div>
        ))} */}

        {/* Basket */}
        <div className="mt-4 ml-20 bg-green-200 p-3">
          {basket.length === 0 ? <h3 className="text-3xl">Basket is Empty</h3> :
            basket.map((item, index) => (
              <ProductCard key={index}
                name={item.name}
                category={item.category}
                price={item.price}
                icon={item.icon}
                id={item.id}
              />
            ))
          }
    
        </div>
      </div>
    </div>
  );
};

export default ShoppingBasket;
