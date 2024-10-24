/*import React, { useState } from 'react';

const ServiceBookingPage = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="booking-container">
      <h2>Book a Service</h2>
      <form onSubmit={handleBooking}>
        <select 
          value={vehicleType} 
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="">Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
        </select>

        <select 
          value={serviceType} 
          onChange={(e) => setServiceType(e.target.value)}
        >
          <option value="">Select Service Type</option>
          <option value="maintenance">Maintenance</option>
          <option value="repair">Repair</option>
        </select>

        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        
        <input 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default ServiceBookingPage;*/
