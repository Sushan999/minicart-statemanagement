import React from "react";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { Route, Router, Routes } from "react-router-dom";
import Product from "./pages/Product";
import UseRefTest from "./components/UseRefTest";
import UseReducerTest from "./components/UseReducerTest";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      {/* <UseRefTest /> */}
      <UseReducerTest />
    </>
  );
};

export default App;
