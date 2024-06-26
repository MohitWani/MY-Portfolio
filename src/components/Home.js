// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <h1>
          Hi,<br />
          I'm <span className="highlight">Mohit</span><br />
          AI Developer
        </h1>
        <div className="centered-button">
          <a href="#contact" className="contact-button">Contact Me</a>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        
      </div>
      <div className="home-right">
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/my-photo.jpg`} alt="My Name" />
        </div>
      </div>
    </section>
  );
};

export default Home;
