import React from "react";
import { Header } from "../components/Header";
import { Products } from "./Home/Products";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="mt-40">
        <Products />
      </div>
    </>
  );
};
