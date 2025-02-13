import Link from "next/link";
import NavBar from "./components/SSR/NavBar";
import { FaShapes } from "react-icons/fa6";


export default function Home() {

  const footerStyle = {
    mainfooter: "bg-slate-500 p-10 flex flex-row space-x-10 items-center justify-center",
    countryAndPayment: "border p-2 rounded-sm text-lg",
  };

  return (
    <div>
      <NavBar />
      <main></main>

      <footer className={footerStyle.mainfooter}>
        <div className="flex flex-row space-x-2 items-center">
          <FaShapes size={40} />
          <h1 className="text-3xl font-bold">Shapers</h1>
        </div>

        <div className="flex flex-row text-white space-x-2">
          <h3 className={footerStyle.countryAndPayment}>£ GBP - Pounds</h3>

          <h3 className={footerStyle.countryAndPayment}>United Kingdom</h3>
        </div>
      </footer>
    </div>
  );
}
