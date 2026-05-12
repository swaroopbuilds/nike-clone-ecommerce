import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const { cartItems } = useCart();

  const isLoggedIn =
    localStorage.getItem("loggedIn") === "true";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");

    alert("Logged out successfully");

    navigate("/");
  };

  return (
    <nav
      className={`nav ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div
        className="logo"
        onClick={() => navigate("/")}
      >
        <img
          src="/brand_logo.png"
          alt="Nike Logo"
        />
      </div>

      <ul className="nav-links">
        <li onClick={() => navigate("/")}>
          Home
        </li>

        <li
          onClick={() => navigate("/products")}
        >
          Menu
        </li>

        <li
          onClick={() => navigate("/location")}
        >
          Location
        </li>

        <li
          onClick={() => navigate("/about")}
        >
          About
        </li>

        <li
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>

        <li onClick={() => navigate("/cart")}>
          Cart ({cartItems.length})
        </li>
      </ul>

      {!isLoggedIn ? (
        <button
          className="nav-login"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      ) : (
        <button
          className="nav-login"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navigation;