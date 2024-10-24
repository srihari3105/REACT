import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingServicePage.css';

function BookingServicePage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Service booked successfully!');
    navigate('/payment');  // Redirect to payment page after booking
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Book a Service</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Vehicle Model" required />
        <input type="date" placeholder="Preferred Date" required />
        <textarea placeholder="Additional Notes"></textarea>
        <button type="submit">Book Service</button>
      </form>
    </div>
  );
}

export default BookingServicePage;