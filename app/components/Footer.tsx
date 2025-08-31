import React from 'react'
import { FaShapes } from 'react-icons/fa';

const Footer = () => {
    // Styles
      const footerStyle = {
        mainfooter:
          "bg-slate-500 p-20 flex flex-row space-x-10 items-center justify-center",
        countryAndPayment: "border p-2 rounded-sm text-lg",
      };
  return (
    <footer className={footerStyle.mainfooter}>
      <div className="flex flex-row space-x-2 items-center">
        <FaShapes size={25} />
        <h1 className="text-2xl font-bold">Shapers</h1>
      </div>

      <div className="flex flex-row text-white space-x-5">
        <h3 className={footerStyle.countryAndPayment}>£ GBP - Pounds</h3>

        <h3 className={footerStyle.countryAndPayment}>United Kingdom</h3>
      </div>

      {/* <div className=' main'/> */}
    </footer>
  );
}

export default Footer