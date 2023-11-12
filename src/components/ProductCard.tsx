import { PlusIcon } from "lucide-react";
import React from "react";

export const ProductCard = ({ name, description, price, stock, thumbnail }) => {
  return (
    <div className="relative flex max-w-xs flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex flex-col">
        <div className={`h-60 w-72 bg-[${thumbnail}] bg-cover bg-center`}></div>

        <div className="padding flex flex-col gap-3">
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-gray-400">{description}</div>
          <div className="flex items-center justify-between">
            <p className="font-bold">{price}</p>
            <p className={stock ? "text-green-400" : " text-red-400"}>
              {stock ? stock : "None"} in Stock
            </p>
          </div>
        </div>
      </div>

      <div className="flex cursor-pointer items-center justify-center gap-3 bg-teal-300 p-3 font-semibold hover:text-white">
        Add to Cart <PlusIcon />
      </div>
    </div>
  );
};
