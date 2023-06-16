const MarqueeCart = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, productName, oldPrice, newPrice } = props.Product;
  return (
    <>
      <div className="text-center cursor-pointer ">
        <div className="relative w-full">
          <img src={image} alt="" className="w-full h-full" />
          <div className="absolute top-48 right-11 text-xs">
            <h1 className="font-bold bg-white text-lg">{productName}</h1>
            <p className="bg-white  text-base">
              {oldPrice} | <span className="line-through">{newPrice} </span> Bdt
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeCart;
