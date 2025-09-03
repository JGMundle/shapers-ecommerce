"use client";
import React, { ReactElement, useState } from "react";
import { FaSquare, FaCircle } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import {
  BsFillTriangleFill,
  BsHexagonFill,
  BsFillPentagonFill,
} from "react-icons/bs";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";
import ProductCard from "../components/ProductCards/ProductCard";
import { itemData } from "../utils/productdata";

const iconSize = 140

export const iconMapObject: { [x: string]: ReactElement } = {
  triangle: <BsFillTriangleFill size={iconSize} />,
  hexagon: <BsHexagonFill size={iconSize} />,
  pentagon: <BsFillPentagonFill size={iconSize} />,
  circle: <FaCircle size={iconSize} />,
  square: <FaSquare size={iconSize} />,
  diamond: <FaDiamond size={iconSize} />,
  default: <TfiLayoutWidthDefaultAlt size={iconSize} />,
};
const TwoDShapes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  //Purpose of this object is provide an O(1) Lookup table that allows to map keys to our icons
  //So that we can store the data of our shopping items with keys and display icons on the scren based on the keys

  // [x:string]: ReactElement - Index signature to allow for unlimited new key-value pairs

  return (
    <div>
      <h1 className="text-7xl font-bold my-10 ml-10">2D Shapers</h1>
      <div className="grid grid-cols-3 gap-36 p-20">

        {itemData.map((item, index) => (
          <ProductCard
            key={index}
            name={item.shape as string}
            category={item.category as string}
            price={item.price}
            icon={iconMapObject[item.icon ? item.icon : "default"]}
            id={String(item.id)}
          />
        ))}
        </div>
    </div>
  );
};

export default TwoDShapes;
