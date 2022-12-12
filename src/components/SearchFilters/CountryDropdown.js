import React, { useState, useContext } from "react";
// ICONS
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
// HEADLESS UI
import { Menu } from "@headlessui/react";
// CONTEXT
import { HouseContext } from "../../contexts/HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <div>
          <div className="text-sm text-gray-400 font-semibold">
            Location (any)
          </div>
          <div className="flex items-center">
            <div className="text-md text-reunion-black font-bold">
              {country}
            </div>
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
        </div>
      </Menu.Button>

      <Menu.Items className="dropdown-menu absolute z-10 top-full bg-white p-4 w-[180px]">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              as="li"
              onClick={() => setCountry(country)}
              key={index}
              className="cursor-pointer hover:text-reunion-purple transition"
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
