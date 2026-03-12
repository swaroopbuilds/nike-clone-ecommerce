import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Checkout</h1>
      <h2>Total Amount: ₹{totalPrice}</h2>

      <button
        style={{ padding: "12px 20px", marginTop: "20px" }}
        onClick={() => navigate("/payment-success")}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
