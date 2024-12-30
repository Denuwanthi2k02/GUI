import React from "react";
import './Home.css';



 const Home =()=>{
return(
    <section className="home">
        <div className="secContainer container">
            <div className="homeText">

                <h1 className="title">
                   Welcome!
                </h1>

                <p className="subTitle">
                Atom Tickets is your ultimate destination for effortless movie ticket booking. 
                With Atom, you can explore the latest movies, book your tickets, and reserve seats—all in just a few clicks. 
                Whether you're planning a solo movie night or a group outing, Atom Tickets makes the process fast, simple, and convenient.
                Start your cinematic journey with us today!
                </p>

                <button className="btn">
                    <a href="#">Explore Now</a>
                </button>
            </div>

            <div className="movieCard grid">
                
                <div className="movieName">
                    <label htmlFor="movie">Movie</label>
                    <input type="text" placeholder="Avatar"/>
                </div>
                

                <div className="language">
                    <label htmlFor="language">Language</label>
                    <input type="text" placeholder="English"/>
                </div>

                <div className="date">
                    <label htmlFor="date">Date</label>
                    <input type="text" placeholder="Dec 25, 2024"/>
                </div>

                <div className="btn">
                    Search
                </div>
            </div>

            
        
        </div>
    </section>

)
 }

 export default Home