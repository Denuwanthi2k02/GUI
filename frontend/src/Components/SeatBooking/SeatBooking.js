import React, { useState, useEffect } from 'react';
import './SeatBooking.css';

const SeatBooking = () => {
  const rows = 5;
  const cols = 8;
  const [seats, setSeats] = useState(
    Array(rows).fill(null).map(() => Array(cols).fill('available'))
  );
  const [message, setMessage] = useState('');
  const [showPayButton, setShowPayButton] = useState(false);

  useEffect(() => {
    // Simulating fetching already booked seats from an API or server
    const fetchBookedSeats = () => {
      const preBookedSeats = [
        { row: 1, col: 2 },
        { row: 2, col: 5 },
        { row: 3, col: 3 },
      ];
      const updatedSeats = seats.map((seatRow, rowIndex) =>
        seatRow.map((seat, colIndex) => {
          return preBookedSeats.some(
            (booked) => booked.row === rowIndex && booked.col === colIndex
          )
            ? 'booked'
            : seat;
        })
      );
      setSeats(updatedSeats);
    };

    fetchBookedSeats();
  }, []); // Empty dependency array ensures this runs only once

  const handleSeatClick = (row, col) => {
    if (seats[row][col] === 'booked') {
      setMessage('This seat is already booked.');
      return;
    }

    const updatedSeats = seats.map((seatRow, rowIndex) =>
      seatRow.map((seat, colIndex) =>
        rowIndex === row && colIndex === col ? 'booked' : seat
      )
    );

    setSeats(updatedSeats);
    setMessage('Your seat selection is completed. Click Pay Now to finalize.');
    setShowPayButton(true);
  };

  const handlePayNow = () => {
    setMessage('Your ticket booking is completed.');
    setShowPayButton(false);

    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="seat-booking-container">
      <h1>Movie Seat Booking</h1>
      <div className="seats-grid">
        {seats.map((row, rowIndex) => (
          <div className="seat-row" key={rowIndex}>
            {row.map((seat, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`seat ${seat}`}
                onClick={() => handleSeatClick(rowIndex, colIndex)}
              >
                {rowIndex + 1}-{colIndex + 1}
              </div>
            ))}
          </div>
        ))}
      </div>
      {showPayButton && (
        <button className="pay-button" onClick={handlePayNow}>
          Pay Now
        </button>
      )}
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default SeatBooking;