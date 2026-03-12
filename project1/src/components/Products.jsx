import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
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
      {products.map((product) => (
        <Link
          key={product._id}
          to="/product"
          state={{ product }}
          className="product-link"
        >
          <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
            <p>₹{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
