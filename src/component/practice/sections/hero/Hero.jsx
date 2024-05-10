import React from 'react';
import './hero.css'

export const Hero = () => {
  return(
    <div className="practice-hero" style={{
        backgroundImage: "url('/dist/c5e87d34b1adb504272b.jpg')"
      }}>
      <h1>Dive Into Our Range of Practice Resources</h1>
      <p>Dive into our curated selection of grammar guides, vocabulary lists, audio/video materials, and more, designed to cater to learners of all levels and preferences.</p>
    </div>
  )
}