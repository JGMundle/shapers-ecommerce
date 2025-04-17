'use client'
import React from 'react'
import { FaShoppingBag } from "react-icons/fa";

const page = () => {
  // Styles
  const styles = {
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
    <div style={{ borderColor: "blue", padding: 7 }}>

      {/* Item and Image */}
      <h1 style={{ fontWeight: "600", fontSize: 25, marginBlock: 10 }}>
        {/* {String(itemData.name)} */}
      </h1>
      {/* <Image
        source={Number(itemData.url)}
        style={{ width: 400, height: 400 }}
      /> */}

      {/* Price */}
      <div>
        {/* <h1 style={{ fontSize: 30 }}>£{Number(itemData.price)}</h1> */}
      </div>

      {/* <div style={styles.addToBasket} onClick={() => handleAddItem()}>
        <FaShoppingBag name="shopping" size={24} style={{ marginRight: 3 }} />
        <p>Add to Basket</p>
      </div> */}

      {/* Description */}

      <h1 style={{ marginTop: 6, fontSize: 19 }}>
        This is a description about the product.
      </h1>

      {/* Redivs */}
      <h1 style={{ fontSize: 20, marginTop: 20, fontWeight: "600" }}>
        Customer reviews
      </h1>
    </div>
  );
}

export default page