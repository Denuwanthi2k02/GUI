import React from "react";
import './Movie.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import Rating from "../Rating/Rating";
import img from '../../Assets/The_Rule.jpg';


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
                    <div className="singleMoive">
                        <div className="movieImg">
                            <img src={img} alt="Image Title"/>
                            <div className="overlayInfo">
                                <h3>The Rule </h3>
                                <p>
                                    A continuation of Pushpa's action-packed journey, exploring his rise in the underworld.
                                </p>
                                <BsArrowRightShort className="icon"/>

                            </div>
                        </div>
                        <div className="destFooter">
                            <div className="number">
                                01
                            </div>
                            <div className="destText flex">
                                <h6>
                                    English
                                </h6>
                                <span className="Rating">
                                    <Rating/>
                                    <span>Atom tickets</span>
                                </span>
                               
                            </div>
                            


                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Movie