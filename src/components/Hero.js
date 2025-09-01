import React from "react";
import "./Hero.css";
import profilepic from "../Assets/photo1.png";

function Hero(){
    return (
        <section id="hero" className="Hero">
        <img src={profilepic} alt="profilepic" className="profile-pic "/>
        <div className="hero-text">
            <h1> Let's Build & Solve</h1>
            <h2> Undergraduate Computing and Information System Student</h2>
            <p>
            I’m an undergraduate student in Computing and Information Systems with a strong interest in full-stack development | I enjoy working on both frontend and backend technologies while continuously learning DevOps practices and project management skills. Passionate about building practical solutions, I’m focused on growing as a versatile developer and problem-solver.
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