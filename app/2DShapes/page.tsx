import React from "react";
import NavBar from "../components/SSR/NavBar";
import { FaSquare } from "react-icons/fa";
import { BsFillTriangleFill, BsHexagonFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import ProductCard from "../components/CSR/Basket/ProductCard";

const page = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-5xl font-bold">2D Shapers</h1>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <FaSquare size={200} />
        </div>
        <div>
          <BsFillTriangleFill size={200} />
        </div>
        <div>
          <FaCircle size={200} />
        </div>

        <ProductCard itemName="Hexagon" category="2D Shapes" price={6} icon={<BsHexagonFill size={200}/>}/>
      </div>
    </div>
  );
};

export default page;
