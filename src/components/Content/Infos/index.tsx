import React, { useState } from "react";
import IconCard from "../../IconCard";

// import { Container } from './styles';

const Infos: React.FC = () => {
  const [count, setCount] = useState<number>(1);

  const handleMore = () => {
    setCount(count + 1);
  };

  const handleLess = () => {
    setCount(count === 1 ? 1 : count - 1);
  };

  return (
    <div className="w-full flex justify-start">
      <div className="w-80 h-full flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col gap-3">
          <h3 className="uppercase font-bold text-sm text-orange">
            sneaker company
          </h3>
          <h1 className="text-3xl font-bold">Fall Limited Edition Sneakers</h1>
        </div>
        <div>
          <h4 className="text-sm text-blue-grayish-dark">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole. they'll withstand everything
            the weather can offer
          </h4>
        </div>
        <div className="flex flex-col gap-1 justify-start w-full">
          <div className="flex gap-3 w-full justify-start items-center">
            <h2 className="text-2xl font-bold">
              $
              {count === 0
                ? 125
                : (125 * count * 0.5).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
            </h2>
            <div className="h-5 w-9 bg-orange-pale text-orange text-sm grid place-content-center font-bold">
              50%
            </div>
          </div>
          <div className="w-auto text-md text-blue-grayish font-bold line-through">
            $
            {count === 0
              ? 125
              : (count * 125).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
          </div>
        </div>
        <div className="w-full h-12 flex gap-2">
          <div className="flex justify-between items-center px-3 h-full w-2/6 rounded-lg bg-blue-grayish-light">
            <button onClick={handleLess} className="text-orange font-bold">
              -
            </button>
            <h3 className="font-bold">{count}</h3>
            <button onClick={handleMore} className="text-orange font-bold">
              +
            </button>
          </div>
          <button className="flex items-center justify-center gap-4 h-full w-4/6 rounded-lg bg-orange hover:shadow-lg text-md font-bold text-white">
            <IconCard className="fill-white" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Infos;
