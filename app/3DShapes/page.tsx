"use client";
import React, { ReactElement } from "react";
import ProductCard from "../components/Basket/ProductCard";
import { LuCuboid } from "react-icons/lu";
import { TbSphere, TbCone } from "react-icons/tb";
import { IoPrismOutline } from "react-icons/io5";
import { GrCube } from "react-icons/gr";
import { BiCylinder } from "react-icons/bi";
import { itemDataThreeDimentional} from "../utils/productdata"

const threeDimentinalIconSize = 140

export const threeDimentinalIconMapObject: { [x: string]: ReactElement } = {
  cube: <GrCube size={threeDimentinalIconSize} />,
  prism: <IoPrismOutline size={threeDimentinalIconSize} />,
  sphere: <TbSphere size={threeDimentinalIconSize} />,
  cone: <TbCone size={threeDimentinalIconSize} />,
  cylinder: <BiCylinder size={threeDimentinalIconSize} />,
  cuboid: <LuCuboid size={threeDimentinalIconSize} />,
};

const ThreeDShapes = () => {

  return (
    <div>
      <h1 className="text-7xl font-bold my-20 ml-10">3D Shapers</h1>
      <div className="grid grid-cols-3 gap-3">
        {itemDataThreeDimentional.map((item, index) => (
          <ProductCard
            key={index}
            name={item.shape as string}
            category={item.category as string}
            price={item.price}
            icon={threeDimentinalIconMapObject[item.icon ? item.icon : "default"]}
          />
            
          ))}
        </div>
    </div>
  );
};

export default ThreeDShapes;
