"use client"
import NavBar from "./components/SSR/NavBar";
import { FaShapes } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";


export default function Home() {

  const footerStyle = {
    mainfooter: "bg-slate-500 p-10 flex flex-row space-x-10 items-center justify-center",
    countryAndPayment: "border p-2 rounded-sm text-lg",
  };

  return (
    <div>
      <NavBar />
      <main className="p-10 ml-20">
        <div className="flex flex-row space-x-10 mt-44">
          {/* Recommendation for 2D shapes */}
          <div className="border-2 border-gray-400 rounded-md p-2">
            <FaCircle
              onClick={() => console.log('Navigating to "/UserItemScreen"')}
              size={200}
              className="p-7"
            />
            <h2 className="font-extrabold text-gray-400">2D Shapes</h2>
            <h1>Circle</h1>


            <h2>£1</h2>
          </div>



          {/* Recommendation for 3D shapes */}
          <div className="border-2 border-gray-400 rounded-md">

            <h1>Circle</h1>
            <h2>£1</h2>
          </div>
        </div>
      </main>

      {/* <footer className={footerStyle.mainfooter}>
        <div className="flex flex-row space-x-2 items-center">
          <FaShapes size={40} />
          <h1 className="text-3xl font-bold">Shapers</h1>
        </div>

        <div className="flex flex-row text-white space-x-2">
          <h3 className={footerStyle.countryAndPayment}>£ GBP - Pounds</h3>

          <h3 className={footerStyle.countryAndPayment}>United Kingdom</h3>
        </div>
      </footer> */}
    </div>
  );
}
