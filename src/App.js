import React from "react";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Global/Header";

// PAGES
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-full mx-auto max-w-[350px] md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
