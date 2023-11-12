import React, { useState } from "react";
import { Header } from "../components/Header";
import { Products } from "./Home/Products";
import { SidePanel } from "../components/SidePanel";

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
