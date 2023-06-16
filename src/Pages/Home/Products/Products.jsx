import moment from "moment";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import MarqueeCart from "./MarqueeCart";

const Products = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("prodcuts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className="py-8 mb-6 px-9">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold border-r-8">
            Deals of the Day |{" "}
            <span className="text-red-600 ">{moment().format("hh:mm:ss")}</span>
          </h1>
          <h1 className="font-bold text-lg">view All Deals</h1>
        </div>
      </div>
      <Marquee>
        <div className="flex gap-5 ">
          {Products.map((Product) => (
            <MarqueeCart key={Product.id} Product={Product} />
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default Products;
