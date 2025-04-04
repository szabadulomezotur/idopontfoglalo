import React, { useState } from "react";

const BookingSystem = () => {
  const [bookings, setBookings] = useState([]);

  const handleBooking = (timeSlot) => {
    if (!bookings.includes(timeSlot)) {
      setBookings([...bookings, timeSlot]);
    }
  };

  return (
    <div>
      <h2>Foglalj időpontot</h2>
      <div>
        {["10:00", "11:00", "12:00", "13:00"].map((time) => (
          <button
            key={time}
            onClick={() => handleBooking(time)}
            disabled={bookings.includes(time)}
          >
            {time} {bookings.includes(time) ? "(Foglalt)" : ""}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookingSystem;
