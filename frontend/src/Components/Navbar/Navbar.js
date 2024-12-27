import React,{useState} from "react";
import "./Navbar.css";
import { FcFilmReel } from 'react-icons/fc';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs'
// import logo from '../Assets/logo.jpg'

const Navbar = () => {
    //code to toggle /show navbar
    const [active, setActive] =useState ('navBar')
    const showNav=()=>{
        setActive('navBar activeNavBar')
    }

    //code to remove nav bar
    const removeNav=()=>{
        setActive('navBar ')
    }


    return (
       <section className="navBarSection">
        <div className="header">
            <div className="logoDiv">
                <a href="#" className="logo">
                    <h1 className="flex"><FcFilmReel className="icon"/>ATOM TICKETS</h1>
                </a>
            </div>
                   
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                         <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Movies</a>
                    </li>
                            {/* <li className="navItem">
                                <a href="#" className="navLink">Seat Booking</a>
                            </li>
                            <li className="navItem">
                                <a href="#" className="navLink">Payment</a>
                            </li> */}

                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>
                            

                    <div className="headerBtns flex">
                        <button className="btn loginBtn">
                            <a href="#" >Login</a>
                        </button>

                        <button className="btn ">
                            <a href="#" >Sign Up</a>
                        </button>
                    </div>

                </ul>


                <div onClick={removeNav} className="closeNavBar">
                            <AiFillCloseCircle className="icon"/>
                </div>


            </div>

            <div onClick={showNav} className="toggleNavBar">
                <BsGrid3X3Gap className="icon"/>

            </div>
                   
               
            
        </div>
       </section>
    )
}

export default Navbar