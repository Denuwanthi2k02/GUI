import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./AfterLoginNav.css";
import { FcFilmReel } from 'react-icons/fc';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs'

const AfterLoginNav = () => {
    
    // State to manage the visibility of the navbar (toggle between showing and hiding)
    const [active, setActive] =useState ('navBar')

    // React Router's navigation hook
    const navigate = useNavigate();

    // Function to show the navbar when the menu button is clicked (for mobile view)
    const showNav=()=>{
        setActive('navBar activeNavBar')
    }

    // Function to hide the navbar when the close button is clicked
    const removeNav=()=>{
        setActive('navBar ')
    }

    //code to add background color to header
    const[transparent,setTransparent] = useState ('header')

    const addBg =()=>{
        if (window.scrollY >=10){
            setTransparent('header activeHeader') // Adds background color when scrolled down
        }

        else {
            setTransparent('header') // Removes background when at the top
        }

    }

    // add a scroll event listener to trigger the addBg function
    window.addEventListener('scroll',addBg)


    return (
       <section className="navBarSection">
        <div className={transparent}>
            <div className="logoDiv">
                <a href="/logo" className="logo">
                    <h1 className="flex"><FcFilmReel className="icon"/>ATOM TICKETS</h1>
                </a>
            </div>
                   
            {/* Navbar section with dynamic visibility */}
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                         <a href="#Home" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#Movies" className="navLink">Popular Movies</a>
                    </li>

                    <li className="navItem">
                        <a href="#Upcoming" className="navLink">Upcoming Movies</a>
                    </li>

                    <li className="navItem">
                        <a href="#Footer" className="navLink">Contact</a>
                    </li>
                </ul>

                {/* Close button to hide the navbar */}
                <div onClick={removeNav} className="closeNavBar">
                            <AiFillCloseCircle className="icon"/>
                </div>


            </div>

            {/* Toggle button to show the navbar (visible on smaller screens) */}
            <div onClick={showNav} className="toggleNavBar">
                <BsGrid3X3Gap className="icon"/>

            </div>
                   
               
            
        </div>
       </section>
    )
}

export default AfterLoginNav