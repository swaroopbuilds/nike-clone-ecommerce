import React from "react";

import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>✅ Payment Successful</h1>
      <p>Thank you for shopping with us!</p>

      <button
        style={{ padding: "12px 20px", marginTop: "20px" }}
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default PaymentSuccess;
