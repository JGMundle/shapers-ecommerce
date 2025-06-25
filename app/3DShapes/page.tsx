"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/Basket/ProductCard";
import { LuCuboid } from "react-icons/lu";
import { TbSphere, TbCone } from "react-icons/tb";
import { IoPrismOutline } from "react-icons/io5";
import { GrCube } from "react-icons/gr";
import { BiCylinder } from "react-icons/bi";

const ThreeDShapes = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUserData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://jsonplaceholder.typicode.com/user");
      const data = await res.json();
      if (res.ok) setUserData(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h1 className="text-7xl font-bold my-20 ml-10">3D Shapers</h1>
      <div className="grid grid-cols-3 gap-3">
        {/* Cube */}
        <ProductCard
          name="Cube"
          category="3D Shapes"
          price={13}
          icon={<GrCube size={190} />}
        />

        {/* Prism */}
        <ProductCard
          name="Prism"
          category="3D Shapes"
          price={12}
          icon={<IoPrismOutline size={190} />}
        />

        {/* Sphere */}
        <ProductCard
          name="Sphere"
          category="3D Shapes"
          price={11}
          icon={<TbSphere size={190} />}
        />
      </div>

      <div className="grid grid-cols-3 gap-3 mt-20 ml-28 mb-24">
        {/* Cone */}
        <ProductCard
          name="Cone"
          category="3D Shapes"
          price={26}
          icon={<TbCone size={190} />}
        />

        {/* Cylinder */}
        <ProductCard
          name="Cylinder"
          category="3D Shapes"
          price={25}
          icon={<BiCylinder size={190} />}
        />

        {/* Cuboid */}
        <ProductCard
          name="Cuboid"
          category="3D Shapes"
          price={24}
          icon={<LuCuboid size={190} />}
        />
      </div>
      <div>{userData}</div>

      <Footer />
    </div>
  );
};

export default ThreeDShapes;
