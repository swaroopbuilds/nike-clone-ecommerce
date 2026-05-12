import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      alert(data.message);

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Server not reachable ❌");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">

        <img
          src="/brand_logo.png"
          alt="Nike"
          className="register-logo"
        />

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Register
        </button>

        <p
          className="back-link"
          onClick={() => navigate("/login")}
        >
          ← Back to Login
        </p>
      </div>
    </div>
  );
}

export default Register;