import React from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter(
            (product) =>
              product.category &&
              product.category.toLowerCase() === category.toLowerCase()
          );
          setProducts(filtered);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="products">
      {products.map((product) => {
        const imageSrc = product.imageUrl?.startsWith("http")
          ? product.imageUrl
          : `${API_BASE_URL}${product.imageUrl}`;

        return (
          <Link
            key={product._id}
            to="/product"
            state={{ product: { ...product, imageUrl: imageSrc } }}
            className="product-link"
          >
            <div className="product-card">
              <img src={imageSrc} alt={product.name} />
              <p>{product.name}</p>
              <p>₹{product.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;