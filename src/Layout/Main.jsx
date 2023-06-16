import { Outlet } from "react-router-dom";
import NavBar from "../Share/NavBar/NavBar";
import { FaShoppingBag, FaShopify } from "react-icons/fa";

const Main = () => {
  return (
    <div>
      <div className="flex">
        <div className=" bg-white w-2/12 text-center justify-center mx-auto">
          <FaShoppingBag className="w-10 h-10 bg-white   mx-auto" />
          <hr className=" border-gray-400 border-2 my-4" />
          <FaShopify className="w-10 h-10 bg-white mx-auto" />
          <hr className=" border-gray-400 border-2 my-4" />
          <FaShoppingBag className="w-10 h-10 bg-white mx-auto" />
          <hr className=" border-gray-400 border-2 my-4" />
          <FaShopify className="w-10 h-10 bg-white mx-auto" />
          <hr className=" border-gray-400 border-2 my-4" />
          <FaShoppingBag className="w-10 h-10 bg-white mx-auto" />
          <hr className=" border-gray-400 border-2 my-4" />
          <FaShopify className="w-10 h-10 bg-white mx-auto" />
          <hr className=" border-gray-400 border-2 my-4" />
          <FaShoppingBag className="w-10 h-10 bg-white mx-auto" />
          <hr className=" border-gray-400 border-2 my-4" />
          <FaShopify className="w-10 h-10 bg-white mx-auto" />
        </div>
        <div className=" bg-[#eff3ff]">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
