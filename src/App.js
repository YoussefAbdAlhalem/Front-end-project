import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./Routes/Home";
import Cart from "./Routes/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
