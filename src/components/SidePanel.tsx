import { ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";

export const SidePanel = ({
  notificationNumber,
  notificationVisibility,
}: {
  notificationNumber: number;
  notificationVisibility: boolean;
}) => {
  const [sidePannelVisiblity, setSidePannelVisiblity] = useState(false);
  const handleSideBarVisiblity = () =>
    setSidePannelVisiblity(!sidePannelVisiblity);

  if (sidePannelVisiblity) {
    return (
      <>
        <div
          onClick={handleSideBarVisiblity}
          className="absolute left-0 top-0 h-[100vh] w-[100vw] bg-transparent backdrop-blur-sm"></div>
        <div className="padding absolute right-0 top-0 h-[100vh] w-[400px] bg-white shadow-2xl transition-transform">
          <X
            className="cursor-pointer"
            onClick={handleSideBarVisiblity}
          />
        </div>
      </>
    );
  } else {
    return (
      <div
        onClick={handleSideBarVisiblity}
        className="relative cursor-pointer">
        <ShoppingCart />
        {notificationVisibility ? (
          <div className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
            {notificationNumber}
          </div>
        ) : null}
      </div>
    );
  }
};
