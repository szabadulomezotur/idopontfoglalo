import React, { useState } from "react";

function BookingSystem() {
  const [bookedSlots, setBookedSlots] = useState([]);
  const [currentSlot, setCurrentSlot] = useState("");

  const handleBooking = () => {
    if (currentSlot && !bookedSlots.includes(currentSlot)) {
      setBookedSlots([...bookedSlots, currentSlot]);
      alert(`Slot ${currentSlot} has been booked!`);
    } else {
      alert("This slot is already booked or invalid.");
    }
  };

  return (
    <div>
      <h1>Booking System</h1>
      <input
        type="text"
        placeholder="Enter Slot Time"
        value={currentSlot}
        onChange={(e) => setCurrentSlot(e.target.value)}
      />
      <button onClick={handleBooking}>Book Slot</button>
      <div>
        <h2>Booked Slots</h2>
        <ul>
          {bookedSlots.map((slot, index) => (
            <li key={index}>{slot}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookingSystem;
