import React from "react";
import { ProductCard } from "../../components/ProductCard";

export const Products = () => {
  return (
    <div className=" max-w-7xl mx-auto flex gap-y-10 justify-between flex-wrap ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
