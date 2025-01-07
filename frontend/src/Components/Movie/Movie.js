import React from "react";
import './Movie.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import Rating from "../Rating/Rating";
import img1 from '../../Assets/The_Rule.jpg';
import img2 from '../../Assets/Mandara.jpg';
import img3 from '../../Assets/Sonic3.jpg';
import img4 from '../../Assets/Mufasa.jpeg';

const Data=[

{
    id:1,
    imgSrc:img1,
    movieTitle:'The Rule ',
    language:'Tamil',
    about:"A continuation of Pushpa's action-packed journey, exploring his rise in the underworld.",

    
} ,


{   id:2,
    imgSrc: img2,
    movieTitle: 'Mandara',
    language:'Sinhala',
    about:'A Sinhala-language film that explores emotional and societal themes captivating local audiences with its heartfelt storytelling.' ,
},

{
    id:3,
    imgSrc:img3,
    movieTitle:'Sonic the Hedgehog 3',
    language:'English',
    about:'The thrilling continuation of the beloved Sonic franchise, featuring action-packed adventures and fan-favorite characters.'
},


{
    id:4,
    imgSrc:img4,
    movieTitle:'Mufasa: The Lion King',
    language:'English',
    about:'A stunning 3D animated prequel that delves into the origins of Mufasa, the iconic Lion King.',

},


]


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
                   {
                    Data.map(({id,imgSrc,movieTitle,language,about})=>{
                        return(
                            <div className="singleMoive">
                            <div className="movieImg">
                                <img src={imgSrc} alt="Image Title"/>
                                <div className="overlayInfo">
                                    <h3>{movieTitle}  </h3>
                                    <p>
                                       {about}
                                    </p>
                                    <BsArrowRightShort className="icon"/>
    
                                </div>
                            </div>
                            <div className="destFooter">
                                <div className="number">
                                    0{id}
                                </div>
                                <div className="destText flex">
                                    <h6>
                                        {language}
                                    </h6>
                                    <span className="flex">
                                        <span className="Rating">
                                        <Rating/>
                                        </span>
    
                                        <span>Atom tickets</span>
                                    </span>
                                   
                                </div>
                                
    
    
                            </div>
                        </div>
                        )
                    })
                   }
                    
                </div>
            </div>
        </section>
    )
}

export default Movie