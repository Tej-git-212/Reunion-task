import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-blue-900 font-semibold text-2xl">Estatery</h1>
        </Link>
        <div className="flex items-center gap-6 font-semibold ">
          <Link
            to="/"
            className="text-reunion-purple border-2 border-gray-200 rounded-lg px-5 py-2"
          >
            Login
          </Link>
          <Link
            className="bg-reunion-purple text-white px-5 py-2 rounded-lg"
            to="/"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
