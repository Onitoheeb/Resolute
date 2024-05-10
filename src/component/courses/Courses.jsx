import React, { useEffect } from 'react';
import './courses.css'
import {Hero} from './section/hero/Hero.jsx';
import {Coursehold} from './section/coursehold/Coursehold.jsx'
import {Footer} from '/src/component/home/sections/footer/Footer.jsx';
export const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
    <div>
      <Hero />
      <Coursehold />
      <Footer />
    </div>
  )
}