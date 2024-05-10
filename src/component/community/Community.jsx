import React, { useEffect } from 'react';
import './community.css';
import {Hero} from './section/hero/Hero.jsx';
import {Dischange} from './section/discussion-exchange/Dischange.jsx';
import {Tutors} from './section/tutors/Tutors.jsx'
import {Footer} from '/src/component/home/sections/footer/Footer.jsx';
export const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
    <div className="community-section">
      <Hero />
      <Tutors />
      <Dischange />
      <Footer />
    </div>
  )
}