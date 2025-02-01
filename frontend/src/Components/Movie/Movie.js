//Movie.js
import React , {useEffect,useState} from "react";
import { useNavigate } from 'react-router-dom';
import './Movie.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import Rating from "../Rating/Rating";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Movie =() => {

    const [movies, setMovies] = useState([]); // State to hold movies from the database
    const [currentIndex, setCurrentIndex] = useState(0); // State for current set of movies to show
    const moviesPerPage = 4; // Number of movies to show at a time
    const navigate = useNavigate(); 


    // Handle button click to navigate to SeatBooking with the movie's title
    const handleButtonClick = (movieTitle,movieId) => {
        navigate('/seatBooking', { state: { movieName: movieTitle , movieId: movieId} });
      };
      
    // Move to the previous set of movies
      const handleLeftClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };


    // Move to the next set of movies
    const handleRightClick = () => {
        if (currentIndex < Math.floor(movies.length / moviesPerPage)) {
            setCurrentIndex(currentIndex + 1);
        }
    };


    // Fetch movies from the backend API
     useEffect(()=>{
           // Fetch movies from the API
        fetch("http://localhost:5000/movies")
        .then((res) => res.json())
        .then((data) => setMovies(data))
        .catch((error) => console.error("Error fetching movies:", error));

        Aos.init({duration:2000});
        },[])

    return(
        <section className="Popular Movie Container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div data-aos="fade-right" data-aos-duration="2500"  className="textDiv">
                        <h2 className="secTitle">
                            Popular Movies
                        </h2>
                        <p>
                        Discover the latest and most popular movies, 
                        complete with trailers, 
                        reviews, and showtimes, all in one place! 
                        </p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2500"  className="iconsDiv flex">
                        <BsArrowLeftShort className="icon LeftIcon" onClick={handleLeftClick}/>
                        <BsArrowRightShort className="icon"onClick={handleRightClick}/>

                    </div>

                </div>

                <div className="mainContent grid">
                    {movies.slice(currentIndex * moviesPerPage, (currentIndex + 1) * moviesPerPage).map(({ id, title, language, about, img_url }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleMoive">
                                <div className="movieImg">
                                    <img src={img_url} alt={title} />
                                    <div className="overlayInfo">
                                        <h3>{title}</h3>
                                        <p>{about}</p>
                                        <BsArrowRightShort className="icon" onClick={() => handleButtonClick(title,id)} />
                                    </div>
                                </div>
                                <div className="destFooter">
                                    <div className="number">0{id}</div>
                                    <div className="destText flex">
                                        <h6>{language}</h6>
                                        <span className="flex">
                                            <span className="Rating">
                                                <Rating />
                                            </span>
                                            <span>Atom tickets</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Movie