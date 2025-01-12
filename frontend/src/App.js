import React from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Movie from './Components/Movie/Movie';
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies";
import Footer from './Components/Footer/Footer';
// import Signup from "./Components/Signup/Signup";
// import Login from "./Components/Login/Login";



function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Movie/>
      <UpcomingMovies/>
      <Footer/>
      {/* <Signup/>
      <Login/> */}

      

      
     
    </>
  );
}

export default App;
