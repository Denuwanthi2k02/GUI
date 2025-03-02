import React, { useEffect,useState } from "react";
import "./UpcomingMovies.css";
import Aos from "aos";
import "aos/dist/aos.css";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]); // State to hold the list of movies

  useEffect(() => {
    Aos.init({ duration: 2000 }); // Initialize AOS with a duration of 2000ms for animations


    // Fetch upcoming movies from the API
    const fetchUpcomingMovies = async () => {
      try {
        const response = await fetch("http://localhost:5000/upcoming-movies");
        if (!response.ok) {
          throw new Error("Failed to fetch upcoming movies.");
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    };

    fetchUpcomingMovies();
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
                src={movie.img_url}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="release-date">Release Date: {movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMovies;