import { ShoppingCart } from "lucide-react";
import React from "react";

export const Header = () => {
  return (
    <div className="padding top-0 bg-red-500 fixed w-full">
      <div className="flex font-semibold mx-auto items-center justify-between max-w-7xl">
        <h1>Store Name</h1>
        <ShoppingCart />
      </div>
    </div>
  );
};
