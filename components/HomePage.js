import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Vehicle Service Booking</h1>
          <p>Get your vehicle serviced with ease and convenience. Our expert technicians are here to provide top-notch service to keep your vehicle running smoothly.</p>
          <Link to="/book-service" className="button">Book a Service</Link>
          <div className="auth-links">
            <Link to="/login" className="button">Login</Link>
            <Link to="/signup" className="button">Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Oil Change</h3>
          <p>Regular oil changes are essential for maintaining your vehicle's engine performance and longevity. Our team uses high-quality oil and filters to ensure your engine runs smoothly.</p>
        </div>
        <div className="service">
          <h3>Tire Replacement</h3>
          <p>Whether you need new tires or a tire rotation, we offer quick and reliable tire services. Drive safely with our premium tire options and expert installation.</p>
        </div>
        <div className="service">
          <h3>Brake Repair</h3>
          <p>Your safety is our priority. Our brake repair services include inspection, maintenance, and replacement to ensure your braking system is in top condition.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
