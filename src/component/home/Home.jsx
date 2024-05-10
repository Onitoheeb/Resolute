import React, { useEffect } from 'react';
import './home.css';
import {Hero} from './sections/hero/Hero.jsx';
import {About} from './sections/about/About.jsx';
import {Featured} from './sections/featured-course/Featured.jsx';
import {Useful} from './sections/useful/Useful.jsx';
import {Testimonial} from './sections/testimonial/Testimonial.jsx'
import {QuickTest} from './sections/test /Quick-test.jsx'
import {Join} from './sections/join/Join.jsx';
import {Footer} from './sections/footer/Footer.jsx';
export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
    <div className="home">
      <Hero />
      <About />
      <Featured />
      <Useful />
      <Testimonial />
      <QuickTest />
      <Join />
      <Footer />
    </div>
  )
}