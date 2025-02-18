"use client"
import NavBar from "./components/SSR/NavBar";
import { GrCube } from "react-icons/gr";
import { FaCircle, FaShapes } from "react-icons/fa";


export default function Home() {

  // Styles
  const footerStyle = {
    mainfooter: "bg-slate-500 p-20 flex flex-row space-x-10 items-center justify-center",
    countryAndPayment: "border p-2 rounded-sm text-lg",
  };

  const recommendationStyle = {
    mainTagStyle: "p-20",
    mainDiv: "flex flex-row space-x-16 mt-28 justify-center",

    mainItemStyle: "border-2 border-gray-400 rounded-md px-10 p-5 shadow-lg",
    itemCategory: "font-bold text-gray-400 text-lg",
    itemName: "text-3xl mt-2 font-extrabold",
    itemPrice: "text-3xl mt-2 font-mono"
  };

  return (
    <div>
      <NavBar />
      <main className={recommendationStyle.mainTagStyle}>
        <h1 className="text-green-600 text-5xl font-bold">
          Recommended Products
        </h1>
        <p className="text-2xl text-zinc-400">Explore most well known shapes</p>

        <div className={recommendationStyle.mainDiv}>
          {/* Recommendation for 2D shapes */}
          <div className={recommendationStyle.mainItemStyle}>
            <FaCircle
              onClick={() => console.log('Navigating to "/UserItemScreen"')}
              size={200}
              className="p-7"
            />
            <div className="mt-10">
              <h2 className={recommendationStyle.itemCategory}>2D Shapes</h2>
              <h1 className={recommendationStyle.itemName}>Circle</h1>

              <h2 className={recommendationStyle.itemPrice}>£1</h2>
            </div>
          </div>

          {/* Recommendation for 3D shapes */}
          <div className={recommendationStyle.mainItemStyle}>
            <GrCube size={200} className="p-7" />

            <div className="mt-10">
              <h2 className={recommendationStyle.itemCategory}>3D Shapes</h2>
              <h1 className={recommendationStyle.itemName}>Cube</h1>

              <h2 className={recommendationStyle.itemPrice}>£13</h2>
            </div>
          </div>
        </div>
      </main>

      <div className="p-"/>

      <footer className={footerStyle.mainfooter}>
        <div className="flex flex-row space-x-2 items-center">
          <FaShapes size={25} />
          <h1 className="text-2xl font-bold">Shapers</h1>
        </div>

        <div className="flex flex-row text-white space-x-2">
          <h3 className={footerStyle.countryAndPayment}>£ GBP - Pounds</h3>

          <h3 className={footerStyle.countryAndPayment}>United Kingdom</h3>
        </div>
      </footer>
    </div>
  );
}
