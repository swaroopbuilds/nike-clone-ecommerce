import "./About.css";

const About = () => {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Nike</h1>
        <p>
          Designed for champions. Built for comfort. Created for performance.
        </p>
      </div>

      {/* Brand Story Section */}
      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          At Nike Clone, we believe your feet deserve the best. Our mission is
          to combine innovation, comfort, and style into every step you take.
          From casual wear to professional performance gear, we bring you the
          finest collection designed to empower athletes and everyday heroes.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="about-cards">
        <div className="about-card">
          <h3>⚡ Fast Delivery</h3>
          <p>Lightning-fast shipping so you never miss your moment.</p>
        </div>

        <div className="about-card">
          <h3>🔒 Secure Payments</h3>
          <p>100% secure and trusted payment gateways.</p>
        </div>

        <div className="about-card">
          <h3>💯 Premium Quality</h3>
          <p>Crafted with high-performance materials and durability.</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        <div>
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div>
          <h2>99%</h2>
          <p>Customer Satisfaction</p>
        </div>
      </div>

      {/* Closing Banner */}
      <div className="about-banner">
        <h2>Just Do It.</h2>
        <p>Push limits. Break barriers. Move with confidence.</p>
      </div>

    </div>
  );
};

export default About;
