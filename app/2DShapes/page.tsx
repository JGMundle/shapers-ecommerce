import React from "react";
import NavBar from "../components/SSR/NavBar";
import { FaSquare } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import {
  BsFillTriangleFill,
  BsHexagonFill,
  BsFillPentagonFill,
} from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import ProductCard from "../components/CSR/Basket/ProductCard";
import Footer from "../components/SSR/Footer";

const page = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-5xl font-bold my-10">2D Shapers</h1>
      <div className="grid grid-cols-3 gap-3">
        {/* Square */}
          <ProductCard
            itemName="Square"
            category="2D Shapes"
            price={3}
            icon={<FaSquare size={190} />}
          />

        {/* Triangle */}
          <ProductCard
            itemName="Triangle"
            category="2D Shapes"
            price={2}
            icon={<BsFillTriangleFill size={190} />}
          />

        {/* Circle */}
          <ProductCard
            itemName="Circle"
            category="2D Shapes"
            price={1}
            icon={<FaCircle size={190} />}
          />
      </div>
      <div className="grid grid-cols-3 gap-3 mt-20 ml-28 mb-24">
        {/* Hexagon */}
        <ProductCard
          itemName="Hexagon"
          category="2D Shapes"
          price={6}
          icon={<BsHexagonFill size={190} />}
        />

        {/* Pentagon */}
        <ProductCard
          itemName="Pentagon"
          category="2D Shapes"
          price={5}
          icon={<BsFillPentagonFill size={180} />} />
        

      {/* Diamond */}
      <ProductCard
        itemName="Diamond"
        category="2D Shapes"
        price={4}
        icon={<FaDiamond size={190}/>}/>
      </div>


      <Footer/>
    </div>
  );
};

export default page;
