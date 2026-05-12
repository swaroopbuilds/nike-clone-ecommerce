import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/products";

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
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

      if (response.ok) {
        localStorage.setItem("loggedIn", "true");

        if (onLoginSuccess) {
          onLoginSuccess();
        }

        alert("Login Successful ✅");

        navigate(redirectPath, { replace: true });
      } else {
        alert(data.message || "Invalid Credentials ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server not reachable ❌");
    }

    setLoading(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <img
          src="/brand_logo.png"
          alt="Nike"
          className="login-logo"
        />

        <h2>Welcome Back</h2>

        <p className="login-subtitle">
          Login to continue shopping
        </p>

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

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <span className="forgot">
            Forgot Password?
          </span>
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p
          className="register-text"
          onClick={() => navigate("/register")}
        >
          Don’t have an account?
          <span> Register</span>
        </p>

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;