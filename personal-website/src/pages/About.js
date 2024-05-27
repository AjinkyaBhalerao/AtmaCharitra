import React from 'react';
import './About.css';

const About = () => (
  <div className="about">
    <h2>About Me</h2>
    <p>I am a data scientist with a strong background in data science and computer science...</p>
    <div className="background">
      <img src="C:\Users\Dell\Desktop\Website\AtmaCharitra\profile.jpg" alt="Background" className="background-image" />
      <div className="overlay">
        <p>Detailed introduction text with fade-in effect.</p>
      </div>
    </div>
  </div>
);

export default About;
