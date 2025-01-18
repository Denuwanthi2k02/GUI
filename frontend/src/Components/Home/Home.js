
import React , {useEffect} from "react";
import './Home.css';

import Aos from 'aos'
import 'aos/dist/aos.css'



 const Home =()=>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
return(
    <section className="home">
        <div className="secContainer container">
            <div className="homeText">
                <h1 data-aos="fade-up"className="title">
                   Welcome!
                </h1>

                <p  data-aos="fade-up" data-aos-duration="2500" className="subTitle">
                Atom Tickets makes booking movie tickets easy. Explore new movies, book seats, and reserve tickets in just a few clicks.
                Start your movie experience with us today!
                </p>

                {/* <button className="btn">
                    <a href="/exlore">Explore Now</a>
                </button> */}
                
            </div>

            <div className="movieCard grid">
                
                <div data-aos="fade-right" data-aos-duration="2000" className="movieName">
                    <label htmlFor="movie">Movie</label>
                    <input type="text" placeholder="Avatar"/>
                </div>
                

                <div data-aos="fade-right" data-aos-duration="2500" className="language">
                    <label htmlFor="language">Language</label>
                    <input type="text" placeholder="English"/>
                </div>

                <div data-aos="fade-right" data-aos-duration="3000" className="date">
                    <label htmlFor="date">Date</label>
                    <input type="text" placeholder="Dec 25, 2024"/>
                </div>

                <div data-aos="fade-left" data-aos-duration="2000" className="btn">
                    Search
                </div>

            </div>

            
        
        </div>
    </section>

)
 }

 export default Home