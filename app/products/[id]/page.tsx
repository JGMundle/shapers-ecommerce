"use client";
import { iconMapObject } from "@/app/2DShapes/page";
import { itemData } from "@/app/utils/productdata";
import React from "react";

import { useParams } from "next/navigation";
import AddItemButton from "@/app/components/Basket/AddItemButton";

const page = () => {
  function returnIconName(id: string | number): string | undefined {
    return itemData.find((shape) => shape.id === id)?.icon;
  }

  const params = useParams();
  const id = params.id as string;

  function getIcon() {
    const icon = returnIconName(Number(id));
    if (typeof icon !== "undefined") {
      return iconMapObject[icon];
    }
  }

  return (
    <div className="p-20">
      {/* Item and Image */}
      <div>{getIcon()}</div>

      {/* Price */}
      <div>
        <h1 style={{ fontSize: 30 }}>£</h1>
      </div>

      {/* This is where the "Add item button" was */}
      {/* <AddItemButton item={}/> */}

      {/* Description */}

      <h1 style={{ marginTop: 6, fontSize: 19 }}>
        This is a description about the product.
      </h1>

      {/* Redivs */}
      <h1 style={{ fontSize: 20, marginTop: 20, fontWeight: "600" }}>
        Customer reviews go here
      </h1>
    </div>
  );
};

export default page;
