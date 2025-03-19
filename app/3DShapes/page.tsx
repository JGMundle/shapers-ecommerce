import React from "react";
import NavBar from "../components/SSR/NavBar";
import Footer from "../components/SSR/Footer";
import ProductCard from "../components/CSR/Basket/ProductCard";
import { LuCuboid } from "react-icons/lu";
import { TbSphere, TbCone } from "react-icons/tb";
import { IoPrismOutline } from "react-icons/io5";
import { GrCube } from "react-icons/gr";
import { BiCylinder } from "react-icons/bi";

const ThreeDShapes = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-7xl font-bold my-20 ml-10">3D Shapers</h1>
      <div className="grid grid-cols-3 gap-3">
        {/* Cube */}
        <ProductCard
          itemName="Cube"
          category="3D Shapes"
          price={13}
          icon={<GrCube size={190} />}
        />

        {/* Prism */}
        <ProductCard
          itemName="Prism"
          category="3D Shapes"
          price={12}
          icon={<IoPrismOutline size={190} />}
        />

        {/* Sphere */}
        <ProductCard
          itemName="Sphere"
          category="3D Shapes"
          price={11}
          icon={<TbSphere size={190} />}
        />
      </div>

      <div className="grid grid-cols-3 gap-3 mt-20 ml-28 mb-24">
        {/* Cone */}
        <ProductCard
          itemName="Cone"
          category="3D Shapes"
          price={26}
          icon={<TbCone size={190} />}
        />

        {/* Cylinder */}
        <ProductCard
          itemName="Cylinder"
          category="3D Shapes"
          price={25}
          icon={<BiCylinder size={190} />}
        />

        {/* Cuboid */}
        <ProductCard
          itemName="Cuboid"
          category="3D Shapes"
          price={24}
          icon={<LuCuboid size={190} />}
        />
      </div>

      <Footer />
    </div>
  );
};

export default ThreeDShapes;
