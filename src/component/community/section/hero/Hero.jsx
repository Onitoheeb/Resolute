import React from 'react';
import './hero.css';

export const Hero = () => {
  return(
    <div className="community-hero-section" style={{
        backgroundImage: "url('/dist/c4d8c43ff600e3c6aac1.jpg')"
      }}>
      <h1>Welcome to Our Language Learning Community!</h1>
      <p>Join a vibrant community of language enthusiasts from around the world! Engage in discussions, find language exchange partners, and access valuable resources to enhance your language learning journey.</p>
    </div>
  )
}