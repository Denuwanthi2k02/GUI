import React from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Movie from './Components/Movie/Movie';
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies";
import Footer from './Components/Footer/Footer';
import SeatBooking from "./Components/SeatBooking/SeatBooking";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Movie/>
      <UpcomingMovies/>
      <Footer/>
  
    </>
  );
}

export default App;
