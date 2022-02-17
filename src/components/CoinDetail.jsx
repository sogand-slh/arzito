import React from "react";
import { useLocation } from "react-router-dom";

const CoinDetail = () => {
  const { state } = useLocation();
  const { name, image, symbol, price, marketCap, priceChange } = state.data;
  console.log(name, image);
  return (
    <>
      <div className="flex flex-row w-[75%] h-[65%] mx-auto my-[5%] p-5 bg-stone-200 ">
        <img src={image} alt={name} />
        <div className="flex flex-col justify-between text-left px-5">
          <span className="text-2xl font-bold">{name}</span>
          <span className="text-sm">{symbol.toUpperCase()}</span>
          <span>{price.toLocaleString()}</span>
          <span>{marketCap.toLocaleString()}</span>
          <span>{priceChange}</span>
        </div>
      </div>
    </>
  );
};

export default CoinDetail;
