import { Plus } from "lucide-react";
import React from "react";

export const ProductCard = () => {
  return (
    <div className="flex flex-col gap padding max-w-xs rounded-lg shadow-lg">
      <div className=" h-60 w-60"></div>
      <div className="underline underline-offset-2">Product Item #1</div>
      <div className="flex items-center rounded-lg bg-slate-100 pl-1 justify-between">
        <p>R778.99</p>
        <button className="flex shadow-lg gap-1 px-2 p-1 bg-red-500 rounded-lg">
          Add to Cart <Plus />
        </button>
      </div>
    </div>
  );
};
