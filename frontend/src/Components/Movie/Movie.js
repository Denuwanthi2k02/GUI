import React from "react";
import './Movie.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs'

const Movie =() => {
    return(
        <section className="Popular Movie Container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">
                            Popular Movies
                        </h2>
                        <p>
                        Discover the latest and most popular movies, 
                        complete with trailers, 
                        reviews, and showtimes, all in one place! 
                        </p>
                    </div>

                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className="icon LeftIcon"/>
                        <BsArrowRightShort className="icon"/>

                    </div>

                </div>

                <div className="mainContent grid">
                    
                </div>
            </div>
        </section>
    )
}

export default Movie