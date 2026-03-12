import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // 👇 get redirect path (checkout)
  const redirectPath = location.state?.from || "/products";

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful ✅");

        // ✅ IMPORTANT FIX
        localStorage.setItem("loggedIn", "true");
        onLoginSuccess(); // 🔥 updates App.jsx state

        // ✅ go back to checkout/payment
        navigate(redirectPath, { replace: true });
      } else {
        alert(data.message || "Invalid credentials ❌");
      }
    } catch (error) {
      alert("Server not reachable ❌");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Sign in</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span className="forgot">Forgot password?</span>
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
          Don’t have an account? Register now
        </p>

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
    </div>
  );
};

export default Login;
