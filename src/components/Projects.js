import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>The most recent projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3> Web for Coffee Shop</h3>
          <p>
            React js | Static Web Page <br />
            A webpage for see the menu of a coffee shop.
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
             Node js | Dynamic Web Page<br/>
             On going project, to study backend aspects.
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
    </section>
  );
}

export default Projects;
