import React, { createContext, useState, useEffect } from "react";

// DATA
import { housesData } from "../data";

// CREATE CONTEXT
export const HouseContext = createContext();

// PROVIDER
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [rentByDate, setRentByDate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // return all countries
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // remove duplicates
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    // set countries state
    setCountries(uniqueCountries);
  }, [houses]);

  useEffect(() => {
    // return only countries
    const allProperties = houses.map((house) => {
      return house.type;
    });
    // remove duplicates
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];
    // set countries state
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    setLoading(true);
    // check the string if includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // get first string (price) and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);
    // get last string (price) and parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);
    // eslint-disable-next-line array-callback-return
    const newHouses = housesData.filter(house => {
      const housePrice = parseInt(house.price);

      // all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice &&
        new Date(rentByDate).getTime() >= new Date(house.moveInBy).getTime()
      ) {
        return house;
      }

      // all values are default
      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        rentByDate === null
      ) {
        return house;
      }
      // country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // date is not default
      if (
        rentByDate !== null &&
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price)
      ) {
        return (
          new Date(rentByDate).getTime() <= new Date(house.moveInBy).getTime()
        );
      }

      // property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      // price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      // country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      // country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        rentByDate,
        setRentByDate,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
