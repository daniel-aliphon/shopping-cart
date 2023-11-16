import React from "react";
import { SidePanel } from "./SidePanel";

export const Header = ({ cart, removeItemFromCart }) => {
  return (
    <>
      <div className="padding fixed top-0 z-10 w-full bg-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between font-semibold">
          <h1>Store Name</h1>
          <SidePanel
            removeItemFromCart={removeItemFromCart}
            cart={cart}
          />
        </div>
      </div>
    </>
  );
};
