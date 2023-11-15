import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { products } from "../..";

export const Products = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-y-10">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          stock={product.stock}
          thumbnail={product.thumbnail}
          product={product}
        />
      ))}
    </div>
  );
};
