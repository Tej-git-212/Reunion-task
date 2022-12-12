import React from "react";

import { RiArrowDownSLine } from "react-icons/ri";

// import components
import HouseList from "../components/HouseList";
import SearchFilter from "../components/SearchFilter";

const Home = () => {
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between my-14 ">
        <div>
          <h2 className="text-reunion-black text-xl md:text-3xl font-bold text-center">
            Search properties to rent
          </h2>
        </div>
        <div
          className="border-2 bg-white border-gray-200 p-2 flex 
        justify-between items-center rounded-md "
        >
          <input
            type="text"
            placeholder="Search with Search Bar"
            className="outline-none "
          />
          <div className="p-[1px] rounded-full bg-reunion-lightPurple">
            <RiArrowDownSLine />
          </div>
        </div>
      </div>

      {/* FILTERS  */}
      <SearchFilter />

      {/* HOUSES LIST */}
      <HouseList />
    </div>
  );
};

export default Home;
