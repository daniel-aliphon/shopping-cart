import React, { useState } from "react";
import { Header } from "../components/Header";
import { Products } from "./Home/Products";

const cart: string[] = [];
function addItemToCart(item: string) {
  // setCart([...cart, item]);
  cart.push(item);
  console.log(cart.length);
  console.log(cart);
}

function removeItemFromCart(i) {
  if (i !== -1) {
    cart.pop();
    console.log(cart.length);
    console.log(cart);
  }
}
export const Home = () => {
  // const [cart, setCart] = useState<String[]>([]);

  return (
    <>
      <Header
        removeItemFromCart={removeItemFromCart}
        cart={cart}
      />
      <div className="mt-40">
        <Products addItemToCart={addItemToCart} />
      </div>
    </>
  );
};
