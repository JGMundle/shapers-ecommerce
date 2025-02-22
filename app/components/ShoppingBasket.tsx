import React from "react";
import { useDispatch, useStore } from "react-redux";
import { addItem, BasketItem } from "@/hooks/basketSlice";
import AddItemButton from "./CSR/Basket/AddItemButton";

let basket = [];

//  id: number;
//  url: string;
//  name: string;
//  price: number;
//  quantity: number;
//  category: string;
//  description: string;

const ShoppingBasket = () => {
  //items
  let items = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    url: `random-${Math.random()}`,
    name: `name-${index}`,
    price: index + 10,
    quantity: 100,
    category: `cat-${Math.random()}`,
    description: `desc-${Math.random()}`,
  }));

  const store = useStore();

  return (
    <div>
      <div>
        <h1>ShoppingBasket</h1>
        {basket.length === 0 && <h3>Basket is Empty</h3>}
      </div>
      <div className="flex flex-col space-y-2">
        {items.map((item, index) => (
          <div key={index}>
            <h1>Item Id: {item.id}</h1>
            <h2>Price: £{item.price}</h2>
            <h2>Link: {item.url}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingBasket;
