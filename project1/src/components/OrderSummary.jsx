import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    navigate("/payment-success");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
      <h2>Order Summary</h2>

      {cartItems.map((item) => (
        <p key={item.id}>
          {item.name} × {item.quantity} — $
          {(item.price * item.quantity).toFixed(2)}
        </p>
      ))}

      <h3>Total: ${totalAmount.toFixed(2)}</h3>

      <button
        style={{
          background: "black",
          color: "white",
          padding: "12px 25px",
          marginTop: "20px",
          cursor: "pointer",
        }}
        onClick={handlePayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default OrderSummary;
