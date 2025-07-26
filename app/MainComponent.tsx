"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

interface Props {
  children: ReactNode;
}

const HIDDEN_PATHS = ["/signon/signup", "/signon/login"];

const MainComponent = ({ children }: Props) => {
  const pathname = usePathname();
  const hideLayout =
    HIDDEN_PATHS.includes(pathname) 
  return (
    <>
      {!hideLayout && <NavBar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
};

export default MainComponent;
