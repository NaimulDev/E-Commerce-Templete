import Categoris from "../Categoris/Categoris";
import "./Home.css";
import img1 from "../../../assets/image/img-1.png";
import img2 from "../../../assets/image/img2.png";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <div className="grid-container px-3">
        <div className="">
          <Categoris />
        </div>
        <div className="  ">
          <div className="flex bg-teal-200">
            <div className="bg-teal-200 px-5 py-6">
              <h4 className="text-lg mb-7 bg-teal-200">
                Biggest Offer Revealed
              </h4>
              <h1 className="text-4xl  uppercase font-bold bg-teal-200">
                MORE DEALS INSIDE
                <br />
                UP TO 50% OFF
              </h1>
              <p className="mt-14 bg-teal-200">Wishlist Now</p>
            </div>
            <div className="bg-teal-200">
              <img src={img1} alt="" className="bg-teal-200" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="col-span-1 ">
              <img src={img2} alt="" className="w-full" />
            </div>
            <div className="col-span-1">
              <img src={img2} alt="" className="w-full" />
            </div>
            <div className="col-span-1">
              <img src={img2} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className=" space-y-3">
          <h1 className="font-bold">Recently Viewed</h1>
          <div className="col-span-1 w-52">
            <img src={img2} alt="" className="w-full" />
          </div>
          <h1 className="font-bold">Suggesion for you</h1>
          <div className="col-span-1  w-52">
            <img src={img2} alt="" className="w-full" />
          </div>
        </div>
      </div>
      <hr className=" border-gray-400 border-2 my-4" />
      <Products />
    </>
  );
};

export default Home;
