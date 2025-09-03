"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

interface Props {
  children: ReactNode;
}

//Be sure to end the server and start it again to make sure the full render is successful
const HIDDEN_PATHS = ["/signon/signup", "/signon/login"];

const MainComponent = ({ children }: Props) => {
  const pathname = usePathname();
  const hideLayout =
    HIDDEN_PATHS.includes(pathname) 
  return (
    <div className="flex min-h-screen flex-col">
      {!hideLayout && <NavBar />}
      <main className="flex-1">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
};

export default MainComponent;
