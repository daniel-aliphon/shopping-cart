import { Header } from "../components/Header";
import { Products } from "./Home/Products";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home-body">
        <Products />
      </div>
    </>
  );
};
