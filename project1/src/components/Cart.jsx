import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice
  } = useCart();

  const navigate = useNavigate();

  // ✅ CHECK LOGIN STATUS
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  if (cartItems.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cartItems.map((item) => (
        <div className="cart-item" key={item._id}>
          <img src={item.imageUrl} alt={item.name} />

          <div className="cart-details">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="qty-controls">
              <button onClick={() => decreaseQty(item._id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item._id)}>+</button>
            </div>

            <button onClick={() => removeFromCart(item._id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h2>Total: ₹{totalPrice}</h2>

        {/* ✅ LOGIN-PROTECTED CHECKOUT */}
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
