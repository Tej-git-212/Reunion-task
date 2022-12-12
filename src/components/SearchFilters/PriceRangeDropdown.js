import React, { useState, useEffect, useContext } from "react";

// ICONS
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
// HEADLESS UI
import { Menu } from "@headlessui/react";
// CONTEXT
import { HouseContext } from "../../contexts/HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "20000 - 30000",
    },
    {
      value: "30000 - 40000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full"
      >
        <div className="text-sm text-gray-400 font-semibold text-left">
          Price
        </div>
        <div className="flex items-center">
          <div className="text-md text-reunion-black font-bold">{price}</div>
          {isOpen ? (
            <div className="p-[1px] ml-2 rounded-full bg-reunion-lightPurple">
              <RiArrowUpSLine />
            </div>
          ) : (
            <div className="p-[1px] ml-2 rounded-full bg-reunion-lightPurple">
              <RiArrowDownSLine />
            </div>
          )}
        </div>
      </Menu.Button>

      <Menu.Items className="dropdown-menu absolute z-10 top-full bg-white p-4 w-[180px]">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as="li"
              onClick={() => setPrice(price.value)}
              key={index}
              className="cursor-pointer hover:text-reunion-purple transition"
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
