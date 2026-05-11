import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useRef } from "react";

import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import Category from "./components/Category";

import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderSummary from "./components/OrderSummary";
import PaymentSuccess from "./components/PaymentSuccess";

import About from "./components/About";
import Contact from "./components/Contact";
import Location from "./components/Location";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const categoryRef = useRef(null);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };

  const scrollToCategory = () => {
    categoryRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection onCategoryClick={scrollToCategory} />
              <Category refProp={categoryRef} />
            </>
          }
        />

        {/* ✅ Existing Products Page */}
        <Route path="/products" element={<Products />} />

        {/* ✅ NEW Men & Women Routes */}
        <Route path="/men" element={<Products category="men" />} />
        <Route path="/women" element={<Products category="women" />} />

        <Route path="/product" element={<ProductDetails />} />

        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/checkout"
          element={
            isLoggedIn ? (
              <Checkout />
            ) : (
              <Navigate to="/login" state={{ from: "/checkout" }} />
            )
          }
        />

        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
