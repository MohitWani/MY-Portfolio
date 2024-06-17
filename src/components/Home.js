// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <h1>Welcome to My Portfolio</h1>
      <div className="animated-photo">
        <img src={`${process.env.PUBLIC_URL}/my-photo.jpg`} alt="Animated" />
      </div>
    </section>
  );
};

export default Home;
