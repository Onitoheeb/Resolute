import React, {useState, useEffect} from 'react';
import './about.css';
import {Img} from '/src/singles/image/Img.jsx';
export const About = () => {
  return(
    <div className="about-section">
      <div className="about-img">
        <Img img="/assets/hero-img.jpg" />
      </div>
      <div className="about-text">
        <h3>Discover the Future of Language Learning with Resonate</h3>
        <p>We are passionate about breaking down language barriers and making language learning an enriching experience for everyone. Our platform is designed to empower learners of all levels, providing a personalized and immersive journey into the world of languages.</p>
        <p>Empowering Global Communication through Language Mastery.</p>
      </div>
    </div>
  )
}