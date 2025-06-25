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
import ProductCard from "../components/Basket/ProductCard";
import Footer from "../components/Footer";
import axios from "axios";

const TwoDShapes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  //Purpose of this object is provide an O(1) Lookup table that allows to map keys to our icons
  //So that we can store the data of our shopping items with keys and display icons on the scren based on the keys

  // [x:string]: ReactElement - Index signature to allow for unlimited new key-value pairs
  const iconMapObject: { [x: string]: ReactElement } = {
    triangle: <BsFillTriangleFill />,
    hexagon: <BsHexagonFill />,
    pentagon: <BsFillPentagonFill />,
  };

  let itemValue = [
    { name: "John", category: "Humans", price: 2000, icon: "triangle" },
  ];
  itemValue.map((item) => (
    <ProductCard
      name={item.name}
      category={item.category}
      price={item.price}
      icon={iconMapObject[item.icon]}
    />
  ));

  const getItems = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.status === 400) {
        console.log("Error in attemping to extract data from backend source");
      }
      const data = await response.data;
      setData(data);
      return;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error: ", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h1 className="text-7xl font-bold my-20 ml-10">2D Shapers</h1>
      <div className="grid grid-cols-3 gap-3">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name as string}
            category={item.username as string}
            price={100}
            icon={iconMapObject[item.icon ? item.icon : "triangle"]}
          />
        ))}

        {/* Square */}
        {/* <ProductCard
            itemName="Square"
            category="2D Shapes"
            price={3}
            icon={<FaSquare size={190} />}
          /> */}

        {/* Triangle */}
        {/* <ProductCard
            itemName="Triangle"
            category="2D Shapes"
            price={2}
            icon={<BsFillTriangleFill size={190} />}
          /> */}

        {/* Circle */}
        {/* <ProductCard
            itemName="Circle"
            category="2D Shapes"
            price={1}
            icon={<FaCircle size={190} />}
          /> */}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-20 ml-28 mb-24">
        {/* Hexagon */}
        {/* <ProductCard
          itemName="Hexagon"
          category="2D Shapes"
          price={6}
          icon={<BsHexagonFill size={190} />}
        /> */}

        {/* Pentagon */}
        {/* <ProductCard
          itemName="Pentagon"
          category="2D Shapes"
          price={5}
          icon={<BsFillPentagonFill size={180} />} /> */}

        {/* Diamond */}
        {/* <ProductCard
        itemName="Diamond"
        category="2D Shapes"
        price={4}
        icon={<FaDiamond size={190}/>}/> */}
      </div>

      <Footer />
    </div>
  );
};

export default TwoDShapes;
