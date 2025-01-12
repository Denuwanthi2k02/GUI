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

    //code to add background color to header

    const[transparent,setTransparent] = useState ('header')
    const addBg =()=>{
        if (window.scrollY >=10){
            setTransparent('header activeHeader')
        }

        else {
            setTransparent('header')
        }

    }
    window.addEventListener('scroll',addBg)


    return (
       <section className="navBarSection">
        <div className={transparent}>
            <div className="logoDiv">
                <a href="/logo" className="logo">
                    <h1 className="flex"><FcFilmReel className="icon"/>ATOM TICKETS</h1>
                </a>
            </div>
                   
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                         <a href="/link" className="navLink">Home</a>
                    </li>

                    <li className="navItem dropdown">
                        <a href="/link" className="navLink">Movies</a>
                    </li>

                    <li className="navItem">
                        <a href="/link" className="navLink">Contact</a>
                    </li>
                            

                    <div className="headerBtns flex">
                        <button className="btn loginBtn">
                            <a href="<Login/>" >Login</a>
                        </button>

                        <button className="btn ">
                            <a href="/link" >Sign Up</a>
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