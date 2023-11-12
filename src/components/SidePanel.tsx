import { ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";

export const SidePanel = () => {
  const [sidePannelVisiblity, setSidePannelVisiblity] = useState(false);
  const handleSideBarVisiblity = () =>
    setSidePannelVisiblity(!sidePannelVisiblity);

  if (sidePannelVisiblity) {
    return (
      <>
        <div
          onClick={handleSideBarVisiblity}
          className="absolute left-0 top-0 h-[100vh] w-[100vw] bg-transparent backdrop-blur-sm"></div>
        <div
          className={`${
            sidePannelVisiblity && "right-0"
          } absolute right-0 top-0 h-[100vh] w-[400px] padding shadow-2xl bg-white`}>
          <X
            className="cursor-pointer"
            onClick={handleSideBarVisiblity}
          />
        </div>
      </>
    );
  } else {
    return (
      <ShoppingCart
        onClick={handleSideBarVisiblity}
        className="cursor-pointer"
      />
    );
  }
};
