import { Menu } from "@headlessui/react";
import React from "react";
import { useContext } from "react";
// CONTEXT
import { HouseContext } from "../../contexts/HouseContext";
function MoveInDatePicker() {
  const { rentByDate, setRentByDate } = useContext(HouseContext);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button className="dropdown-btn w-full text-left">
        <div>
          <div className="text-sm text-gray-400 font-semibold">When</div>
          <div className="flex items-center">
            <div className="text-md text-reunion-black font-bold flex">
              <input
                type="date"
                className="cursor-pointer"
                onChange={(e) => setRentByDate(new Date(e.target.value))}
              />
            </div>
          </div>
        </div>
      </Menu.Button>
    </Menu>
  );
}

export default MoveInDatePicker;
