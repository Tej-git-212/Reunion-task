import React, { useContext } from "react";

// COMPONENTS
import CountryDropdown from "./SearchFilters/CountryDropdown";
import MoveInDatePicker from "./SearchFilters/MoveInDatePicker";
import PriceRangeDropdown from "./SearchFilters/PriceRangeDropdown";
import PropertyDropdown from "./SearchFilters/PropertyDropdown";

// CONTEXT
import { HouseContext } from "../contexts/HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div
      className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4
     bg-white rounded-lg"
    >
      <CountryDropdown />
      <MoveInDatePicker />
      <PriceRangeDropdown />
      <PropertyDropdown />
      <button
        onClick={() => {
          handleClick();
        }}
        className="bg-reunion-purple font-medium py-3 px-8 rounded-lg flex justify-center items-center text-white text-lg"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
