// UpcomingMovies.js

import React from "react";
import "./UpcomingMovies.css";
import img1 from '../../Assets/FlightRisk.jpeg';
import img2 from '../../Assets/Dhadak2.jpeg';
import img3 from '../../Assets/Kubera.jpg';



const movies = [
  { id: 1, title: "Flight Risk", releaseDate: "Jan 15, 2025", poster: img1, },
  { id: 2, title: "Dhadak 2", releaseDate: "Feb 10, 2025", poster: img2, },
  { id: 3, title: "Kubera", releaseDate: "Mar 5, 2025", poster: img3, },
];

const UpcomingMovies = () => {
  return (
    <section className="upcoming-movies">
      <h2 className="section-title">Upcoming Movies</h2>
      <div className="movies-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="release-date">Release Date: {movie.releaseDate}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingMovies;
