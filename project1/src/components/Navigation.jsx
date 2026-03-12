import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();

  // check login state
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="nav">
      <div className="logo">
        <img src="/brand_logo.png" alt="logo" />
      </div>

      <ul className="nav-links">
  <li onClick={() => navigate("/")}>Home</li>
  <li onClick={() => navigate("/products")}>Menu</li>
  <li onClick={() => navigate("/location")}>Location</li>
  <li onClick={() => navigate("/about")}>About</li>
  <li onClick={() => navigate("/contact")}>Contact</li>
</ul>

      {!isLoggedIn ? (
        <button className="nav-login" onClick={() => navigate("/login")}>
          Login
        </button>
      ) : (
        <button className="nav-login" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navigation;
