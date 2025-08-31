import React from "react";
import "./Hero.css";
import profilepic from "../Assets/photo1.jpg";

function Hero(){
    return (
        <section id="hero" className="Hero">
        <img src={profilepic} alt="profilepic" className="profile-pic "/>
        <div className="hero-text">
            <h1> Let's Build & Solve</h1>
            <p>
            Undergraduate Computing and Information System Student | Problem-Solving
          Enthusiast | Interested in AI and Web Development.
            </p>
            <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            >
                LinkedIn
            </a>
            
        </div>
        </section>
    );
    
}
export default Hero;