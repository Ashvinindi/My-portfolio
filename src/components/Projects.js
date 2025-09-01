import React from "react";
import "./Projects.css";
import mongodbIcon from "../Assets/mongodb.png";
import nodeIcon from "../Assets/nodejs.png";
import reactIcon from "../Assets/reactjs.png";
import JavaIcon from "../Assets/java.png";

function Projects() {
  return (
    <section id="projects">
      <h2>The most recent projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3> Web for Coffee Shop Menu Viewing</h3>
          <p>
            <b>React js | Static Web Page</b> <br />
            Designed and developed a responsive coffee shop website to showcase the menu and shop details.<br/>
Focused on clean UI, smooth navigation, and user-friendly layout.<br/>
Learned and applied core React.js concepts like components and props.<br/>
Built as a practice project to strengthen frontend development skills.

          </p>
          <a
            href="https://github.com/Ashvinindi/coffee-page"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Source Code
          </a>
        </div>

        <div className="project-card">
          <h3>Movie Ticket Booking system</h3>
          <p>
             <b>Node js | Dynamic Web Page</b><br/>
             Currently developing a movie ticket booking web application to explore backend development concepts.
Working with Node.js to handle server-side logic and dynamic content rendering.<br/>
Aimed at implementing features such as user registration, movie listings, seat selection, and booking confirmation.
Designed as a learning project to strengthen backend skills and understand full-stack workflows.
          </p>
          <a
            href="https://github.com/Ashvinindi/codefusion"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
           Source code
          </a>
        </div>
      </div>
      <section className="skills-section">
<h2>My Skills</h2>
<div className="skills-container">
    <div className="skill">
        <img src={nodeIcon} alt="Node.js Icon" />
        <p>Node.js</p>
    </div>
    <div className="skill">
        <img src={mongodbIcon} alt="MongoDB Icon" />
        <p>MongoDB</p>
    </div>
    <div className="skill">
        <img src={reactIcon} alt="React.js Icon" />
        <p>React.js</p>
    </div>
    <div className="skill">
        <img src={JavaIcon} alt="Java Icon" />
        <p>Java</p>
    </div>
</div>
</section>


    </section>


  );
}

export default Projects;
