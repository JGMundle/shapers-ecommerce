"use client"
import React from 'react'
import { useBasket } from "@/Statemanager/useBasket";
import { LuShoppingCart } from "react-icons/lu";
import Link from 'next/link';

const Basket = () => {
    let item = useBasket((state) => state.items);
  return (
    <div>
      <Link
        href={"/ShoppingBasket"}
        className="flex flex-row border-2 rounded-full px-5 py-3 items-center space-x-1 hover:bg-gray-100 hover:cursor-pointer"
      >
        <LuShoppingCart size={26} />
        <p className="text-lg">{item.length}</p>
      </Link>
    </div>
  );
}

export default Basket