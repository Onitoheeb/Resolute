import React from 'react';
import './hero.css';

export const Hero = () => {
  return (
    <div className="hero-section" style={{
      backgroundImage: "url('/dist/76f5bcca3008c8ebf6ee.jpg')"
    }}>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Unlock the World's Languages with Resolute</h1>
          <p>Embark on a journey of language discovery with our immersive and personalized courses</p>
          <div className="hero-button">
            <button>Start Learning Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
