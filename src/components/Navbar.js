import React from "react";
import "./Navbar.css";

function Navbar(){
    return (
        <header className="navbar">
            <h2 className="logo"> Ashvinindi Uthkarsha</h2>
            <nav>
                <a href="#hero"> Home </a>
                <a href="#projects"> Projects</a>
                <a href="#contact"> Contact Me</a>
                <a href="/cv.pdf" download className="btn"> Download CV</a>
                
            </nav>
        </header>
    );
}
export default Navbar;