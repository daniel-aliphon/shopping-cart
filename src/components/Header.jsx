import { ShoppingBag } from "lucide-react";
import "./Header.css";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-inner-container">
        <h1 className="header-heading cursive">SHOPPING CART</h1>
        <Button href={""}>
          <ShoppingBag size={35} />
        </Button>
      </div>
    </div>
  );
};
