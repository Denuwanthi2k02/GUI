// UpcomingMovies.js

import React, { useEffect } from "react";
import "./UpcomingMovies.css";
import img1 from "../../Assets/FlightRisk.jpeg";
import img2 from "../../Assets/Dhadak2.jpeg";
import img3 from "../../Assets/Kubera.jpg";
import img4 from "../../Assets/Avatar3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const movies = [
  { id: 1, title: "Flight Risk", releaseDate: "Jan 15, 2025", poster: img1 },
  { id: 2, title: "Dhadak 2", releaseDate: "Feb 10, 2025", poster: img2 },
  { id: 3, title: "Kubera", releaseDate: "Mar 5, 2025", poster: img3 },
  { id: 4, title: "Avatar 3", releaseDate: "Dec 18, 2025", poster: img4 },
];

const UpcomingMovies = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="upcoming-movies">
      <div className="sec-container">
        <div className="sec-header">
          <h2 className="sec-title" data-aos="fade-right">Upcoming Movies</h2>
          <p className="sec-description" data-aos="fade-right">
            Explore the upcoming movies and mark your calendar for these
            thrilling releases!
          </p>
        </div>
        <div className="movies-grid">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id} data-aos="fade-up">
              <img
                src={movie.poster}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="release-date">Release Date: {movie.releaseDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMovies;