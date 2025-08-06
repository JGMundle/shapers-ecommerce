import { GrCube } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";
import RecommendedCard from "./components/Basket/RecommendedCard";

//1. Install Prisma
//2. Create a model for products
//3. Adding products database
//4. React Query or useEffect to extract data for viewing on the website

// function generateRandoms = () => {
//   Array.from("")
// }

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
          <RecommendedCard
            category="2D Shapes"
            icon={<FaCircle size={190} className="p-7" />}
            itemName="Circle"
            price={1}
            
          />

          {/* Recommendation for 3D shapes */}
          <RecommendedCard
            category="3D Shapes"
            icon={<GrCube size={190} className="p-7" />}
            itemName="Cube"
            price={13}
          />
        </div>
      </main>

      {/* <div className="p-" /> */}
    </div>
  );
}
