import { useNavigate } from "react-router-dom";
import "./Hero.css";

const HeroSection = ({ onCategoryClick }) => {
  const navigate = useNavigate();

  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/products")}>
            Shop now
          </button>

          <button className="secondary-btn" onClick={onCategoryClick}>
            Category
          </button>
        </div>

        <div className="availability">
          <p>Also Available on</p>
          <div className="brand-icons">
            <img src="amazon.png" alt="amazon" />
            <img src="flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};

export default HeroSection;
