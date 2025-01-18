
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SeatBooking from "./Components/SeatBooking/SeatBooking";



// Lazily loading components
const Home = lazy(() => import('./Components/Home/Home'));
const Movie = lazy(() => import('./Components/Movie/Movie'));
const UpcomingMovies = lazy(() => import('./Components/UpcomingMovies/UpcomingMovies'));
const Login = lazy(() => import('./Components/Login/Login'));
const Signup =  lazy(() => import('./Components/Signup/Signup'));



function App() {
  return (

    <Router>
      <Routes>
        {/* Main page layout */}
        <Route path="/" element={
          <>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              <div id="Home"><Home /></div>
              <div id="Movies"><Movie /></div>
              <div id="Upcoming"><UpcomingMovies/></div>
              <div id="Footer"><Footer /></div>
            </Suspense>
          </>
        } />
        
        {/* SeatBooking page layout, includes Navbar and Footer */}
        <Route path="/seatBooking" element={
          <>
            <SeatBooking />
          </>
        } />


        
        <Route path="/login" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Login />
                  </Suspense>
         } />

        <Route path="/signup" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Signup />
                  </Suspense>
        } />


         
      </Routes>
    </Router>
    
  );
}

export default App;
