"use client";
import React from "react";
import { BasketItem, useBasket } from "@/Statemanager/useBasket";
import { FaShoppingBag } from "react-icons/fa";

interface Props {
  item: BasketItem;
}

const AddItemButton = ({ item }: Props) => {
  //You need React Redux And redux-toolkit
  //{id: 1, url: "www.google.com", category: "clothes", description: "Very nice", name: "Nike", price: 15, quantity: 1}
  let { addItem } = useBasket();
  // let storeItem = useBasket((state) => state.items)

  const handleAddToBasket = () => {
    addItem(item);
  };

  // Styles
  const buttonStyle = {
    addToBasket: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#2e8bc0",
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 7,
      paddingBlock: 5,

      marginBlock: 10,
    },
  };

  return (
    <div onClick={handleAddToBasket}>
      <FaShoppingBag name="shopping" size={24} style={{ marginRight: 3 }} />
      <p>Add to Basket</p>
    </div>
  );
};

export default AddItemButton;
