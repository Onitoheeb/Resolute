import React from 'react';
import './dischange.css';
import {Img} from '/src/singles/image/Img.jsx'
export const Dischange = () => {
  return(
    <div className="dischange">
      <div className="discussion-forum">
        <div className="discussion-text">
          <h3>Discussion Forums</h3>
          <p>Explore our diverse range of discussion forums covering grammar, vocabulary, cultural exchange, study tips, and more. Share your insights, ask questions, and learn from fellow community members.</p>
        </div>
        <div className="discussion-image">
          <Img img="/assets/courses/read-515531_640.jpg"/>
        </div>
      </div>
      <div className="discussion-forum reverse">
        <div className="discussion-image">
          <Img img="/assets/courses/reading-4045414_640.jpg"/>
        </div>
        <div className="discussion-text">
          <h3>Language Exchange</h3>
          <p>Looking to practice a new language? Connect with language exchange partners who share your interests and proficiency levels. Exchange language skills and immerse yourself in authentic language practice.</p>
        </div>
      </div>
    </div>
  )
}