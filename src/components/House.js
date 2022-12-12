import React, { useState } from "react";

// ICONS
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

const House = ({ house }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  return (
    <div className="bg-white rounded-lg w-full max-w-[352px] mx-auto hover:scale-[1.02] cursor-default transition">
      <div className="relative ">
        <img
          className="mb-8 object-cover rounded-t-lg"
          src={house.image}
          alt={house.name}
        />
        {[1, 2, 3].includes(house.id) && (
          <p
            className="bg-reunion-purple absolute py-2 px-6 rounded-md text-white top-[92%] -left-2 
        flex items-center text-sm gap-1"
          >
            <BsStars /> POPULAR
          </p>
        )}
      </div>

      <div className="px-5 pb-2 mx-auto w-full">
        <div className="text-2xl font-bold text-violet-600 flex justify-between items-center">
          <p>
            ${house.price}
            <span className="text-gray-400 text-sm">/month</span>
          </p>
          <p
            className="p-2 border-2 border-reunion-lightPurple rounded-full cursor-pointer"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <FiHeart
              className={`w-5 h-5 ${
                isWishlisted ? "fill-red-500" : "bg-transparent"
              }`}
            />
          </p>
        </div>
        <div className="max-w-[260px] mb-2 ">
          <p className="text-2xl font-bold">{house.name}</p>
          <p className="text-md text-gray-400 font-semibold truncate">
            {house.address}
          </p>
        </div>
        <hr />
        <div className="flex gap-x-4 my-2">
          <div className="flex items-center gap-1 text-reunion-purple">
            <div className="text-[20px] rounded-full">
              <BiBed />
            </div>
            <div className="text-base text-gray-500">{house.bedrooms} beds</div>
          </div>
          <div className="flex items-center gap-1 text-reunion-purple">
            <div className="text-[20px] rounded-full">
              <BiBath />
            </div>
            <div className="text-base text-gray-500">
              {house.bathrooms} bathrooms
            </div>
          </div>
          <div className="flex items-center gap-1 text-reunion-purple">
            <div className="text-[20px] rounded-full">
              <BiArea />
            </div>
            <div className="text-base text-gray-500">{house.surface}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
