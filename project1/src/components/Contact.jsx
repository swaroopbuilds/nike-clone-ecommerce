import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">

      {/* Header */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We’d love to hear from you. Let’s connect.</p>
      </div>

      <div className="contact-content">

        {/* Contact Form */}
        <div className="contact-form-section">
          {submitted ? (
            <div className="success-message">
              <h2>✅ Message Sent!</h2>
              <p>Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <h3>📧 Email</h3>
            <p>support@nikeclone.com</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-card">
            <h3>🕒 Working Hours</h3>
            <p>Mon - Sat: 10AM - 9PM</p>
          </div>
        </div>

      </div>

      {/* Footer Banner */}
      <div className="contact-banner">
        <h2>Move Forward With Confidence</h2>
        <p>Your performance matters to us.</p>
      </div>

    </div>
  );
};

export default Contact;
