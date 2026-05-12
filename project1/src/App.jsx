import { useRef, useState } from "react";

import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";

import HeroSection from "./components/Hero";
import Category from "./components/Category";

import Menu from "./components/Menu";

import MenProducts from "./components/MenProducts";
import WomenProducts from "./components/WomenProducts";

import ProductDetails from "./components/ProductDetails/ProductDetails";

import Cart from "./components/Cart";

import Checkout from "./components/Checkout";

import PaymentSuccess from "./components/PaymentSuccess";

import Location from "./components/Location";
import About from "./components/About";
import Contact from "./components/Contact";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const categoryRef = useRef(null);

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const scrollToCategory = () => {
    categoryRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <HeroSection
                onCategoryClick={scrollToCategory}
              />

              <Category refProp={categoryRef} />
            </>
          }
        />

        {/* PRODUCTS */}
        <Route
          path="/products"
          element={<Menu />}
        />

        <Route
          path="/men"
          element={<MenProducts />}
        />

        <Route
          path="/women"
          element={<WomenProducts />}
        />

        {/* PRODUCT DETAILS */}
        <Route
          path="/product"
          element={<ProductDetails />}
        />

        {/* CART */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* PAYMENT */}
        <Route
          path="/payment-success"
          element={<PaymentSuccess />}
        />

        {/* OTHER */}
        <Route
          path="/location"
          element={<Location />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            <Login
              onLoginSuccess={handleLoginSuccess}
            />
          }
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>
    </>
  );
}

export default App;