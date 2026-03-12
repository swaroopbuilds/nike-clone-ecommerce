import "./Location.css";

const Location = () => {
  return (
    <div className="location-container">
      <div className="location-header">
        <h1 className="location-title">Our Store Location</h1>
        <p className="location-subtitle">
          Step into comfort, performance, and style at our flagship experience center.
        </p>
      </div>

      <div className="location-content">
        <div className="store-info">
          <h2>Nike Flagship Store</h2>

          <p className="store-description">
            Discover the latest Nike collections, exclusive launches, and
            personalized fitting services — all under one roof. Our store is
            designed to give you a premium shopping experience.
          </p>

          <p><strong>Address:</strong> MG Road, Bangalore, India</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Email:</strong> support@nikeclone.com</p>

          <p className="working-title"><strong>Working Hours:</strong></p>
          <ul>
            <li>Monday - Saturday: 10:00 AM - 9:00 PM</li>
            <li>Sunday: 11:00 AM - 7:00 PM</li>
          </ul>

          <p className="highlight-text">
            Walk in today and experience the difference.
          </p>

          <button className="visit-btn">Get Directions</button>
        </div>

        <div className="map-container">
          <iframe
            title="store-location"
            src="https://www.google.com/maps?q=MG+Road+Bangalore&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
