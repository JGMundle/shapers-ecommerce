"use client";
import React, { ReactElement, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { FaSquare, FaCircle } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import {
  BsFillTriangleFill,
  BsHexagonFill,
  BsFillPentagonFill,
} from "react-icons/bs";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";
import ProductCard from "../components/Basket/ProductCard";
import Footer from "../components/Footer";
import axios from "axios";
import { itemData } from "../utils/productdata";

export const iconMapObject: { [x: string]: ReactElement } = {
  triangle: <BsFillTriangleFill />,
  hexagon: <BsHexagonFill />,
  pentagon: <BsFillPentagonFill />,
  circle: <FaCircle />,
  square: <FaSquare />,
  diamond: <FaDiamond />,
  default: <TfiLayoutWidthDefaultAlt />,
};
const TwoDShapes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  //Purpose of this object is provide an O(1) Lookup table that allows to map keys to our icons
  //So that we can store the data of our shopping items with keys and display icons on the scren based on the keys

  // [x:string]: ReactElement - Index signature to allow for unlimited new key-value pairs

  // const getItems = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     if (response.status === 400) {
  //       console.log("Error in attemping to extract data from backend source");
  //     }
  //     const data = await response.data;
  //     setData(data);
  //     return;
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.error("Error: ", error.message);
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getItems();
  // }, []);

  return (
    <div>
      <h1 className="text-7xl font-bold my-20 ml-10">2D Shapers</h1>
      <div className="grid grid-cols-3 gap-3">

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
