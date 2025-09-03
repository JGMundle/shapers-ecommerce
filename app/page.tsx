import { GrCube } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";
import RecommendedCard from "@/app/components/ProductCards/RecommendedCard";
import { recommendedItemDate } from "./utils/productdata";
import { ReactElement } from "react";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";
import Dropdown from "./components/Dropdown/Dropdown";
import DropdownItems from "./components/Dropdown/DropdownItems";

//1. Install Prisma
//2. Create a model for products
//3. Adding products database
//4. React Query or useEffect to extract data for viewing on the website

// function generateRandoms = () => {
//   Array.from("")
// }

const iconSize = 140

export const iconMapObject: { [x: string]: ReactElement } = {
  circle: <FaCircle size={iconSize} />,
    cube: <GrCube size={iconSize} />,
  default: <TfiLayoutWidthDefaultAlt size={iconSize} />,
};

export default function Home() {
  return (
    <div>
      <main className="p-16">
        <h1 className="text-green-600 text-4xl font-bold">
          Recommended Products
        </h1>
        <p className="text-2xl text-zinc-400">Explore most well known shapes</p>

        {/* Recommedation for 2D shapes */}
        <div className="flex flex-row justify-center space-x-20">
          {recommendedItemDate.map((item, index) => (
            <RecommendedCard
              key={index}
              icon={iconMapObject[item.icon ? item.icon : "default"]}
              category={item.category as string}
              name={item.shape}
              price={item.price}
              id={String(item.id)}
            />
          ))}
        </div>
      </main>

      <div className="bg-green-400" />
    </div>
  );
}
