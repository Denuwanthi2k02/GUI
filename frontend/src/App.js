
import React, { Suspense, lazy,useState } from "react";
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SeatBooking from "./Components/SeatBooking/SeatBooking";
import AfterLoginNav from "./Components/AfterLoginNav/AfterLoginNav";



// Lazily loading components
const Home = lazy(() => import('./Components/Home/Home'));
const Movie = lazy(() => import('./Components/Movie/Movie'));
const UpcomingMovies = lazy(() => import('./Components/UpcomingMovies/UpcomingMovies'));
const Login = lazy(() => import('./Components/Login/Login'));
const Signup =  lazy(() => import('./Components/Signup/Signup'));



function App() {
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login
  const [signedUp, setsignedUp] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true); // Update login state
  };
  const handleSignup = () => {
    setLoggedIn(true); // Update login state
  };
  return (

    <Router>
      <Routes>
        {/* Main page layout */}
        <Route path="/" element={
          <>
            {loggedIn ? <AfterLoginNav /> : <Navbar />}
            
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
          <SeatBooking isLoggedIn={loggedIn} />
          </>
        } />


        
        <Route path="/login" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Login onLogin={handleLogin} />
                  </Suspense>
         } />

        <Route path="/signup" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Signup onSignup={handleSignup} />
                  </Suspense>
        } />


         
      </Routes>
    </Router>
    
  );
}

export default App;