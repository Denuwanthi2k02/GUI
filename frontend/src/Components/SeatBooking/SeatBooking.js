import React, { useState,useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom"; 
import { Snackbar, Alert } from "@mui/material"; // Import Snackbar and Alert from MUI
import "./SeatBooking.css";

function SeatBooking({ isLoggedIn }) {

  const location = useLocation(); // Access location object
  const navigate = useNavigate();
  const { movieName } = location.state || {}; // Retrieve movieName from state


  const totalSeats = 60; // Total number of seats
  const [seats, setSeats] = useState(
    Array.from({ length: totalSeats }, (_, i) => ({
      id: `s${i + 1}`,
      booked: Math.random() < 0.5, // Randomly mark seats as booked
      selected: false, // Track if the seat is selected
    }))
  );

  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [showSnackbar, setShowSnackbar] = useState(false); // State for Snackbar visibility
  const [bookingStatus, setBookingStatus] = useState("Pending"); // Track booking status

  // Redirect user if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      alert("Please log in or sign up to book seats.");
      navigate("/login"); // Redirect to login page
    }
  }, [isLoggedIn, navigate]);

  const handleSeatChange = (id) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === id
          ? { ...seat, selected: !seat.selected }
          : seat
      )
    );

    // Update count and amount based on selection
    const seat = seats.find((seat) => seat.id === id);
    if (!seat.selected) {
      setCount((prevCount) => prevCount + 1);
      setAmount((prevAmount) => prevAmount + 200);
    } else {
      setCount((prevCount) => prevCount - 1);
      setAmount((prevAmount) => prevAmount - 200);
    }
  };

  const handleBooking = () => {
    if (count > 0) {
      setShowSnackbar(true); // Show the snackbar if tickets are selected
    } else {
      alert("Please select at least one ticket to book.");
    }
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <div className="center">
      <div className="tickets1">
        <div className="tickets-selector">
          <div className="head">
            <div className="title">{movieName || "Movie Name"}</div>
          </div>

          <div className="seats">
            <div className="status">
              <div className="item">Available</div>
              <div className="item">Booked</div>
              <div className="item">Selected</div>
            </div>

            <div className="all-seats">
              {seats.map((seat) => (
                <React.Fragment key={seat.id}>
                  <input
                    type="checkbox"
                    name="tickets"
                    id={seat.id}
                    checked={seat.selected}
                    disabled={seat.booked}
                    onChange={() => handleSeatChange(seat.id)}
                  />
                  <label
                    htmlFor={seat.id}
                    className={`seat ${seat.booked ? "booked" : ""} ${
                      seat.selected ? "selected" : ""
                    }`}
                  ></label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="timings">
            <div className="dates">
              <input type="radio" name="date" id="d1" defaultChecked />
              <label htmlFor="d1" className="dates-item">
                <div className="day">Sun</div>
                <div className="date">11</div>
              </label>
              <input type='radio' name='date' id="d2" />
              <label for='d2' className='dates-item'>
                <div className='day'>Mon</div>
                <div className='date'>12</div>
              </label>

              <input type='radio' name='date' id="d3" />
              <label for='d3'className='dates-item'>
                <div className='day'>Tue</div>
                <div className='date'>13</div>
              </label>

              <input type='radio' name='date' id="d4" />
              <label for='d4'className='dates-item'>
                <div className='day'>Wed</div>
                <div className='date'>14</div>
              </label>

              <input type='radio' name='date' id="d5" />
              <label for='d5'className='dates-item'>
                <div className='day'>Thu</div>
                <div className='date'>15</div>
              </label>

              <input type='radio' name='date' id="d6" />
              <label for='d6'className='dates-item'>
                <div className='day'>Fri</div>
                <div className='date'>16</div>
              </label>

              <input type='radio' name='date' id="d7" />
              <label for='d7'className='dates-item'>
                <div className='day'>Sat</div>
                <div className='date'>17</div>
              </label>
            </div>
           

            <div className="times">
              <input type="radio" name="time" id="t1" defaultChecked />
              <label htmlFor="t1" className="time">
                11.00
              </label>
              <input type='radio' name='time' id='t2' /> 
              <label for='t2' className='time'>14.30</label>

              <input type='radio' name='time' id='t3' /> 
              <label for='t3' className='time'>18.00</label> 

              <input type='radio' name='time' id='t4' /> 
              <label for='t4' className='time'>21.30</label>   
            </div>
          </div>
        </div>

        <div className="price">
          <div className="total">
            <span>
              <span className="count">{count}</span> Tickets
            </span>
            <div className="amount">Rs.{amount}</div>
          </div>

          <button type="button" onClick={handleBooking}>
            Book
          </button>
        </div>
      </div>

      {/* Snackbar for Booking Confirmation */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Your booking is completed!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SeatBooking;
