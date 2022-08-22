import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Navbar from "./Layouts/Navbar";
import Main from "./Components/Main";
import "./App.css";
import Checkout from "./Components/Checkout";
import Index from "./Components/Payment/Index";




function App() {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Index />} />
       
  
      </Routes>
    </div>
  );
}

export default App;
