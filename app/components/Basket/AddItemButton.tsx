'use client'
import React from 'react'
import { BasketItem, useBasket } from '@/Statemanager/useBasket';

interface Props {
  item: BasketItem
}

const AddItemButton = ({item}: Props) => {
  //You need React Redux And redux-toolkit
  //{id: 1, url: "www.google.com", category: "clothes", description: "Very nice", name: "Nike", price: 15, quantity: 1}
  let { addItem } = useBasket()
  let storeItem = useBasket((state) => state.items)

  const handleAddToBasket = () => {
      addItem(item)
  };

  return (
    <div className="p-4 rounded-sm bg-purple-400 text-white" onClick={handleAddToBasket}>
      <h1>Add Item</h1>
    </div>
  );
}

export default AddItemButton