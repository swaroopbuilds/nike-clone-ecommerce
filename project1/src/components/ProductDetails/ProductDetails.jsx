import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = location.state?.product;

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  const handleBuyNow = () => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (!isLoggedIn) {
      navigate("/login"); // 🔒 Redirect to login if not logged in
      return;
    }

    navigate("/payment-success"); // ✅ Allow only if logged in
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="product-details">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />

      <h1>{product.name}</h1>
      <h2>₹{product.price}</h2>
      <p>{product.description}</p>

      <div className="buttons">
        <button className="buy-btn" onClick={handleBuyNow}>
          Buy Now
        </button>

        <button className="cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
