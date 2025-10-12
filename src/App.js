import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./Routes/Home";
import Cart from "./Routes/cart";
import SingleProduct from "./Routes/Single product";
import Login from "./Routes/login/login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products/:id" element={<SingleProduct/>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
