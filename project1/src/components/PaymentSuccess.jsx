import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/products"); // ✅ Redirects to Shoe Menu page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>✅ Payment Successful</h1>
      <p>Thank you for shopping with us!</p>

      <button
        style={{
          padding: "12px 20px",
          marginTop: "20px",
          background: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "6px",
        }}
        onClick={handleContinueShopping}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default PaymentSuccess;