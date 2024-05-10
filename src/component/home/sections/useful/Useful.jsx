import React from 'react';
import './useful.css';
import {Interact} from '/src/component/home/sections/about/apart-guys/Interactive.jsx';
import {Tailored} from '/src/component/home/sections/about/apart-guys/Tailor.jsx';
import {Expert} from '/src/component/home/sections/about/apart-guys/Expert.jsx'
import {Img} from '/src/singles/image/Img.jsx';

export const Useful = () => {
  return(
    <div className="useful-section">
      <h3>Learn Any Language, Anywhere: Explore Our Simple 3-Step Process</h3>
      <div className="useful">
        <div className="useful-port">
          <Img img="/assets/useful/Online-learning-activities.jpg"/>
          <Expert />
        </div>
        <div className="useful-port">
          <Img img="/assets/useful/504387_shutterstock_16d76998306_487275.jpg"/>
          <Interact />
        </div>
        <div className="useful-port">
          <Img img="/assets/useful/BC-Blog_OnlineLearningChallenges_6.17.20_1.jpg"/>
          <Tailored />
        </div>
      </div>
    </div>
  )
}